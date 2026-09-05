# Run many, save everything

*Code track, lesson 4.*

Agents are slow, and you are not idle. That's the whole lesson; the rest is how.

You give Claude a real task and it vanishes for ten minutes, and you'll be tempted to buy the minutes back by cheapening the work — a faster model, a smaller ask. Buy speed with parallelism instead: same best model, more of it, while you do something that actually needs you. If several sessions push you into rate limits — the cap on how much Claude your plan buys per stretch of hours — the answer is the bigger plan, not the worse model. You're already paying Claude less than the living wage; haggling now, when it's about to triple its output for you, is bad manners twice over.

## Run many

While I was preparing a workshop on exactly this, I had four Claude Code agents running at once: one exporting my demo conversation to a website, one digging through an org's role counts to invent example tasks, one polishing my writing style off an older tutorial, one double-checking the install instructions I was about to hand out. The job now is keeping several fed, not watching one work. You will watch anyway — a transcript scrolling by feels like progress. It's television.

There is no new mechanic to learn: Cmd/Ctrl + N opens a fresh session — point it at whatever folder its task lives in. And if a single task is too big for one session, tell it "do it with subagents" — it hires helper Claudes and folds their work back together.

## Save everything

The rule: everything an agent touches becomes a file — the plan before it starts, the intermediate outputs, the results. Not because you're tidy. Because you can't verify what you don't see, and because if something is good, you'll want to reuse it.

Three sessions running means three chats you will never re-read — quick, what did your second agent decide an hour ago? So make the agents report in formats you can skim: "save the plan as a file before you start"; "give me the results as a table"; "write a one-page summary and put the full detail underneath." Specify the summary or receive a book.

## Your next hour

Two tasks and a handoff, all on real work.

First, the two tasks. Pick two unrelated things from your list. Start one; the moment Claude gets going, Cmd/Ctrl + N and start the other. Then leave both alone — no television. Come back in twenty minutes and collect files, not promises.

Second, the handoff. Open your longest-running session — the one you've been rambling at for days — and click the usage ring next to the model picker; it shows how full the context window is, something like 300k of 1M. (Tokens are just a fancy term for words, or similarly-sized chunks of text.) Past around 200,000 — my rule of thumb, not anyone's official number — long conversations go soft, for structural, machine-learning reasons: nothing you did wrong, and nothing more tokens will fix. The fix is a handoff, and it's about performance, not cost. Say: "write down what we've agreed so far as a file, and give me a prompt to feed to a fresh agent." Open a new session, paste the prompt, and watch it pick up sharp where the old one had gone soft.
