# 2026-07-08 red-team — cowork.md, solo non-technical reader

Simulated a smart, non-technical person going through cowork.md alone, session by
session, cross-checking UI claims against `docs/cowork/`. Line numbers refer to
cowork.md as of this date.

## Biggest wins (summary)

1. The reader is never told how to look at their own site — three sessions depend on it.
2. The *context* exercise destroys its own comparison: three tasks rewrite the same file.
3. *ground* asks a friend to review a site that isn't published until *ending*.
4. "Hold the Wispr key" (think, step 2) names a key Setup never identified.
5. Sessions lack numbers, times, and end-of-session wins, so a solo reader can't place or pace themselves.

## High priority

- **H1. Say once where the site is seen.** Setup step 6 ends "show it to me" with no
  "You'll see …"; understand step 3 says "what you see on the page"; ground step 2
  says "Open the site yourself" — the file never explains how. Docs only say outputs
  can be "previewed and downloaded" in the session (get-started, l.100), which for a
  folder of HTML files is not the real viewing path. Fix: in Setup step 6, add one
  canonical line — e.g. "To see it yourself: in the `website` folder, double-click
  `index.html`; it opens in your browser. That's how you'll check Claude's work all
  course." (Verify whether Cowork previews it in-session; if so teach that instead —
  `[?: does Cowork render a local HTML file in the task view?]`.) Every later "look
  at it" then just works.
- **H2. context step 1 (l.162) overwrites its own comparanda.** Three fresh tasks
  each "Rewrite my About page" — task 2 clobbers task 1's version; by step 2 there is
  nothing to compare. Fix: have each task save to its own file ("…and save it as
  `about-v1.html`", v2, v3), or ask for the rewrite in the reply without touching the
  folder, then step 3 "keep the winner" applies it.
- **H3. ground step 3 (l.150) needs a published site.** "Send the site to a friend"
  — hosting happens two sessions later in ending. A solo reader stalls at "send…
  how?" Fix: either "send two screenshots of the site" here, or move the
  friend-review to ending (it already sends the link to three people) and keep
  ground to the link/image audit.
- **H4. Name the Wispr key in Setup.** think step 2 (l.55) says "Hold the Wispr key";
  Setup step 3 never names it. Fix in Setup step 3: "note the hotkey its onboarding
  assigns — that's your dictation key from now on `[?: current default hotkey]`."
  Also: holding a key for a five-minute ramble is rough; if Wispr has a hands-free
  toggle, mention it.
- **H5. Solo fallbacks for cohort steps.** mingle steps 1 and 3 (coursemate swap) and
  ending step 4 ("the course group") dead-end a reader doing this alone — which the
  track claims to support. Fix: one fallback clause each — "no coursemate handy? Use
  any friend, or a site from a public gallery `[?: good personal-site gallery]`" /
  "no group? Skip to your three people."

## Medium priority

- **M1. Signpost the sessions.** Bare lowercase headings ("## ease", "## mingle")
  read as typos and give no order, duration, or place. Only Setup has a time
  estimate. Fix: "## 3 · ease — ~20 min" style (numbers + rough time), keeping the
  lesson slugs. Cheap, and the page suddenly skims as a course.
- **M2. End each session on its win.** Setup has "A page with your name on it is the
  whole win today"; the other seven just stop (understand, ground, and context end
  on advice, not a state). Fix: one closing line per session naming the observable
  win ("You now have a full first draft"; "Instructions carried a briefing you
  didn't give").
- **M3. Missing click paths.** Three steps break the exact-button-name rule:
  - ease step 2 (l.92): "in the project view" — give the path (open project →
    **Instructions** → **Edit**, per organize-tasks-with-projects.md l.68).
  - ease step 5 (l.100): say it's in the *browser*, not the app — "go to
    [claude.ai/settings/cowork](https://claude.ai/settings/cowork), click **Edit**
    next to **Global instructions**" (get-started l.170-172).
  - stop step 2 (l.130): "Find the permission-mode selector" is a scavenger hunt —
    state where it sits in the task view `[?: exact location of mode selector]`.
- **M4. Setup step 7 isn't a step.** "One rule of physics" is a fact, breaking the
  one-action-per-step rule and burying the file's most important caveat as item 7.
  Fix: unnumber it — a short bolded note after step 6 (or promote to the intro,
  which already half-says it and would then say it once).
- **M5. Staged-rollout failure note.** Setup step 2's failure line covers "outdated
  app or unpaid plan" but not the caveat-file case: a paid Pro reader whose account
  hasn't gotten Cowork yet (rollout started with Max). Add it to the same line so
  the reader doesn't conclude they broke something.
- **M6. Mode persistence unstated.** stop step 2 says pick "Act without asking" *for
  this project* — if the selector is per-task, it silently resets and step 3's
  "flip it back" confuses. Verify and phrase accordingly `[?: is the mode remembered
  per project or chosen per task?]`.
- **M7. "task" vs "session".** cowork.md says "task" throughout; the docs' UI
  language is mostly "session" (get-started l.122 "Start a Cowork session"). If the
  buttons say "session", the reader can't match instructions to screen. Check the
  live UI once and use its word.
- **M8. understand step 1 has no fallback.** "Find the part that's wrong. There is
  one." If the reader sees nothing wrong, they stall on session 2 of the course.
  One clause: "Nothing jumps out? Narrow your browser window to phone width, or
  read the text aloud."
- **M9. "re-roll" is jargon** (understand, l.71 and step 2). Gloss it once: "don't
  re-roll — that is, don't just ask it to try again."

## Low priority

- **L1.** Setup l.15 "Also the introduction session's exercise." — cryptic fragment
  for someone who lands on this file first; say "This is the exercise for the intro
  session — do it before session 1" or cut.
- **L2.** ease step 3 ("Rule for the rest of your life…") and context step 4 ("Feed
  it text…") are rules, not actions, sitting in numbered lists. Fold ease-3 into
  step 2; make context-4 a closing note.
- **L3.** ending step 2: give the success shape — "You'll see a live URL like
  `something.netlify.app`" — and clarify when the account prompt appears (before or
  after the drag). Netlify facts are flagged unverified in the 07-07 caveats;
  resolving that resolves this.
- **L4.** Setup prerequisites omit Wispr Flow's cost/account `[?: Wispr Flow free
  tier limits]` — the block promises all prerequisites up front.
- **L5.** ease step 4 success is vague: say what "it should already know you" looks
  like (e.g. it uses your name and tone unprompted).

## Minor nits

- stop Stretch, l.139: "sits at a different layer" — light jargon; "is enforced by
  the app, not by your words" says it plainer.
- ground step 1 assumes the site already has multiple links and images; the think
  build plausibly made a one-page site. "If your site has no links yet, ask Claude
  to add a links section first" or reword to "every link, image, and section."
- mingle step 2's prompt has a stray specific ("that thing they do with the
  header") that reads as if the reader must have noticed a header thing; fine as
  riff-material, but a literal reader may pause.
- Intro l.7-8 and Setup step 7 both explain the desktop-app requirement; after M4's
  merge, keep one.

## What checked out

Projects → + → Use an existing folder; per-project Instructions; Settings → Cowork →
Global instructions; "Ask before acting"/"Act without asking" names; deletion
guardrail in any mode; remote sessions surviving laptop close while local folders
need the app open — all match the doc mirror (organize-tasks-with-projects.md,
guide-projects.md, get-started-with-claude-cowork.md, use-claude-cowork-safely.md).
