# K6 — Power-ups

*Code track, power-ups. Optional — each section stands alone.*

You don't need these tips at all. If you finished the track, you have the whole machine — you delegate, you verify, you run many, you compound — and the mere belief that you can hand Claude harder tasks should be enough to change how you work. These four are the upgrades that changed mine. Each is a one-sitting setup with its own immediate win. Do the one that solves a problem you already feel; skip the rest.

## Google Docs and Sheets as your own hands

Connectors are rented hands. They're easy — click, authorize, done — and they're mostly read-only and they truncate long documents, so "summarize this doc" works and "rewrite section three without touching my comments" doesn't. A CLI is your own hands. (A CLI is just a program Claude drives by typing commands, the same way it does everything else on your computer.) `gdoc` edits Docs and Sheets; `gog` does everything else Google — Gmail, Calendar, Drive. Once one is installed, your documents are as editable to Claude as the files in its folder.

The price is one OAuth dance, maybe fifteen minutes. You create your own Google Cloud project — a free account with Google's machinery that anyone can open, nothing to maintain afterwards — and it issues the credentials the tool uses to act as you. Don't study the steps; open a session and say "walk me through installing gdoc, one console click at a time — I'll screenshot whenever I'm lost." One famous gotcha, and it will get you if I don't say it: Google leaves your new project's "consent screen" set to Testing, which silently logs the tool out every seven days. You'll think it broke. It didn't — set the consent screen to "In production" before you leave the console; for personal use that needs no review from Google.

The win: pick a real Google Doc of yours, keep it open on screen, and say "add one line at the bottom — today's date — then remove it." Watch your own document move.

## Superconductor

If you took the run-many lesson seriously, you now have a new problem: three Claudes and a desktop app built to show you one. Superconductor is an interface built for running many: shortcuts for moving across projects, different versions of the same thing kept without ceremony, the files you created where you can actually see them, and a notification when an agent finishes, so parked work doesn't rot while you forget it exists. If I were using the Claude desktop app, I wouldn't have started this many projects at all.

Mac and Linux now, plus an iOS app; Windows still coming. Free while it's in alpha. Download it at [super.engineering](https://super.engineering/) — it runs your own Claude Code underneath, on your own subscription.

The win: two of your projects open side by side, each with its own Claude working — and neither one waiting on you.

## Claude in the cloud, steered from your phone

Every session so far dies when your laptop sleeps. Claude also runs sessions on Anthropic's computers: start one on the web and it keeps working after you close the lid, and the Claude phone app can check on it and redirect it. Nothing to install — same account, different "where."

The win: start a task at your desk, shut the laptop, and steer it from the couch. After the first time, "I wasn't at my computer" stops being a reason work didn't happen.

## The terminal, for those who want it

This is the install everyone else skipped in the first lesson. A terminal is a chat window for your computer: you type a line, the computer does it and answers in text. That's the whole thing — no icons, no menus, just forty years of programmers preferring it because text is fast. Claude Code was born there, and some of the tricks the internet will teach you assume you're there too.

One command. Mac, in the Terminal app: `curl -fsSL https://claude.ai/install.sh | bash`. Windows, in PowerShell: `irm https://claude.ai/install.ps1 | iex`. Then type `claude`, press enter, and sign in when the browser asks.

The win: `claude` running in a black window, answering you. Same engine as the app; the buttons are gone and nothing else is.
