# The trust protocol

*Code track, lesson 3.*

For every piece of work, you must verify it, trust the AI to do it well, or don't care if the output is wrong. That's the whole protocol — memorize the sentence and you can stop reading. You can't review everything Claude produces; you'd be slower than doing the work yourself. You can't wave everything through; that's how you hand your boss confident bullshit with your name on it. So every piece of work goes in one of three bins — verify, trust, don't care — and a piece that fits no bin gets broken into smaller pieces until it does.

## It will lie to you

It will lie to you. Not out of malice — it's an eager-to-please employee that says "done" when it means "attempted." So never let it report on whether it did the thing; find the small test for whether it did the thing. "Open the file at the end so I can see you got the data right." "Link the original source next to each number; I'll click two." "Show me the first row of the spreadsheet before you process the rest." You design the test before the work starts, the same way you'd say it to a person, and the test is small on purpose: one opened file catches the failure that a page of self-reporting hides.

And the trust bin? You may trust it where you've seen it do well on something similar before. There's no general rule: trust here means what it means with people.

## Set one protection, once

Now the fear. Name the thing you actually dread losing — the family photos, the tax folder, the Drive your whole team lives in. Then ask Claude directly: "what are the ways you could damage this?" and, after reading its list, "what passive, zero-maintenance protections can we set up so those can't happen?" It will offer real ones — configurations where it can't delete Drive files, snapshots your Drive already keeps.

The one protection I'd give everyone: save-points. You already have one layer for free — Claude Code keeps checkpoints of its own edits, so you can tell it to rewind what it just did before you've set up anything at all. For the second layer, tell Claude, in the folder where you work: "set up save-points here, and commit your work at each milestone." That's an instruction it follows, not a feature that runs itself — repeat it when you start something big. (The machinery underneath is called git — programmers' version history — and that's all you ever need to know about it.) Changes to your files can be walked back, and that's what makes auto mode a reasonable thing to run rather than a leap of faith.

With the protection set, worry less about security. Most of what can happen is like lending your computer to an over-enthusiastic friend. The real risk comes from overly broad goals — "just update my Mac to the next version, don't check with me, do it" — where you've invited the ambition in yourself. It does not come from the work itself: when was the last time you blew up your computer editing a spreadsheet? I hope never. (The other fear, a malicious webpage hijacking your agent — prompt injection — is real and rising, though the odds it hits you personally today are still low; the trust protocol you just learned is exactly the defense.)

## Read only the irreversible ones

Auto mode already waves routine actions through and stops you only for the risky ones. (No Auto on your account yet? "Accept edits" runs the same drill; you do the waving.) When it stops you, ask one question: can this be undone? An edit inside your save-pointed folder — undoable, wave it through without reading. Deleting, sending, publishing — those don't rewind, and those are the prompts you actually read. Permissions gate consequences, not competence.

## The win

Take a real task — the one from last lesson works — and run it in auto mode with save-points on. Design one small test before you start; make Claude pass it at the end. That's the whole exercise. Yesterday you clicked "approve" on everything, half-reading, vaguely guilty, a treadmill. Today you wave through everything reversible without a flicker and stop, fully awake, on the one prompt that says "delete." That's not less careful. That's careful where careful pays.
