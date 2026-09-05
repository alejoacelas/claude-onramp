# Practice — Claude Code

The hands-on track for Claude Code, the terminal agent — the version of Claude that
Anthropic's own engineers use. You don't need to know how to code: you talk to it in
plain language and it does stuff. But expect the first day to be Linux, not Windows:
something will break once. When it does, don't get annoyed, get curious — paste the
error to Claude (or claude.ai) and ask "why did this fail, and what are ways to fix
it?"

Every quoted prompt below can be dictated verbatim, but they're examples; your own
words work.

## Setup

Also the introduction session's exercise. **~45 minutes.** You need:

- A paid Claude subscription — Pro or higher, from
  [claude.com/pricing](https://claude.com/pricing). The free plan does not include
  Claude Code.
- A computer on macOS 13+ or Windows 10+.

Install first (pick your platform), then continue at [Everyone](#everyone).

### Mac

1. Open a terminal: press `Cmd+Space`, type `Terminal`, press Enter. A window with
   a blinking cursor appears — you type commands and press Enter; nothing in it is
   clickable.
2. Paste this and press Enter (`Cmd+V` to paste):
   ```
   curl -fsSL https://claude.ai/install.sh | bash
   ```
   Text scrolls for a minute. Success ends with **"Claude Code successfully
   installed!"** Anything else: match your error at
   [troubleshoot installation](https://code.claude.com/docs/en/troubleshoot-install).
3. **Close the terminal window and open a new one** — the install edits settings
   the old window doesn't have. Type `claude --version` and press Enter. A version
   number means it worked.
   - `command not found: claude` → your terminal doesn't know where Claude lives
     yet. Paste this, press Enter, then open a new window and retry:
     ```
     echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
     ```
4. Type `claude` and press Enter. Your browser opens to sign in with your Claude
   account; sign in and return to the terminal. Success: a welcome prompt showing
   the model and your current folder. You won't need to sign in again. (Stuck in a
   sign-in loop? See
   [authentication](https://code.claude.com/docs/en/authentication).)

### Windows

1. Install [Git for Windows](https://git-scm.com/downloads/win) first: download,
   run the installer, click Next on every screen. You won't use Git yourself; it
   gives Claude a better shell to work in.
2. Open PowerShell: press `Win+X`, pick **Windows PowerShell** (or **Terminal**).
   Check the prompt starts with `PS C:\` — no `PS` means you're in CMD, a
   different program; close it and reopen PowerShell. You type commands and press
   Enter; nothing in the window is clickable.
3. Paste this and press Enter (`Ctrl+V` to paste):
   ```
   irm https://claude.ai/install.ps1 | iex
   ```
   Text scrolls for a minute. Success ends with **"Claude Code successfully
   installed!"**
   - `'irm' is not recognized` → you're in CMD; see step 2. Anything else: match
     your error at
     [troubleshoot installation](https://code.claude.com/docs/en/troubleshoot-install).
4. **Close PowerShell and open a new window** — the install edits settings the old
   window doesn't have. Type `claude --version` and press Enter. A version number
   means it worked.
   - `'claude' is not recognized` → PowerShell doesn't know where Claude lives
     yet. Paste these two lines, press Enter, then open a new window and retry:
     ```
     $currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')
     [Environment]::SetEnvironmentVariable('PATH', "$currentPath;$env:USERPROFILE\.local\bin", 'User')
     ```
5. Type `claude` and press Enter. Your browser opens to sign in with your Claude
   account; sign in and return to the terminal. Success: a welcome prompt showing
   the model and your current folder. You won't need to sign in again. (Stuck in a
   sign-in loop? See
   [authentication](https://code.claude.com/docs/en/authentication).)

### Everyone

1. Three keys to remember: `Esc` interrupts Claude mid-work, `/help` lists
   commands, `exit` leaves. Try `Esc` once today so it's reflexive.
2. Type `exit`. Install [Wispr Flow](https://wisprflow.ai/) (Mac and Windows) and
   do its short onboarding, granting the microphone (and, on Mac, accessibility)
   permissions it asks for. From now on you dictate every prompt — talking keeps
   in the hedges and half-thoughts that typing edits out. (Claude Code has
   built-in dictation too — `/voice`, then hold Space — but Wispr works in every
   app.)
3. Make the website's folder and start Claude in it. Type each line, Enter after
   each:
   ```
   mkdir website
   cd website
   claude
   ```
4. First prompt, dictated: "Build a one-page personal website with my name and one
   line about me, then open it in my browser." When Claude asks permission to
   create files or run commands, press Enter on "Yes." A browser page with your
   name on it is the whole win today.
5. Every future session starts the same way: open a terminal, `cd website`,
   `claude`. (`claude -c` continues your last conversation instead.)

Later, when a task calls for them: [gdoc](https://github.com/LucaDeLeo/gdoc) for
Google Docs, [gog](https://gogcli.sh/) for everything else Google,
[Superconductor](https://super.engineering/) as the interface once you run several
Claudes at once.

## think

Dump your whole head into Claude before it builds; don't pre-organize.

1. Start Claude in the website folder.
2. Hold the Wispr key and ramble for five minutes about what this site should be:
   who it's for, what you want them to think, sites you envy, every half-idea and
   doubt. Don't tidy it — hedges are data; a clean brief hides where you stop
   knowing.
3. End the same message with: "Ask me questions about anything unclear before you
   build." Answer what it asks.
4. Say: "Now build the full first version and open it when done."
5. Open the result. Parts will be wrong. Lower your standards: a mediocre site
   tonight beats a perfect one never. Fixing comes next session.

*Stretch: you'll want to say "make it pretty." What's a pretty website? Try to
answer in three specific words and one example site — then say that instead, and
compare what comes back.*

## understand

When output disappoints, understand the process before re-rolling. You can
delegate your thinking, not your understanding.

1. Open the site and pick the section you like least. Don't say "fix it."
2. Ask: "Walk me through what you did in that section and why."
3. Check the explanation against what you see on the page. A mismatch is the
   finding — say so.
4. Ask: "What are some ways of fixing it?" Pick one, let it try, look again.
5. Decide the level to intervene at: a one-off edit, or a standing rule if it will
   recur. For a rule, say: "Add that to your instructions for this folder." Claude
   writes it into a file called CLAUDE.md, which it reads at the start of every
   session here.

*Stretch: before step 2, predict its explanation in one sentence. Being wrong
about why it failed teaches you more than the fix does.*

## ease

Remove every trivial barrier between you and starting.

1. Say: "Write a CLAUDE.md for this folder: what the site is, how I like to work,
   what you should always do." Type `/memory` to confirm it's in the files Claude
   loads each session.
2. Cut it hard. For each line: would deleting it cause a mistake? No means cut —
   long instruction files get ignored.
3. Test it: type `/clear` (wipes the conversation, keeps CLAUDE.md), then a
   one-line request like "add a projects section." It should need no re-briefing.
4. Name your remaining friction to Claude — finding the folder, remembering
   commands — and ask: "How do I make starting a session here cost one step?"
   Adopt what it suggests.

*Stretch: recall the last time you thought of a site change and didn't act. What
exactly stopped you? That — not the tooling — is the barrier this session is
about.*

## mingle

Other people have packaged things beautifully for you. Steal, then share back.

1. Ask: "Search the web for great personal-site designs and for published Claude
   Code skills, and show me three of each with what makes them good."
2. Steal one thing: "Adapt the second design's layout to my site."
3. Publish one thing back. A skill is a folder holding a SKILL.md file. Say:
   "Package the way I build and check this site as a skill in this project." It
   lands in `.claude/skills/`; type `/` to see yours listed.
4. Send that folder to a coursemate; drop theirs into your `.claude/skills/` and
   run it by typing `/` plus its name.

*Stretch: articulate why the design you stole is good — three specific words,
not "clean." What you can't name, you can't ask for.*

## stop

Decide what Claude may never do — in two layers, because instructions shape
behavior but don't enforce it.

1. Dictate the things Claude may never do to your site: delete the folder, publish
   without asking, invent facts about you — whatever you actually dread.
2. Layer one: "Add those as Never-rules to CLAUDE.md." This shapes what Claude
   tries; nothing enforces it.
3. Layer two: type `/permissions`, choose **Deny**, and add a rule for the worst
   case — `Bash(rm *)` blocks delete commands. The program enforces deny rules no
   matter what the model wants.
4. Note the mode you're in: `Shift+Tab` cycles between asking about everything and
   accepting edits. Faster is fine here — the deny rules hold, and editing a
   webpage has never blown up a computer.
5. Keep the list short. Every constraint gets painful with AI; each one should
   earn its place.

*Stretch: add a harmless Never-rule ("never call me 'passionate'"), then try to
talk Claude into breaking it. Now try the same with a deny rule. Feel which layer
holds.*

## ground

It will lie to you: "done" often means "attempted." Never accept a report; demand
the small test.

1. Dictate a launch checklist: every link works, name spelled right, readable on a
   phone, no placeholder text left.
2. Say: "Go through the checklist yourself — open the page, screenshot it, look at
   the screenshot, and mark each item pass or fail with the evidence."
3. Spot-check one "pass" with your own eyes. If you disagree, say so and watch it
   re-examine.
4. Then get reality's opinion: send the site to one friend, paste their reply
   verbatim, and say: "Here's what a real person said. Fix the fair points, tell
   me which points you think are unfair."

*Stretch: before step 2, write down which checklist item you think fails. If you
and Claude both said "pass" and your friend still found something, what test were
you both missing?*

## context

Claude builds from whatever you hand it — and weights it oddly. Choose the diet.

1. Type `/clear`. Give only your CV: "Rewrite my About page from this, and save it
   as about-v1.html."
2. `/clear` again. Give everything — the think-session ramble, old bios, things
   you've written: "Rewrite my About page from all of this, saved as
   about-v2.html."
3. Open both. Notice what each version latched onto; the CV version will sound
   like a CV.
4. Keep the winner, and leave the files that helped in the website folder — Claude
   reads them in every future session. Delete the ones that hurt; withholding is a
   move too.

*Stretch: before opening them, predict each version in one line. The gap between
prediction and result is your working model of Claude — this exercise is for
improving it.*

## ending

Ship it.

1. Say: "Put this site live on the public internet. Walk me through any account I
   need to create, and wait for me at each step I have to do myself." GitHub Pages
   and Vercel both host it free; expect one account signup and a browser login it
   can't do for you.
2. Verify on your phone, not your laptop — that's how everyone else will see it.
3. Send the link to three people who knew you before this course, and ask one of
   them what to make better.
4. Last dictation: "List what we built together and what I can now do that I
   couldn't eight sessions ago." Read it. That list is the course.

*Stretch: ask your three people what the site says about you, in one word each.
Compare with the word you were going for.*
