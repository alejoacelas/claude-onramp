How should the finished lessons look and feel to read?

# site

A BlueDot-style course shell ([reference](https://bluedot.org/courses/agi-strategy/1/1))
that will display the lessons. Static — open `index.html` in a browser, or serve the
folder (`python3 -m http.server`). All content is placeholder for now, defined in
`content.js`.

What's in:
- Sidebar with units, sessions, time estimates, per-session completion counts, Hide toggle.
- Breadcrumb bar with Prev/Next; resource cards with completion circles; exercise cards
  with free-text answers; collapsible Optional Resources; Continue button.
- Progress persists in `localStorage`.
- Google Docs-style comments: select text → Comment → highlight plus margin card.
  Session-only (`sessionStorage`), no backend — to be replaced when Alejo shares the
  reference implementation repo.
