# Practice — Claude Tag

The hands-on track for Claude Tag: Claude hired into your team's Slack, working in
channels under its own accounts (public beta). You'll build your personal website
in a public channel where your whole team can watch. That's a feature: the channel
is the memory and the classroom.

If your org doesn't meet the prerequisites below, read this track as a preview and
do the course on Cowork or Claude Code instead.

Every quoted prompt below can be sent (or dictated) verbatim, but they're examples;
your own words work.

## Setup

Steps 1–4 are your admins'; 5–8 are yours. **Admin part ~30 minutes** (longer if
Slack apps need approval), **your part ~10.**

You need:

- A **Claude Team or Enterprise plan** — Tag doesn't exist on Free, Pro, or Max.
  Team plans also need usage credits loaded; channel work bills the org, not
  seats.
- A paid Slack plan, and two hats that may be two people: an **Owner** of the
  Claude org and a **Slack workspace admin**.

Steps:

1. **Claude org Owner:** open
   [claude.ai/admin-settings/claude-tag](https://claude.ai/admin-settings/claude-tag),
   click **Set up**. The dialog walks through everything below. Its first link,
   **Install Claude for Slack**, opens the Slack Marketplace — click **Add to
   Slack** and approve. If your workspace requires app approval, the Slack admin
   approves it first.
2. **Slack workspace admin:** in any channel, send `@Claude connect` as a new
   top-level message — as a thread reply it's treated as a normal request and no
   code comes. Claude replies with a pairing code. Codes expire in 15 minutes;
   send `@Claude connect` again if yours did.
3. **Owner, back in the dialog:** paste the code, choose **Whole workspace
   (Recommended)**, then walk the remaining steps: name the Access bundle (the
   default is fine; connecting tools can wait), set a spending limit, click
   **Launch Claude**. Errors at any step: match yours at
   [troubleshoot setup](https://claude.com/docs/claude-tag/admins/troubleshooting).
4. **Admin smoke test:** in a channel, run `/invite @Claude`, then send `@Claude
   summarize this channel`. An "is thinking…" line means it's installed and
   listening; a reply means the pairing works. This test needs no connected tools.
5. **You:** create a public channel named `#website-yourname` and run
   `/invite @Claude` there. Public, not private: Claude's memory from public
   channels is shared with the workspace, and so is what your teammates learn
   watching you.
6. Install [Wispr Flow](https://wisprflow.ai/) so you can talk instead of type —
   dictation keeps in the hedges and half-thoughts typing edits out. On your
   phone, the keyboard's mic button does the job.
7. Your smoke test: send `@Claude what can you access from this channel?` The
   answer is your actual toolbox — links it can read, tools your admin connected.
   Save it; you'll refer back.
8. Two mechanics before you start: each task lives in one thread, and once Claude
   is in a thread it reads every reply — no re-mentioning. The work runs on
   Anthropic's servers, so it continues after you close Slack.

## think

Dump your whole head into Claude before it builds; don't pre-organize.

1. Dictate your website into one top-level message in your channel: who you are,
   what you do, what the site should feel like, every half-formed preference —
   including what you're unsure about. Don't tidy it; tidying is the thinking
   you're delegating.
2. End the same message with: "@Claude ask me questions about anything unclear,
   then build a first version and post it in this thread."
3. Everything you forgot goes into the thread as new replies — never edit the
   original message; Claude keeps the version it already read.
4. Look at the first version and lower your standards: a mediocre site that exists
   beats the perfect one you'd never start. Fixing comes next session.

*Stretch: you'll want to say "make it pretty." What's a pretty website? Try to
answer in three specific words and one example site — then say that instead, and
compare what comes back.*

## understand

When output disappoints, understand the process before re-rolling. You can
delegate your thinking, not your understanding.

1. Something in the first version is wrong. Resist re-asking.
2. Reply in the thread: "Walk me through what you did, step by step — and what
   could you not access?"
3. Check the answer against what you saw. In Tag the second question matters
   doubly: half of "it did a bad job" is really "it couldn't reach the thing" — a
   link your admin hasn't allowed, a tool nobody connected.
4. Then: "What are some ways of fixing it?" Pick one, let it try, look again.
5. If the blocker was access, that's a one-line ask to your admin, not a prompt
   problem. Send it.

*Stretch: before step 2, predict its explanation in one sentence. Being wrong
about why it failed teaches you more than the fix does.*

## ease

Remove every trivial barrier — here, by letting the channel become the memory.

1. Keep every website ask in `#website-yourname`, even tiny ones. Claude keeps
   memory per channel; each thread makes the next briefing shorter.
2. Make the standing things explicit: "@Claude remember for this channel: the site
   is for [audience], keep my name spelled [name], always post results back in the
   thread." Rule for the rest of your life: the second time an instruction leaves
   your mouth, save it to memory.
3. Verify: "@Claude what do you remember about this channel?" Prune anything wrong
   or stale right there in the thread.
4. Test it: new thread, one-line request that only makes sense given earlier
   threads — "@Claude same treatment for a projects section." If it fills the
   gaps, the channel has become its memory of your project.
5. Never take a website task to a DM. DMs run on your own account with separate
   memory — a DM ask is a lesson you withheld from the channel.

*Stretch: notice the next time you feel the pull to DM instead of posting in the
channel. What makes the channel feel costly? That cost is information — about the
task, or about you.*

## mingle

The channel *is* the sharing. Steal in the open.

1. Open a teammate's `#website-` channel and read their threads: the prompts, the
   corrections, what worked.
2. Steal one move and use it in your channel, saying where it came from.
3. Post one thing you figured out as a top-level message in your channel, so it
   can be stolen back.
4. Bonus: "@Claude look at how [teammate] structured their site in #website-them
   and tell me what's worth copying" — it searches public channels too.

*Stretch: articulate why the move you stole works — three specific words, not
"clean." What you can't name, you can't ask for.*

## stop

Decide what Claude may never do. In Tag your levers are memory and your admin;
keep the list short — every constraint costs you.

1. Decide what Claude may never do with your site: publish without asking, contact
   anyone on your behalf, invent facts about you.
2. Save it where it binds every thread: "@Claude remember for this channel: never
   [your list]. Repeat these rules back to me." Memory shapes what it tries; it is
   not enforced.
3. The enforced layer belongs to your admin: which sites and tools Claude can
   reach at all is set in the Access bundle, not in your prompts. Ask "@Claude
   what can you access from this channel?" again and check the list against your
   fears — anything scary on it is a conversation with your admin.
4. Audit standing work too: "@Claude what routines do you have set up in this
   channel?" Disable what you didn't mean to keep.

*Stretch: add a harmless never-rule to channel memory ("never call me
'passionate'"), then try to talk Claude into breaking it. Memory is judgment, not
enforcement — feel the difference, and notice enforcement lives with your admin.*

## ground

It will lie to you, confidently. Never accept a report; demand the small test.

1. Start a thread: "@Claude check every link and every claim on my site. For each,
   post the evidence — the actual output, not 'done'."
2. Verify one item yourself. If its evidence and your check disagree, say so in
   the thread — the correction teaches the channel, and everyone watching.
3. Then reality's opinion: send the site to a friend, paste their reply verbatim
   into a new thread: "Here's what a real person said. Fix the fair points, tell
   me which points you think are unfair."

*Stretch: before step 1, write down which item you think fails. If you and Claude
both said "pass" and your friend still found something, what test were you both
missing?*

## context

Claude builds from whatever it can see — and in Tag, what it can see is the whole
game. Choose the diet.

1. Ask in a thread: "@Claude what can you see from this channel and your connected
   tools right now?"
2. Compare its answer to what you assumed. Most "it ignored my data" complaints
   are data nobody wired up: it reads this thread, attached images, and public
   channels by search; a pasted link works only if your admin allowed that site;
   Slack canvases not at all.
3. Give it one thing it said it couldn't see — paste the text straight into the
   thread — and watch the output change.
4. Watch the other direction too: old channel messages are context it may latch
   onto. If something in the channel is stale ("I hate blue" from week one),
   correct it in a reply and have it update memory.

*Stretch: before step 1, write your own list of what you assume it can see. The
items you got wrong are where your future "it ignored my data" complaints would
have come from.*

## ending

Ship it. Tag builds in Slack; hosting takes one hop out.

1. In a thread: "@Claude package the finished site and put it where I can publish
   it. If you have GitHub access, create a repo and set up GitHub Pages; if not,
   post the site files here in the thread." [?: verify a Tag session can attach
   generated files to the Slack thread, or whether the reader should use the
   footer's "Open session in Claude" link to download them]
2. If you got files instead of a live URL: download them into a folder and drag it
   onto [Netlify Drop](https://app.netlify.com/drop) — free account, live URL in
   seconds.
3. Post the live link as a top-level message in your channel, and send it to three
   people who knew you before this course.
4. Last ask, and the one that makes Tag different: "@Claude what could you own
   about this site from now on — checking links weekly, drafting a post when I
   dictate one? Set up the one routine you'd recommend." Standing work is the
   point of hiring Claude into Slack; audit it with "what routines do you have set
   up?"

*Stretch: ask your three people what the site says about you, in one word each.
Compare with the word you were going for.*
