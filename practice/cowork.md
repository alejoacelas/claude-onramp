# Practice — Claude Cowork

The hands-on track for Cowork: Claude Code's engine with no terminal — you click
and it works, because Anthropic manages it centrally. The easiest start. Cowork
runs on desktop, web, and mobile, and your tasks keep running on Anthropic's
servers when you close the laptop. This course uses the **desktop app**, because
only it lets Claude touch the website folder on your computer.

Every quoted prompt below can be dictated verbatim, but they're examples; your own
words work.

## Setup

Also the introduction session's exercise. **~30 minutes.** You need:

- A paid Claude plan — Pro, Max, Team, or Enterprise, from
  [claude.com/pricing](https://claude.com/pricing). Free won't do.
- A computer on macOS or Windows.

Steps:

1. Download the Claude desktop app at
   [claude.com/download](https://claude.com/download), install it, and sign in
   with your Claude account. Already have it? Update it — Cowork needs the latest
   version.
2. In the message box on the home screen, select **Cowork** (bottom-left corner of
   the box; **Chat** switches back). No Cowork option means an outdated app or an
   unpaid plan — see
   [Get started with Claude Cowork](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork).
3. Install [Wispr Flow](https://wisprflow.ai/) and do its short onboarding,
   granting the microphone (and, on Mac, accessibility) permissions it asks for.
   From now on you dictate every prompt — talking keeps in the hedges and
   half-thoughts that typing edits out.
4. In Finder (Mac) or File Explorer (Windows), go to Documents and create a new
   folder named `website`.
5. Create a project around it: click **Projects** in the left sidebar, then **+**,
   then **Use an existing folder**, and pick `website`. Name the project
   "Website." The folder is the fence: Claude works on what's inside it, not the
   rest of your disk.
6. First prompt, dictated, inside the project: "This folder will hold my personal
   website. Create a page that says hello and states my name, and show it to me."
   Watch the progress steps; approve what it asks. A page with your name on it is
   the whole win today.
7. One rule of physics: your session runs on Anthropic's servers and survives you
   closing the laptop — but Claude can only reach the `website` folder **while
   the desktop app is open** on this computer. Task stalled saying it can't reach
   files? Open the app.

## think

Dump your whole head into Claude before it builds; don't pre-organize.

1. Open the Website project and start a new task.
2. Hold the Wispr key and ramble for five minutes: who the site is for, what you
   do, sites you envy, the joke you may want in the footer — including everything
   you're unsure about. Don't tidy it — hedges are data; a clean brief hides where
   you stop knowing.
3. End the same message with: "Ask me questions about anything unclear before you
   build." Answer what it asks.
4. Say: "Now build the full first version and show me the result."
5. Look at it and lower your standards: a mediocre site that exists beats the
   perfect one you'd never start. Fixing comes next session.

*Stretch: you'll want to say "make it pretty." What's a pretty website? Try to
answer in three specific words and one example site — then say that instead, and
compare what comes back.*

## understand

When output disappoints, understand the process before re-rolling. You can
delegate your thinking, not your understanding.

1. Find the part of the site that's wrong. There is one.
2. Don't re-roll. Ask in the same task: "Walk me through what you did there and
   why."
3. Check the explanation against what you see on the page. A mismatch is the
   finding — say so.
4. Ask: "What are some ways of fixing it?" Pick one, let it try, look again.
5. If the failure came from something Cowork can't actually do — some sites it
   can't reach, some tools it doesn't have — write that down. Knowing what it
   overpromises is the skill.

*Stretch: before step 2, predict its explanation in one sentence. Being wrong
about why it failed teaches you more than the fix does.*

## ease

Remove every trivial barrier between you and starting.

1. Notice what you re-explained across the last two sessions — your name, the tone
   you want, "show me the result when done."
2. Put those lines in the project's **Instructions** (in the project view). Claude
   reads them at the start of every task here; project memory keeps what it learns
   here too.
3. Rule for the rest of your life: the second time an instruction leaves your
   mouth, promote it to Instructions.
4. Test it: new task, no briefing, "Improve the About section." It should already
   know you.
5. Set what applies to *every* Cowork project — your name, your tone — once, at
   claude.ai **Settings → Cowork → Global instructions**.

*Stretch: recall the last time you thought of a site change and didn't act. What
exactly stopped you? That — not the tooling — is the barrier this session is
about.*

## mingle

Other people have packaged things beautifully for you. Steal, then share back.

1. Find a personal site you admire; ask a coursemate for theirs too.
2. Paste the URL into a task: "Steal what's good here — layout, structure, that
   thing they do with the header — and adapt it to my site."
3. Send a screenshot of the result to the person you stole from, saying what you
   took. Ask what they'd steal from yours.
4. Add one trick from the exchange to your project Instructions — that's how a
   borrowed move becomes a standing one.

*Stretch: articulate why the design you stole is good — three specific words, not
"clean." What you can't name, you can't ask for.*

## stop

Decide what Claude may never do. Instructions shape behavior; the mode selector
and Cowork's own guardrails enforce.

1. Dictate your never-list into the project Instructions as "Never" lines: never
   delete photos, never rewrite text marked final — whatever you actually dread.
   Real constraints only; each one costs you flexibility.
2. Find the permission-mode selector in the task view: **Ask before acting**
   pauses for your approval; **Act without asking** runs through. Pick "Act
   without asking" for this project — it's a webpage, and Cowork always asks
   before permanently deleting files, in any mode.
3. Know when to flip it back: sensitive files, first time with a new tool or site,
   actions that are hard to undo.

*Stretch: add a harmless Never-line ("never call me 'passionate'"), then try to
talk Claude into breaking it. Instructions are judgment, not enforcement — feel
the difference, and notice the deletion guardrail sits at a different layer.*

## ground

It will lie to you: "the site works" is not evidence. Never accept a report;
demand the small test.

1. Dictate: "Check every link and every image on the site. Give me a table: item,
   works or broken, and how you checked."
2. Open the site yourself and click two links at random. If you disagree with its
   table, say so and watch it re-examine.
3. Send the site to a friend outside the course. Paste their reply verbatim into a
   new task: "Here's what a real person said. Fix the fair points, tell me which
   points you think are unfair."

*Stretch: before step 1, write down which item you think fails. If you and Claude
both said "works" and your friend still found something, what test were you both
missing?*

## context

Claude builds from whatever you hand it — and weights it oddly. Choose the diet.

1. Run the same request in three fresh tasks, changing only the context: "Rewrite
   my About page." Once with nothing extra; once with your CV dropped into the
   website folder; once after a three-minute ramble about what you actually care
   about.
2. Compare the three. Notice what each latched onto — the CV version will sound
   like a CV. Models grab the strongest pattern you feed them, not the most
   important one.
3. Keep the winner. Delete from the folder the context that hurt; withholding is a
   move too.
4. Feed it text. If something lives in a fancy format (XLSX, a design tool),
   export it as plain text or CSV before dropping it in the folder — agents read
   text.

*Stretch: before comparing, predict each version in one line. The gap between
prediction and result is your working model of Claude — this exercise is for
improving it.*

## ending

Ship it. Cowork builds the files but doesn't host websites; publishing takes one
step outside.

1. Ask first: "Which files in the folder make up the finished site, and is
   anything missing for it to work standalone?" Fix what it names.
2. Go to [Netlify Drop](https://app.netlify.com/drop) in your browser and drag the
   `website` folder onto the page. Create the free account it asks for — without
   one the site expires. Live URL in seconds. (For a custom domain or automatic
   updates, ask a Code-track coursemate for an hour.)
3. Verify on your phone, not your laptop — that's how everyone else will see it.
4. Send the link to the course group and to three people who knew you before this
   course.
5. Last dictation: "List what we built together and what I can now do that I
   couldn't eight sessions ago." Read it. That list is the course.

*Stretch: ask your three people what the site says about you, in one word each.
Compare with the word you were going for.*
