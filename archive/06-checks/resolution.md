# Flag resolutions — applied 2026-07-05

All 116 flags resolved; none outstanding. 92 confirmed (⚑ scaffolding stripped,
no text change unless noted). The 24 wrong/unverifiable, plus the internal link
bug, resolved as follows. Full verdicts with sources: `verdicts.md`.

## Corrected in text (wrong)
- **F008/F019** — the "sealed VM / padded room" reassurance overstated Cowork's
  isolation (only code execution is sandboxed; folder files, connectors,
  computer use reach the real machine). Reframed in front-door, C1, C4: the
  padding wraps the code, not the hands — tied to the permissions habit.
- **F015/F052** — Cowork/Code open via top-center tabs (Chat, Cowork, Code),
  not the left sidebar. Install steps fixed in C1 and K1.
- **F053** — environment dropdown is Local/Remote/SSH (no "Cloud or Default").
  Fixed in K1.
- **F022** — no microphone icon exists; dictation is the settings quick-entry
  shortcut (Caps Lock on Mac) or OS dictation. Fixed in C2 and K2, phrased to
  survive UI drift.
- **F035** — "prompt injection is rare in practice" is outdated. Reframed in
  C4 and K3: real and rising, individual odds still low, the trust protocol is
  the defense.
- **F042** — Cowork's VM can reach GitHub by default. C5 keeps ZIP/directory
  as the install path, drops the false can't-reach-GitHub explanation.
- **F044** — Cowork connectors aren't a fixed Anthropic list (custom MCP
  connectors exist). C5 keeps the safe-defaults trade-off point, drops the
  decided-once-for-everyone claim.
- **F056** — desktop app ≠ CLI with buttons, exactly. K1: "minus a few powers
  only hackers miss."
- **F060** — no magic history-keeping phrase; it's the retention setting,
  which Claude edits on request. K1 sprinkle reworded.
- **F074** — no always-visible token counter; it's the usage ring next to the
  model picker. K4 fixed.
- **F082** — Karpathy quote corrected to "outsource your thinking /
  understanding," attributed as quoted-not-coined. K5.
- **F089** — save-as-files habit credited to lesson 2, rule since lesson 4. K5.
- **F098** — Superconductor: Mac + Linux + iOS now, Windows coming. K6.
- **F007 (internal)** — front-door appendix link fixed to sibling path.

## Hedged or reworked (unverifiable)
- **F004** — "ephemeral" VM: kept, accepted risk (author's own wording;
  supported by third-party analysis, not official docs).
- **F009** — front door aligned to "fifteen minutes after the install
  finishes" (excludes the ~2 GB download).
- **F050** — Cmd+, undocumented but standard: kept, author's Windows bracket
  stays.
- **F051** — auto-mode toggle label inexact and the mode is a gated preview:
  step phrased as "named something close to," fallback added in K1 and K3
  (pick "Accept edits" if Auto isn't offered).
- **F057** — sign-in-loop remedy now "usually clears it."
- **F067** — git save-points reworked: checkpoints/rewind is the built-in
  undo; git commits are an instruction Claude follows, not an automatic
  feature; over-promises dropped. K3.
- **F076** — ~200k handoff kept, marked as the author's rule of thumb.
- **F093** — ~15-minute OAuth estimate already hedged; kept.
- **F115** — Tag "what can you access" reframed as a habit, not a documented
  feature.

## Reader-facing caveats kept (everything else verified silently)
Front door: pricing drifts → claude.com/pricing. C1: plan gating drifts →
claude.com/pricing. K1/K3: Auto-mode availability fallback. K6: Superconductor
alpha status hedge; Google consent-screen 7-day warning (confirmed, kept as
the lesson's own content).
