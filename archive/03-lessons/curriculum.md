# Curriculum — lesson skeletons (2026-07-04)

Claude's first pass from Alejo's stage-03 direction: lessons packaged around a
clear win; the win never introduces new complexity (it uses only what the
lesson itself set up); two self-contained curriculums (Cowork and Code) with
repetition between them welcome, since most readers do only one; core messages
ranked within each lesson — the **headline** message gets the flair, supports
are delivered plainly; below-the-line items appear only as one-line sprinkles.
Message numbers refer to `../02-core/core-messages.md`.

## Shape

- **Front door** (one page) — both curriculums start here; it is better-start.txt, extended.
- **Cowork track** — 5 lessons, ends with a graduation decision.
- **Code track** — 5 lessons + optional power-ups. Startable directly; the
  install path is the desktop app's Code tab (love-agents' own steps), so no
  terminal on day one. [Confirm: terminal-based install demoted to a
  power-up/stuck-module rather than the mainline?]
- **Tag appendix** (one page) — Team/Enterprise readers only; pointer, not a track.

Every lesson skeleton lists: headline message → supports → the win → needs →
likely failures (stuck points) → sprinkles.

## Front door — "Your job"

- **Headline:** #2 You're the manager now ("really short on imagination").
- **Supports:** #13 same Claude, different fences; #5 best model, always
  ("bad manners to haggle").
- **Win:** the reader picks their door (Cowork or Code) knowing why, in under
  five minutes of reading.
- **Base text:** better-start.txt is the spine — extend it, don't replace it.
  Its two open brackets need candidates ("multi-expert genius" alternatives;
  "streams/ocean-loads of machine babble").
- **Needs:** nothing installed; a paid Claude account decision pointed at, not
  argued. ⚑ plan gating.
- **Sprinkles:** Tag exists, one line, pointing at the appendix.

## Cowork track

### C1 — Hand it your first mess
- **Headline:** #1 delegate what you'd never do yourself.
- **Supports:** #10 ask Claude first; the folder-is-the-workspace intuition.
- **Win:** a messy real folder of theirs, inventoried and reorganized (as a
  proposal), inside 15 minutes of installing. Mistakes harmless, payoff visible.
- **Needs:** desktop app + paid plan; first-run sandbox download. ⚑
- **Failures:** Windows Virtual Machine Platform toggle; 2 GB download stall;
  plan-gating confusion. ⚑
- **Sprinkles:** "Cowork sometimes hides files in its VM — ask it to put
  outputs in your folder."

### C2 — Talk to it
- **Headline:** #4 talk, don't type.
- **Supports:** #5 best model, always (reprise); state the problem, not a plan.
- **Win:** the same request typed-tersely vs dictated-rambling, side by side;
  the dictated one visibly wins. Uses the built-in mic — no new install; Wispr
  Flow is the upgrade hint, not the dependency.
- **Needs:** nothing new.
- **Sprinkles:** end your ramble with "ask me lots of questions."

