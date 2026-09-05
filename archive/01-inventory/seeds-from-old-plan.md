# Seeds salvaged from the deleted plan (2026-07-02 draft)

Candidate lessons and structural ideas worth carrying into the inventory. The
full old plan is in git history (`plan.md`, deleted 2026-07-04).

## The point of the guide (old framing)
Coding agents matter because they collapse the friction of delegating hard
tasks — too technical, too small, too draining, too vague to start alone. The
reader should finish able to hand off work they wouldn't otherwise do, and to
decompose it into pieces they **verify, trust, or don't care about**.

## Lesson candidates
- **Talk, don't type.** Dictate; ramble and hedge on purpose. Wispr Flow.
- **Run many at once.** Agents are slow; you are not idle. Buy speed with
  parallelism, not with a worse model.
- **Save everything as files.** Visibility, course-correction, specific asks,
  reuse. The on-ramp to reusable instructions.
- **Best model, always.** Cost is worth more than Anthropic charges; buy more
  credits if you run out.
- **Permissions = consequences, not competence.** Reversible? Wave it through.
  Irreversible? That's the one to read.
- **Reuse arc: markdown files → CLAUDE.md → skills.** Files are reuse for
  yourself; skills are how reuse becomes sharing.
- **Context windows.** Long chats degrade; fresh session per task; the folder
  and files are the memory, not the chat.
- **Cowork = fenced on-ramp; Code = unfenced.** Cowork teaches the four
  intuitions Code assumes: folders, models, permissions, context.
- **git as save-points.** Undo, not engineering; what makes auto mode safe.
- **Superconductor** (super.engineering) as the interface for parallel sessions.
- **Google Workspace CLIs** (gog, gdoc): connector = rented hands, CLI = your
  own hands. GCP project setup; publish-the-app gotcha (7-day token expiry).
- **The 5x rule.** Anything you'll do 5+ times, ask whether Claude can.
- **First delegation = messy-folder inventory** (payoff in a minute, mistakes
  harmless). Alternative starter: transcript → summary doc.

## Lesson candidates from the rant-tips call (samples/rant-tips-claude-code.txt)
- You don't need to learn how to code.
- Use what the Anthropic engineers use (they're automating themselves into
  creating God).
- Expect the first day to be Linux, not Windows.
- Worry less about security; screen off specific fears with passive setups.
- Feed it text (CSV over XLSX; download the file when a connector fights you).
- It will lie to you: find the small test, don't ask for a self-report.
- Be curious when it fails (Karpathy: delegate thinking, not understanding).
- Ask Claude first; decide afterward whether a better prompt is worth it.
- Don't worry about tokens; do worry about long-context degradation (~200k:
  write down agreements, get a handoff prompt).
- Everything is just a file on your computer; future-proof, survives
  subscription changes.

## Structure ideas (for 03-lessons)
- Three page types: mainline (one opinionated path) / decision pages (the
  reasoning behind each default) / stuck-modules (collapsed help at friction
  points).
- Stuck-module inventory: OS install dialogs, Windows terminal paste, Mac
  folder-access prompts, "command not found", OAuth stalls, 2FA walls, managed
  laptops, usage limits, screenshot how-to.
- Assistant as catch-all + feedback sensor (see `../assistant-spec.md`).
- Process: dogfood on a clean machine; watch 2–3 real users; every hesitation
  becomes a module.

## Research flags
- **Claude Tag** — new Anthropic product, post-drafting; research what it is
  and what lessons it needs. [Alejo: pointer to docs welcome.]
- Everything in `research-2026-07-02.md` drifts: prices, plan names, install
  commands, permission-mode names, Cowork Windows requirements.
