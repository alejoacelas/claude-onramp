Local mirror of the official docs the practice lessons are written against.

All files fetched 2026-07-07. When a lesson step looks stale, re-check here first,
then refresh the mirror:

- `claude-code/` — from [code.claude.com/docs](https://code.claude.com/docs). Every
  page is served as markdown at its URL + `.md`; full index at
  [code.claude.com/docs/llms.txt](https://code.claude.com/docs/llms.txt). Refresh:
  `curl -sL https://code.claude.com/docs/en/<page>.md -o <page>.md`.
- `claude-tag/` — from [claude.com/docs/claude-tag](https://claude.com/docs/claude-tag/overview),
  same `.md` trick; index at [claude.com/docs/llms.txt](https://claude.com/docs/llms.txt).
  Filenames flatten the path (`users/getting-started` → `users-getting-started.md`).
- `cowork/` — mostly from the [support.claude.com help center](https://support.claude.com/en/collections/19667525-claude-cowork)
  (HTML, converted with html2text; each file's header has its source URL), plus the
  four thin pages claude.com/docs has (`overview`, `guide-*`).

Facts that moved since the first lesson drafts (why this mirror exists): Cowork
sessions now run remotely and exist on web/mobile, not just desktop; local files
need the desktop app open; Claude Code has built-in dictation (`/voice`).
