/* Claude On-ramp — BlueDot-style course shell.
   Progress in localStorage; comments session-only in sessionStorage. */

(function () {
  "use strict";

  // ---------- state ----------
  const PROGRESS_KEY = "onramp-progress-v1";
  const COMMENTS_KEY = "onramp-comments-v1";

  let progress = load(localStorage, PROGRESS_KEY) || { done: {}, answers: {} };
  let comments = load(sessionStorage, COMMENTS_KEY) || [];
  const openUnits = new Set();
  let route = { u: 0, s: 0 }; // zero-indexed
  let pendingSelection = null; // {cid, start, end, quote} awaiting popover submit
  let activeCommentId = null;

  function load(store, key) {
    try { return JSON.parse(store.getItem(key)); } catch { return null; }
  }
  function saveProgress() { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); }
  function saveComments() { sessionStorage.setItem(COMMENTS_KEY, JSON.stringify(comments)); }

  // ---------- helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const lessonEl = $("#lesson");
  const scrollEl = $("#lesson-scroll");
  const railEl = $("#comments-rail");
  const pillEl = $("#comment-pill");
  const popoverEl = $("#comment-popover");
  const popoverText = $("#popover-text");

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function routeKey() { return route.u + "/" + route.s; }
  function session() { return COURSE.units[route.u].sessions[route.s]; }

  function flatSessions() {
    const out = [];
    COURSE.units.forEach((u, ui) => u.sessions.forEach((s, si) => out.push({ u: ui, s: si })));
    return out;
  }

  // Required completable item keys for a session
  function completableKeys(u, s) {
    const keys = [];
    COURSE.units[u].sessions[s].blocks.forEach((b, bi) => {
      if (b.type === "resources") b.items.forEach((_, ii) => keys.push(`${u}/${s}/r${bi}-${ii}`));
      if (b.type === "exercises") b.items.forEach((_, ii) => keys.push(`${u}/${s}/e${bi}-${ii}`));
    });
    return keys;
  }

  function sessionDoneCount(u, s) {
    const keys = completableKeys(u, s);
    return { done: keys.filter((k) => progress.done[k]).length, total: keys.length };
  }

  function coursePercent() {
    let done = 0, total = 0;
    COURSE.units.forEach((unit, ui) => unit.sessions.forEach((_, si) => {
      const c = sessionDoneCount(ui, si);
      done += c.done; total += c.total;
    }));
    return total ? Math.round((100 * done) / total) : 0;
  }

  // ---------- router ----------
  function parseHash() {
    const m = location.hash.match(/^#\/(\d+)\/(\d+)/);
    let u = 0, s = 0;
    if (m) { u = +m[1] - 1; s = +m[2] - 1; }
    if (!COURSE.units[u]) u = 0;
    if (!COURSE.units[u].sessions[s]) s = 0;
    return { u, s };
  }

  function go(u, s) { location.hash = `#/${u + 1}/${s + 1}`; }

  function onRoute() {
    route = parseHash();
    openUnits.add(route.u);
    dismissCommentUI();
    activeCommentId = null;
    renderAll();
    scrollEl.scrollTop = 0;
  }

  // ---------- sidebar ----------
  function renderSidebar() {
    $("#course-progress").textContent = coursePercent() + "% completed";

    const nav = $("#unit-nav");
    nav.innerHTML = "";
    COURSE.units.forEach((unit, ui) => {
      const unitEl = el("div", "unit" + (openUnits.has(ui) ? " open" : ""));

      const head = el("button", "unit-header");
      head.append(el("span", null, `${ui + 1}. ${unit.title}`), el("span", "u-chev", "›"));
      head.addEventListener("click", () => {
        openUnits.has(ui) ? openUnits.delete(ui) : openUnits.add(ui);
        renderSidebar();
      });
      unitEl.append(head);

      const list = el("div", "unit-sessions");
      unit.sessions.forEach((sess, si) => {
        const item = el("div", "session-item" + (ui === route.u && si === route.s ? " active" : ""));
        const c = sessionDoneCount(ui, si);
        const radio = el("span", "s-radio" + (c.total > 0 && c.done === c.total ? " done" : ""));
        const body = el("div");
        body.append(el("div", "s-title", sess.title));
        const meta = c.total
          ? `${sess.minutes}min · ${c.done} of ${c.total} completed`
          : `${sess.minutes}min`;
        body.append(el("div", "s-meta", meta));
        item.append(radio, body);
        item.addEventListener("click", () => go(ui, si));
        list.append(item);
      });
      unitEl.append(list);
      nav.append(unitEl);
    });
  }

  // ---------- crumbs & prev/next ----------
  function renderCrumbs() {
    const crumbs = $("#crumbs");
    crumbs.innerHTML = "";
    const a = el("a", null, "Courses");
    a.href = "#/1/1";
    crumbs.append(a, el("span", "crumb-sep", "›"));
    const b = el("a", null, COURSE.title);
    b.href = "#/1/1";
    crumbs.append(b, el("span", "crumb-sep", "›"));
    crumbs.append(el("span", "crumb-current", `${route.u + 1}. ${COURSE.units[route.u].title}`));

    const flat = flatSessions();
    const idx = flat.findIndex((f) => f.u === route.u && f.s === route.s);
    $("#prev-btn").disabled = idx <= 0;
    $("#next-btn").disabled = idx >= flat.length - 1;
    $("#prev-btn").onclick = () => { const f = flat[idx - 1]; if (f) go(f.u, f.s); };
    $("#next-btn").onclick = () => { const f = flat[idx + 1]; if (f) go(f.u, f.s); };
  }

  // ---------- lesson ----------
  let cidCounter = 0;
  function cid() { return "c" + cidCounter++; }

  function renderLesson() {
    cidCounter = 0;
    lessonEl.innerHTML = "";
    const sess = session();

    const eyebrow = el("div", "eyebrow", `Unit ${route.u + 1}: ${COURSE.units[route.u].title}`);
    const h1 = el("h1", null, sess.title);
    h1.dataset.cid = cid();
    lessonEl.append(eyebrow, h1);

    sess.blocks.forEach((b, bi) => lessonEl.append(...renderBlock(b, bi)));
  }

  function renderBlock(b, bi) {
    switch (b.type) {
      case "video": {
        const v = el("div", "video-ph");
        const play = el("div", "play", "▶");
        v.append(play, el("div", "video-label", b.label || "Placeholder video"));
        return [v];
      }
      case "p": {
        const p = el("p", null, b.text);
        p.dataset.cid = cid();
        return [p];
      }
      case "heading": {
        const h = el("div", "section-heading", b.text);
        h.dataset.cid = cid();
        return [h];
      }
      case "list": {
        const ul = el("ul", "prose-list");
        b.items.forEach((t) => ul.append(el("li", null, t)));
        ul.dataset.cid = cid();
        return [ul];
      }
      case "resources": {
        const h = el("div", "section-heading", `Resources (${b.minutes} mins)`);
        const rows = b.items.map((item, ii) => resourceRow(item, `${routeKey()}/r${bi}-${ii}`, true));
        return [h, ...rows];
      }
      case "optional": {
        const toggle = el("button", "opt-toggle");
        toggle.append(el("span", null, "Optional Resources"), el("span", "o-chev", "⌄"));
        const body = el("div", "opt-body");
        b.items.forEach((item, ii) => body.append(resourceRow(item, `${routeKey()}/o${bi}-${ii}`, false)));
        toggle.addEventListener("click", () => {
          toggle.classList.toggle("open");
          body.classList.toggle("open");
        });
        return [toggle, body];
      }
      case "exercises": {
        return b.items.map((item, ii) => exerciseRow(item, `${routeKey()}/e${bi}-${ii}`));
      }
      case "continue": {
        const wrap = el("div", "continue-wrap");
        const btn = el("button", "continue-btn");
        btn.append(el("span", null, "Continue"), el("span", null, "›"));
        btn.addEventListener("click", () => $("#next-btn").click());
        wrap.append(btn);
        return [wrap];
      }
      default:
        return [];
    }
  }

  function checkCircle(key, counts) {
    const circle = el("button", "check-circle" + (progress.done[key] ? " done" : ""));
    circle.title = progress.done[key] ? "Mark as not completed" : "Mark as completed";
    circle.addEventListener("click", () => {
      progress.done[key] = !progress.done[key];
      if (!progress.done[key]) delete progress.done[key];
      saveProgress();
      rerenderPreservingScroll();
    });
    return circle;
  }

  function resourceRow(item, key, counts) {
    const row = el("div", "completable");
    row.append(checkCircle(key, counts));

    const card = el("div", "card");
    card.dataset.cid = cid();
    const titleRow = el("div", "res-title-row");
    const link = el("a");
    link.href = item.url || "#";
    if (item.url && item.url !== "#") { link.target = "_blank"; link.rel = "noopener"; }
    link.append(
      el("span", "res-favicon", item.favicon || "🔗"),
      el("span", "res-title", item.title),
      el("span", "res-ext", "↗")
    );
    titleRow.append(link);
    card.append(titleRow);
    if (item.subtitle) card.append(el("div", "res-subtitle", item.subtitle));
    card.append(el("p", "res-desc", item.desc));
    const meta = el("div", "res-meta");
    meta.append(el("span", null, item.meta));
    if (item.listen) meta.append(el("span", null, "·"), el("span", "listen", "▷ Listen to article"));
    card.append(meta);

    row.append(card);
    return row;
  }

  function exerciseRow(item, key) {
    const row = el("div", "completable");
    row.append(checkCircle(key, true));

    const card = el("div", "card");
    card.dataset.cid = cid();
    card.append(el("div", "ex-title", item.title));
    (item.body || []).forEach((t) => card.append(el("p", "ex-body", t)));
    if (item.note) card.append(el("p", "ex-note", item.note));

    const ta = el("textarea", "ex-input");
    ta.placeholder = "Enter your answer here";
    ta.value = progress.answers[key] || "";

    const btn = el("button", "ex-complete");
    const syncBtn = () => {
      if (progress.done[key]) {
        btn.textContent = "Completed ✓";
        btn.classList.add("completed");
        btn.disabled = false;
      } else {
        btn.textContent = "Complete";
        btn.classList.remove("completed");
        btn.disabled = ta.value.trim() === "";
      }
    };
    syncBtn();

    ta.addEventListener("input", () => {
      progress.answers[key] = ta.value;
      saveProgress();
      syncBtn();
    });
    btn.addEventListener("click", () => {
      progress.done[key] = !progress.done[key];
      if (!progress.done[key]) delete progress.done[key];
      saveProgress();
      rerenderPreservingScroll();
    });

    card.append(ta, btn);
    row.append(card);
    return row;
  }

  function rerenderPreservingScroll() {
    const top = scrollEl.scrollTop;
    renderAll();
    scrollEl.scrollTop = top;
  }

  function renderAll() {
    renderSidebar();
    renderCrumbs();
    renderLesson();
    applyHighlights();
    layoutComments();
  }

  // ---------- comments ----------
  function pageComments() {
    return comments.filter((c) => c.route === routeKey());
  }

  // text offset of (container, offset) within root
  function textOffset(root, container, offset) {
    const r = document.createRange();
    r.selectNodeContents(root);
    try { r.setEnd(container, offset); } catch { return 0; }
    return r.toString().length;
  }

  function wrapRange(root, start, end, cmid) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const targets = [];
    let pos = 0, n;
    while ((n = walker.nextNode())) {
      const len = n.textContent.length;
      if (pos + len > start && pos < end) {
        targets.push({ node: n, from: Math.max(0, start - pos), to: Math.min(len, end - pos) });
      }
      pos += len;
      if (pos >= end) break;
    }
    targets.forEach(({ node, from, to }) => {
      const r = document.createRange();
      r.setStart(node, from);
      r.setEnd(node, to);
      const mark = document.createElement("mark");
      mark.className = "c-hl";
      mark.dataset.cmid = cmid;
      try { r.surroundContents(mark); } catch { /* skip malformed */ }
    });
  }

  function applyHighlights() {
    pageComments().forEach((c) => {
      const root = lessonEl.querySelector(`[data-cid="${c.cid}"]`);
      if (root) wrapRange(root, c.start, c.end, c.id);
    });
    lessonEl.querySelectorAll("mark.c-hl").forEach((m) => {
      m.addEventListener("click", (e) => {
        e.stopPropagation();
        setActiveComment(m.dataset.cmid);
      });
    });
  }

  function layoutComments() {
    railEl.innerHTML = "";
    const list = pageComments();
    scrollEl.classList.toggle("has-comments", list.length > 0);
    if (!list.length) return;

    const lessonRect = lessonEl.getBoundingClientRect();
    const scrollRect = scrollEl.getBoundingClientRect();
    const left = Math.min(
      lessonRect.right - scrollRect.left + 26,
      scrollEl.clientWidth - 256 - 14
    );

    // sort by highlight vertical position
    const positioned = list
      .map((c) => {
        const mark = lessonEl.querySelector(`mark[data-cmid="${c.id}"]`);
        if (!mark) return null;
        const top = mark.getBoundingClientRect().top - scrollRect.top + scrollEl.scrollTop;
        return { c, top };
      })
      .filter(Boolean)
      .sort((a, b) => a.top - b.top);

    let lastBottom = 0;
    positioned.forEach(({ c, top }) => {
      const card = el("div", "comment-card" + (c.id === activeCommentId ? " active" : ""));
      card.style.left = left + "px";

      const head = el("div", "cc-head");
      head.append(el("div", "cc-avatar", "A"));
      const who = el("div");
      who.append(el("div", "cc-author", "You"), el("div", "cc-time", c.time));
      head.append(who);
      const resolve = el("button", "cc-resolve", "✓");
      resolve.title = "Resolve";
      resolve.addEventListener("click", (e) => {
        e.stopPropagation();
        comments = comments.filter((x) => x.id !== c.id);
        saveComments();
        if (activeCommentId === c.id) activeCommentId = null;
        rerenderPreservingScroll();
      });
      head.append(resolve);

      card.append(head);
      card.append(el("div", "cc-quote", "“" + c.quote + "”"));
      card.append(el("div", "cc-text", c.text));
      card.addEventListener("click", () => setActiveComment(c.id));

      railEl.append(card);
      const desired = Math.max(top, lastBottom + 10);
      card.style.top = desired + "px";
      lastBottom = desired + card.offsetHeight;
    });
  }

  function setActiveComment(id) {
    activeCommentId = activeCommentId === id ? null : id;
    lessonEl.querySelectorAll("mark.c-hl").forEach((m) =>
      m.classList.toggle("active", m.dataset.cmid === activeCommentId)
    );
    layoutComments();
  }

  function dismissCommentUI() {
    pillEl.hidden = true;
    popoverEl.hidden = true;
    popoverText.value = "";
    $("#popover-submit").disabled = true;
    pendingSelection = null;
  }

  // selection → pill
  document.addEventListener("mouseup", (e) => {
    if (popoverEl.contains(e.target) || pillEl.contains(e.target)) return;
    setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount) { pillEl.hidden = true; return; }
      const range = sel.getRangeAt(0);
      const startRoot = closestCid(range.startContainer);
      const endRoot = closestCid(range.endContainer);
      if (!startRoot || startRoot !== endRoot) { pillEl.hidden = true; return; }
      const quote = range.toString().trim();
      if (!quote) { pillEl.hidden = true; return; }

      const start = textOffset(startRoot, range.startContainer, range.startOffset);
      pendingSelection = {
        cid: startRoot.dataset.cid,
        start,
        end: start + range.toString().length,
        quote: quote.length > 90 ? quote.slice(0, 87) + "…" : quote,
      };

      const rect = range.getBoundingClientRect();
      pillEl.style.left = rect.left + rect.width / 2 + "px";
      pillEl.style.top = rect.top - 8 + "px";
      pillEl.hidden = false;
      popoverEl.hidden = true;
    }, 0);
  });

  function closestCid(node) {
    let n = node.nodeType === 1 ? node : node.parentElement;
    while (n && n !== lessonEl) {
      if (n.dataset && n.dataset.cid) return n;
      n = n.parentElement;
    }
    return null;
  }

  $("#pill-btn").addEventListener("click", () => {
    if (!pendingSelection) return;
    const pillRect = pillEl.getBoundingClientRect();
    pillEl.hidden = true;
    popoverEl.style.left = Math.min(pillRect.left, window.innerWidth - 320) + "px";
    popoverEl.style.top = pillRect.bottom + 10 + "px";
    popoverEl.hidden = false;
    popoverText.focus();
  });

  popoverText.addEventListener("input", () => {
    $("#popover-submit").disabled = popoverText.value.trim() === "";
  });

  $("#popover-cancel").addEventListener("click", dismissCommentUI);

  $("#popover-submit").addEventListener("click", () => {
    if (!pendingSelection || !popoverText.value.trim()) return;
    comments.push({
      id: "cm" + Math.random().toString(36).slice(2, 9),
      route: routeKey(),
      cid: pendingSelection.cid,
      start: pendingSelection.start,
      end: pendingSelection.end,
      quote: pendingSelection.quote,
      text: popoverText.value.trim(),
      time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
    });
    saveComments();
    dismissCommentUI();
    window.getSelection().removeAllRanges();
    rerenderPreservingScroll();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dismissCommentUI();
  });

  // reposition cards when the layout shifts
  window.addEventListener("resize", layoutComments);

  // ---------- sidebar hide ----------
  $("#hide-btn").addEventListener("click", () => {
    const hidden = $("#layout").classList.toggle("sidebar-hidden");
    $("#hide-btn").innerHTML = `<span class="hamburger">☰</span> ${hidden ? "Show" : "Hide"}`;
    setTimeout(layoutComments, 280);
  });

  // ---------- boot ----------
  window.addEventListener("hashchange", onRoute);
  if (!location.hash) location.hash = "#/1/1";
  onRoute();
})();