### C3 — The trust protocol
- **Headline:** #3 verify it, trust it, or don't care.
- **Supports:** #8 it will lie to you / the small test; #7 save everything.
- **Win:** a task where Claude keeps a running markdown log and the reader
  designs one small test ("open the file so I can see you got the data
  right") — and the test catches something, or proves the work.
- **Needs:** nothing new.
- **Sprinkles:** review proportionally to stakes; ask for skimmable outputs.

### C4 — Run many
- **Headline:** #6 run many at once.
- **Supports:** #11 permissions gate consequences, not competence; #12 worry
  less about security.
- **Win:** three real tasks dispatched in five minutes; deliverables collected
  over coffee.
- **Needs:** nothing new.
- **Sprinkles:** queue tasks from your phone ⚑; prompt injection is
  documented-but-rare, one reassuring line.

### C5 — Teach it once, then choose
- **Headline:** #16 the reuse arc (files → instructions → skills).
- **Supports:** #13 same Claude, different fences (reprise); what Cowork
  deliberately can't do, framed as the fence, not a flaw.
- **Win:** a standing instruction (or small skill) that visibly fires in a
  fresh session — Claude already knows how they work. Then the graduation
  decision, honestly framed.
- **Needs:** nothing new.
- **Failures:** skills install by ZIP/directory here, not GitHub. ⚑
- **Sprinkles:** update skills by talking; context files brief every session.

## Code track

### K1 — Install what the engineers use
- **Headline:** #14 use what the Anthropic engineers use ("creating God").
- **Supports:** #15 expect the first day to be Linux; #10 ask Claude first
  (including about its own setup problems).
- **Win:** a working first session in an empty folder doing one real thing
  (the messy-folder inventory works here too) — the same day they started.
- **Needs:** desktop app → Code tab → Local, empty folder, auto permissions
  (love-agents' exact steps). ⚑ [terminal install = stuck-module, not mainline]
- **Failures:** sign-in loops; folder access dialogs; Windows key-combo
  differences (love-agents' own open bracket). ⚑
- **Sprinkles:** conversation history deletes after 30 days — ask to keep it. ⚑

### K2 — Delegate something you'd never do
- **Headline:** #1 delegate what you'd never do yourself (the 3+ hour proxy).
- **Supports:** #4 talk, don't type; feed it your real material (GDocs, PDFs,
  screenshots).
- **Win:** a real task from their list — too technical, too draining, too
  vague — materially advanced, with the plan saved as a file they can reopen.
- **Needs:** nothing new (dictation via built-in mic; Wispr as upgrade hint).
- **Sprinkles:** "ask me lots of questions" pattern; CSV over XLSX when a file
  fights you.

### K3 — The trust protocol
- **Headline:** #3 verify it, trust it, or don't care.
- **Supports:** #8 it will lie to you / the small test; #11 permissions gate
  consequences; #12 worry less about security; git as save-points (undo, not
  engineering).
- **Win:** auto mode running on a real task with one passive protection set up
  once (git save-points or a no-delete rule) and one small test passed. The
  reader stops clicking approvals and starts reading only the irreversible ones.
- **Needs:** git only as "ask Claude to set up save-points" — no git teaching.
- **Failures:** the approval treadmill; fear spikes on first irreversible ask.
- **Sprinkles:** checkpoints /rewind exists ⚑; prompt injection one-liner.

### K4 — Run many, save everything
- **Headline:** #6 run many at once (buy speed with parallelism, not a worse
  model — pairs with #5 reprise).
- **Supports:** #7 save everything / files are the memory, not the chat.
- **Win:** two sessions running on unrelated tasks; one long session handed
  off via "write down what we agreed and give me a prompt for a fresh agent."
- **Needs:** nothing new (Cmd/Ctrl+N).
- **Sprinkles:** ~200k degradation is structural ⚑; your attention is the
  bottleneck; "do it with subagents."

### K5 — Compound
- **Headline:** #16 the reuse arc, full version (files → CLAUDE.md → skills).
- **Supports:** #9 be curious when it fails → "add this to your global
  instructions" is how fixes become permanent.
- **Win:** one skill for a recurring task of theirs, runnable by name in a
  fresh session, shareable with a colleague.
- **Needs:** nothing new.
- **Failures:** CLAUDE.md bloat (keep it short or Claude ignores it).
- **Sprinkles:** ramble → CLAUDE.md + DESIGN.md session pattern; skills load
  on demand, CLAUDE.md always.

### K6 — Power-ups (optional, self-contained)
- Google CLIs (gdoc, gog): connectors are rented hands, CLIs your own; the
  OAuth dance and the publish-the-app 7-day gotcha. ⚑
- Superconductor as the many-sessions interface. ⚑
- Cloud sessions / steer from your phone. ⚑
- The terminal, for those who want it (the install everyone else skipped).
- **Win per power-up:** each is its own one-sitting setup with an immediate
  demo task.

## Tag appendix — "If your team has Tag"
- One page: what Tag is (Claude hired into Slack), the three moves that matter
  (work in public channels; one thread per task; give it something to own),
  and the manager identity carrying over. ⚑ Team/Enterprise beta.

## Sprinkle registry (below-the-line → where they land)
- 5x rule → C5/K5 closing line.
- Everything is a file / future-proof → K1 or K4, one sentence.
- Long-chat degradation → K4 (Cowork version: C4 one-liner if it fits).
- Feed it text / CSV → K2, C3.
- Ask-me-lots-of-questions → C2, K2.
- Prompt injection reassurance → C4, K3.
- Plan mode, /clear, checkpoints, MCP, plugins → K-track sprinkles only where
  a lesson's task naturally touches them; never their own sections.

## Next (04-drafts)
Calibration first: draft the front door, C1, and K1; Alejo reacts before the
rest are drafted. Style defaults while his open questions stand: profanity
capped at better-start's band ("bullshit"), no exclamation marks, one moral
peak per lesson max, love-agents' shape (short prose + numbered bold-led tips)
as the default section form, jargon glossed in one homely line rather than
avoided.
