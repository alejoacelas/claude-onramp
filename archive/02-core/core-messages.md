# Core messages — first pass (2026-07-04)

Claude's best-effort cut of `../01-inventory/lessons-all.md` down to the
messages worth broadcasting, each with a candidate short formulation.
Quoted formulations are Alejo's own words (source in parentheses); unquoted
ones are drafted and provisional. Alejo overrides freely; the selection
criterion was "most valuable, or the best starting point for getting better,"
weighted toward what only this guide would say (his contrarian takes) over
what any tutorial says.

## The spine — why any of this matters

1. **Delegate what you'd never do yourself.**
   "Most of the value I get is from delegating them tasks I wouldn't do
   myself" — too technical, too small, too time-consuming, too draining, too
   vague. (love-agents) The guide's whole point; everything else serves it.
2. **You're the manager now.**
   "You're Claude's manager, and if you can only conceive of this multi-expert
   genius as your personal assistant, you're really short on imagination. ...
   you need to spot the bullshit fast." (better-start) The identity shift the
   reader must make; per his blog, willingness to reshape identity predicts
   power users.
3. **Verify it, trust it, or don't care.**
   "For every piece of work, you must verify it, trust the AI to do it well,
   or don't care if the output is wrong." (love-agents) The decomposition rule
   that makes hard delegation possible; the guide's most reusable sentence.

## The habits — what to do differently tomorrow

4. **Talk, don't type.**
   "You should dictate, you should never type — at least for interacting with
   AIs." (rant-tips) Ramble, hedge, state uncertainties; it's the
   highest-leverage habit change and the first install.
5. **Best model, always.**
   "You're already paying Claude less than the living wage, it's bad manners
   to haggle when it will be doing so much of your work for you."
   (better-start) Kills the most common self-sabotage (economizing on the
   thing doing your work).
6. **Run many at once.**
   Agents are slow; you are not idle. Buy speed with parallelism, not with a
   worse model. (love-agents + old plan) Pairs with #5: the answer to "but
   it's slower."
7. **Save everything.**
   "You can't verify what you don't see. Also, if something is good, you want
   to reuse it." (love-agents) Files are the memory, the audit trail, and the
   on-ramp to reuse; the chat is none of those.
8. **It will lie to you; find the small test.**
   "You don't want it to report on whether it was able to do the thing — you
   want to find the small test for whether it was able to do the thing."
   (rant-tips) The verification habit in one move.
9. **Be curious when it fails.**
   "You're doing it wrong — because you're not being sufficiently curious."
   Karpathy: "you can delegate your thinking but you cannot delegate your
   understanding." (rant-tips) Getting annoyed is re-delegating; asking why is
   how setup problems die permanently.
10. **Ask Claude first.**
    Have the impulse to throw it at the machine before deciding it's hard; a
    bad answer arrives fast and cheap. (rant-tips) The default motion for
    everything else in the guide, including getting unstuck from the guide.

## The fears — what's actually at stake

11. **Permissions gate consequences, not competence.**
    Reversible? Wave it through. Irreversible — delete, send, publish — that's
    the one to actually read. (old plan) One rule replaces the whole anxious
    approval treadmill.
12. **Worry less about security.**
    "Most of what can happen is like lending your computer to an
    over-enthusiastic friend." Name what you actually fear losing, set up a
    passive protection once, then go all the way to the convenience side.
    (rant-tips) The fear is the real adoption blocker; this is the honest
    version of "it's fine."

## The map — which Claude, and why graduate

13. **Same Claude, different fences.**
    Chat: one Claude on a short attention span. Cowork: many Claudes in a
    padded room. Code: all the Claudes, on your computer — what you can do, it
    can do. Tag: one Claude your whole team shares. (better-start, extended)
    The reader's mental model of the product line in four lines.
14. **Use what the Anthropic engineers use.**
    "They're trying to automate themselves into creating God, and so you
    should basically use the tools that they use to create God." (rant-tips)
    The case for graduating to Code, and the guide's most quotable sentence.
15. **Expect the first day to be Linux, not Windows.**
    Cowork is Windows: click and it works. Code is for hackers: set things up
    once, then it works *for you*. (rant-tips) Sets the one expectation that
    prevents day-one abandonment.
16. **The reuse arc: files → instructions → skills.**
    Save outputs as files; promote what repeats into standing instructions
    (CLAUDE.md); package what others could use as skills. Reuse for yourself
    becomes sharing. (old plan) The compounding lesson — the difference
    between using AI and getting better at it every week.

## Just below the line — strong contenders, cut

- Long chats degrade; hand off past ~200k (folded into #7's "files are the
  memory"; resurface in the Code lesson).
- End your ramble with "ask me lots of questions" (a tactic under #4, not a
  core message).
- Feed it text; CSV over XLSX (troubleshooting, not gospel).
- The 5x rule (good, but #1 already carries the delegation trigger).
- Everything is just a file on your computer / future-proof (folds into #7
  and #13).
- Prompt injection is rare in practice (a reassurance under #12, not its own
  message).
- Tag-specific lessons (give it something to own; work in public channels) —
  core *within* the Tag lesson, not core to the guide.

## For Alejo

- The internet's favorite lessons (plan mode, /clear, checkpoints, MCP) are
  deliberately below the line: they're mechanics the lessons can carry
  incidentally. Restore any you think deserve flair.
- #14's God line and #12's "worry less about security" are the two most
  broadcast-risky picks; both are also the most you. Confirm they stay.
- Is 16 too many? If forced to 8: 1, 2, 3, 4, 5, 8, 12, 14.
