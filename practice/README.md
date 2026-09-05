What do people actually do in each session, on each tool?

The hands-on track. Throughout the course everyone builds the same thing — a
personal website — and each session ends with an application of that session's
lesson to it. One file per tool, because the steps differ:

- [code.md](code.md) — Claude Code (the terminal agent; what Anthropic's own
  engineers use).
- [cowork.md](cowork.md) — Claude Cowork (desktop app / web / mobile; easiest
  start).
- [tag.md](tag.md) — Tag, Claude in your team's Slack (needs a Team/Enterprise
  plan and an admin).

How the lessons are written — the walk-them-through rules — lives in
[CLAUDE.md](CLAUDE.md); the optional *Stretch* lines that invite deeper thinking
are designed in [inviting-challenge.md](inviting-challenge.md). Every factual claim in them is grounded in
[docs/](docs/), a local mirror of the official Claude Code / Cowork / Tag docs
(fetched 2026-07-07; refresh instructions in its README). Facts an agent couldn't
verify are left as `[?: …]` brackets for the fact-filler pass. Opinionated tips
come from Alejo's earlier sessions — see
[`voice/rant-tips-claude-code.txt`](../voice/rant-tips-claude-code.txt).
Open caveats from the last rewrite and red-team reports: [history/](history/).

Google Doc mirrors (first tab = exercises, one tab per doc-mirror page):
[Code](https://docs.google.com/document/d/1UM2kR-gesWVr7AoWtQMSBmo7t6XeCZJQ9jZm9t_aPaI/edit) ·
[Cowork](https://docs.google.com/document/d/1IrWwvKfQvqOn3GnWvJR0cAlqfUHtRJfIUTFAp7wYvm4/edit) ·
[Tag](https://docs.google.com/document/d/1IXQmxJJBM3c38KiJZsGC4HegyfvBEack02Mid1SN0HY/edit).
Rebuild script: `history/2026-07-08-gdocs-build.sh` (docs → tabs via gog; strip
`<!--ai-->` markers from exercise files; `\|` in tables crashes gog's converter —
sanitize first).
