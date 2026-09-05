# 2026-07-08 red-team — tag.md, simulated solo non-technical reader

Read as a smart, non-technical person going through the track alone, session by
session, checked against `docs/claude-tag/`. Line numbers refer to tag.md as of
this date.

## Biggest wins (summary)

1. The reader never learns what "the site" physically *is* in Slack — no session
   before ending says what a first version looks like or where to see it.
2. Setup mixes three actors in one numbered list and gives the reader no action
   for the admin part; it should open with an "is Tag already on?" check.
3. Two ordering bugs: ground's friend-test needs a viewable site that only exists
   after ending; stop audits routines before any exist.
4. mingle silently assumes teammates are doing the course; a solo reader stalls
   at step 1.
5. "A paid Slack plan" (line 24) is not in the docs mirror — ungrounded claim in
   the prerequisites block.

## High priority

- **Define the deliverable (think, step 4, line 74; echoes in ground and
  ending).** "Look at the first version" — look where? The file never says
  whether Claude posts a preview link, screenshots, or files in the thread. This
  is the reader's first success check of the whole course and it's undefined; it
  also makes ground step 3 ("send the site to a friend", line 165) impossible to
  execute, since hosting only happens in ending. Fix: one grounded line in think
  ("You'll get X in the thread; that's your site until you host it in the last
  session") — the docs mirror doesn't settle this, so it likely needs the same
  real-channel check as the existing ending `[?]` (caveat 1 in
  2026-07-07-rewrite-caveats.md). Until then, add a `[?: what form does a built
  site take in the thread?]` bracket at think step 4, and make ground step 3
  explicitly send whatever that is (screenshot / preview link), not "the site".

- **Restructure Setup around the actor split (lines 15–60).** Steps 1–4 are
  actions the reader cannot perform, presented as steps the reader is reading.
  Three fixes:
  1. Open with a skip test: "Type `@Claude` in any channel. If **Claude** shows
     with an **APP** badge and replies to a message, Tag is already on — skip to
     step 5." (Grounded in the users-getting-started troubleshooting table.)
     Many Team-plan readers skip the whole admin half.
  2. Split into `### Your admins' part` and `### Your part` subsections — the
     CLAUDE.md platform-split rule, applied to actors: one clean path each, no
     bolded role labels to parse per step.
  3. Give the reader an actual action for the admin half: "Send your Claude org
     Owner this link and the [setup guide](…admins/setup-overview)." Today the
     reader's only move is implied. The docs even ship a Slack-admin handoff
     template (admins/pair-workspace) worth linking for the two-people case.

- **Prerequisites need a self-test (lines 20–27).** A non-technical reader
  doesn't know whether their org is on Team/Enterprise, who the Claude "Owner"
  is, or whether credits are loaded. Add one line: how to check the plan (or
  simply "ask whoever manages your team's Claude accounts — if you don't know
  who that is, that's the person to find first"). And **"A paid Slack plan"
  (line 24) is ungrounded** — the docs' prerequisites table (admins-setup-
  overview) lists Team/Enterprise, no-ZDR, Owner, Slack admin, credits; no Slack
  plan requirement. Bracket it `[?: does Tag require a paid Slack plan?]` or cut.

- **think steps 1–2 are one message written as two steps (lines 65–71).** A
  literal reader sends after step 1 and the `@Claude ask me questions…` tail
  never arrives (and without a mention, the message may get no response —
  mentions are what guarantee one, per users-getting-started). Merge into one
  step, or end step 1 with "don't send yet." Add the Slack gotcha for a long
  typed-or-edited message: **Enter sends; Shift+Enter makes a new line.** And
  insert the missing beat between send and "first version": "Claude replies
  with questions in the thread — answer them as normal replies." Step 3 covers
  forgotten material, not this exchange.

## Medium priority

- **mingle assumes a cohort (lines 121–134).** A solo reader opens Slack, finds
  no other `#website-` channels, and the session is over at step 1. Either state
  the dependency in the session's goal line ("this session needs at least one
  teammate on the track") with a solo fallback — e.g. "@Claude search public
  channels for the best prompts people have used with you and tell me what's
  worth stealing", or point at the docs prompt library — or move the fallback
  into step 1 as the failure note.

- **stop step 4 audits routines that can't exist yet (lines 150–151).** Routines
  are introduced in ending. The answer will be "none," and "Disable what you
  didn't mean to keep" reads as a broken instruction. Either reframe ("the
  answer today is probably 'none' — remember this audit ask; you'll create
  standing work in the last session") or cut and keep the audit only in ending
  step 4, where it already appears.

- **Setup step 5 lacks the mechanic and the success line (lines 48–51).** "Create
  a public channel" needs the click path (in Slack's sidebar: **+ Add channels →
  Create a new channel**, leave it public) and a failure note (some workspaces
  restrict channel creation — ask your Slack admin). After `/invite @Claude`,
  give the success signal the docs describe: Claude posts a short intro on its
  own, reading the channel and suggesting tasks. Right now the reader can't tell
  whether the invite worked until step 7. Also worth one line on why the name
  pattern matters: shared `#website-` prefixes are how mingle finds teammates.

