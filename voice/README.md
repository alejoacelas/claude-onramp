What should this guide sound like, and where do the tweaks come from?

The core of this folder is Alejo's own writing on the topic, at top level:

- [rant-tips-claude-code.txt](rant-tips-claude-code.txt) — the *DIY Claude Code
  Starter Pack*: an improvised coaching call, the closest thing to a session
  already run. Opinionated tips (dictate everything, worry less about security,
  be curious when it fails, the starter pack of tools) — the seed for the
  practice track in `lessons/practice/`.
- [alejo-blog.txt](alejo-blog.txt) — the blog.
- [love-agents.txt](love-agents.txt) — the love-agents piece.

These are the voice reference; not to be edited. (better-start lives at
[`lessons/better-start/draft.md`](../lessons/better-start/draft.md), where it's a
live draft.)

Alejo drafts the lessons himself, mostly in his own writing, and always
looks for tweaks: ways to make things shorter, sentences more surprising, the text
funnier and more engaging — engaging with meaning, not cheaply — ways of delighting
the reader. The Paul Graham cut (no sentence or word removable without
losing meaning) is the floor; a bit of fluff purely for entertainment is allowed.

- `influences/` — per-writer style guides: a handle table up top (patterns ordered
  by likelihood of application, verbatim quote each), cross-piece counts, and
  per-pattern excerpts, formula, and transfer verdict. `paul-graham.md` stays live
  as the compression reference; the Scott Alexander and Dylan Moran guides are
  stashed in [`influences/archive/`](influences/archive/) — fun and useful, kept for
  a later flourish pass, not in active use. Extraction notes per source live in
  `influences/history/`.
- `references/` — other people's material worth stealing from (JL's
  anti-Claude-tics rules).

## The draft pipeline
Alejo does the thinking and writes the draft himself, leaving `[?: how does X work?]`
brackets where he doesn't know the facts. Two agents (in `best/.claude/agents/`)
then run — research, then compression:

1. `fact-filler` — researches each `[?:]` bracket, replaces it with a sourced
   `[fill: … (source, verified date)]` for review. Facts before style.
2. `pg-cut` — the density cut: word-level tweaks applied in place, sentence-level
   cuts left as `[drop: …]`/`[swap: … → …]` brackets in the draft. (`pg-compressor`
   is the older variant that applies every cut in place, silently — use it for
   non-lesson text; for lessons prefer `pg-cut`.)

Voice flourishes — the surprising, funnier tweaks — are Alejo's own by hand for now;
the focus is the thinking. The Scott/Moran/PG *voice-tweaker* agents and the
`stylist-passes` pastiche skill were removed on 2026-07-06; the pattern guides they
drew on live on in `influences/` (PG) and `influences/archive/` (Scott, Moran) if
that work resumes.
