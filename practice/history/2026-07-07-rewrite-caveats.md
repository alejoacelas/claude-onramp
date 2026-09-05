# 2026-07-07 rewrite — what was done, what's still open

Full rewrite of code.md / cowork.md / tag.md into step-by-step walkthroughs, plus
the writing rules (../CLAUDE.md) and a local mirror of the official docs (../docs/,
64 pages) every step was checked against. Style model: Peter Hartree's instruction
posts, with more per-step detail.

## Facts that changed under the old drafts (now fixed)

- **Cowork is no longer desktop-only.** Sessions run remotely on Anthropic's
  servers and exist on web and mobile; closing the laptop no longer kills a task.
  The old draft's "Cowork tab downloads a VM / keep the app open or tasks stop"
  framing was stale. What *does* need the desktop app open: reaching local
  folders. cowork.md now teaches that as the one rule of physics.
- **Cowork projects** are created via Projects → + → "Use an existing folder", and
  instructions live per-project plus globally at Settings → Cowork.
- **Claude Code has built-in dictation** (`/voice`, hold Space). Wispr Flow stays
  the course standard (works everywhere); the built-in gets one parenthetical.
- **Install PATH failure** is now an explicit step: close the terminal, open a new
  one, and the exact "command not found" / "not recognized" fixes are linked.

## Open caveats — check before publishing

1. **Tag ending step has a `[?]` bracket:** I could not verify whether a Tag
   session can attach generated site files to the Slack thread, or whether the
   reader must use the footer's "Open session in Claude" link to download them.
   The docs say results post in-thread but never show file attachments. Easiest
   check: try it in a real channel.
2. **Cowork docs contradict each other on projects:** the projects article
   (March) says desktop-only, stored locally, no cloud sync; the newer
   web/desktop/mobile article says projects work on every surface, with
   local-folder projects supporting Cowork sessions on desktop only. Lessons
   follow the newer article. If a Pro-plan reader doesn't see Cowork on web yet,
   that's the staged rollout (started with Max).
3. **Netlify Drop details are from memory, not docs:** that anonymous drops
   expire without an account, and that drag-and-drop still works as described.
   Verify once, or swap for another one-step host.
4. **Wispr Flow onboarding** is described generically (mic + accessibility
   permissions); I didn't verify their current flow, pricing, or default hotkey.
   Sotto.to is a cheaper local-processing alternative Hartree flags — not
   mentioned in the lessons to keep one path.
5. **UI names will drift:** "Cowork option in the bottom-left of the message
   box", "Act without asking", the Tag setup dialog steps — all match the doc
   mirror as of 2026-07-07. The mirror's README says how to refresh and re-check.
6. **WSL is deliberately not offered** on Windows in code.md (native install
   only) — one path for beginners. Fine to revisit if someone hits a wall.
7. **code.md PATH fix links out instead of inlining** the two shell commands
   (they differ zsh/bash/PowerShell). If you'd rather have zero mid-setup link
   chasing, inline all three variants — costs ~8 lines.
8. **The local Hartree mirror is truncated:** `later/ph/...google-cloud-console-
   setup...md` cuts off before his numbered steps. Style was inferred from the
   intro + his other posts; worth re-mirroring the post.
9. **site/ not touched:** if the site embeds lesson text, it still carries the
   old bare versions.