- **Session headers give no re-orientation or duration.** Each session is one
  lowercase word (`## ease`, `## ground`) that only means something if you hold
  the course vocabulary. Per session, add: a time estimate (the CLAUDE.md rule
  puts one on Setup; sessions deserve the same), and make the goal line name the
  observable win, not just the idea — e.g. ease's "the channel becomes the
  memory" ends with a testable outcome (step 4), but think's win ("a first
  version exists") is never stated as one. Cheapest structural fix: `## ease —
  make the channel the memory` style suffixes, so the page skims as a table of
  contents.

- **context step 2 crams the can-it-see catalog into one sentence (lines
  182–185).** The docs render this as a table for a reason. Convert to four
  sub-bullets or a small table (thread ✓, attached images ✓, public channels by
  search ✓, pasted links only if allowed, canvases ✗, edited messages: it keeps
  the original). The edited-message row is worth adding — it's the same fact as
  think step 3 and the most surprising one.

- **ending steps 2–3 lack mechanics and success lines (lines 202–207).** How to
  download files from a Slack thread (click the file → download icon); whether
  Netlify Drop's account requirement and drag-a-folder flow still hold (already
  flagged from-memory, caveat 3); and the success line "you'll get a live URL
  like `something.netlify.app`". Without it the reader can't tell step 2 worked
  until step 3 fails.

- **ground step 1 needs its failure note (lines 160–162).** Link-checking can
  die on the network allowlist — the reply is "that site isn't allowed here."
  One sub-bullet: "if it says a site isn't allowed, that's the access lesson
  from understand — a one-line ask to your admin," which also reinforces
  understand step 5.

## Low priority / nits

- **Setup step 8 (lines 58–60) isn't a step** — two facts, no action. Move them
  into the intro prose above think, or make step 8 the actual first-thread
  moment where they'd bind.
- **understand step 1 (line 86) isn't an action.** Fold into the goal line:
  "Something in the first version is wrong — resist re-asking" works as the
  session's second framing sentence.
- **Setup step 7 "Save it" (line 57)** — save how? Give the Slack mechanic
  (hover the reply → **⋯** → **Save for later**) or cut the instruction.
- **mingle step 4 "Bonus:" (line 130)** — a third convention alongside steps
  and *Stretch*. Make it step 4 proper or fold into the Stretch.
- **Line 9–10**: "do the course on Cowork or Claude Code instead" — link
  cowork.md and code.md so the redirected reader has somewhere to click.
- **Line 17–18**: "longer if Slack apps need approval" — also longer if Owner
  and Slack admin are two people; the handoff is usually the slow part. One
  clause.
- **ease step 2 (lines 105–107)**: say the `[audience]`/`[name]` brackets are
  slots to fill — the file's only bracketed placeholders, easy to paste
  verbatim.
- **Framing (line 4)**: "public beta" deserves its consequence — "button names
  may have drifted; when they do, the nearest equivalent is the right guess" —
  since UI drift is caveat 5 and this track has the most admin UI of the three.
