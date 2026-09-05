# Compound

*Code track, lesson 5.*

Everything you taught Claude this month you will teach it again next month, and the month after, forever — unless you write it down. That's the difference between using AI and getting better at it every week: not talent, a filing habit. The habit is a ladder with three rungs. Save outputs as files — you've done that since lesson 2's plan file, and as a rule since lesson 4. Promote what repeats into standing instructions. Package what others could use as skills. A preference you've typed twice wants to be an instruction; an instruction you keep explaining to colleagues wants to be a skill.

## Standing instructions

CLAUDE.md is a plain text file Claude reads before every session — standing orders you never have to repeat. One global file applies everywhere (it lives at `~/.claude/CLAUDE.md`), and any folder can add its own for work inside it. You rarely write it by hand: when a session lands on something worth keeping, say "add this to your instructions" and Claude edits its own orders.

The best material comes from failures. When Claude fails and your reply is an annoyed "why don't you just do the task like I told you?" — you're doing it wrong, because you're not being sufficiently curious. As Andrej Karpathy keeps quoting: "You can outsource your thinking, but you can't outsource your understanding." Getting annoyed is outsourcing again, to the thing that just failed. Instead: "you didn't manage to connect — why?" Read the explanation, check it against what you saw, then "what are some ways of fixing it? let's try and test them." And once it works: "add this to your global instructions." No session of yours meets it again. When I fixed how Claude reaches my Google Docs, the whole fix was one line: always use this tool for Docs.

One warning: keep the file short, or Claude ignores it. For each line ask: would removing this cause mistakes? No means cut.

For big projects I don't wait for the repetition — I end the opening ramble by having Claude draft the folder's CLAUDE.md (context that rarely changes) and a DESIGN.md (the plan we agreed), so every future session starts briefed.

## Skills

A skill is a folder with a text file inside — SKILL.md — teaching Claude one thing you do repeatedly: your weekly report format, your transcript-to-minutes routine, your budget template. The folder lives in `~/.claude/skills/`. Unlike CLAUDE.md, which loads always, a skill loads only when the task calls for it, or when you call it by name — type / plus the skill's name in any session — so sometimes-knowledge doesn't tax every conversation.

You don't write SKILL.md either. Tell Claude the task and how you like it done, and it builds the folder itself.

And because a skill is a folder, sharing it is sending a folder. A colleague drops it into their own skills folder and inherits your way of doing the thing. Keeping a good one to yourself is a small rudeness, now that sending it costs nothing.

## The win

Build one today. Pick a task you do at least monthly, always the same way — the status update, the meeting minutes, the monthly data pull. Dictate: "I do this task regularly. Here's how I like it done" — then your full rambling standards: the format, the tone, what always goes wrong — "turn this into a skill I can run by name." Claude writes the folder.

Then the test. Open a fresh session, one that knows nothing of the conversation where you built it, type / and your skill's name, and watch Claude already know how you like it. Then send the folder to the colleague who does the same task worse than you.

From here you carry one trigger. Anything you'll do five times? Ask Claude to do it.
