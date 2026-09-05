# At what level to understand — and to instruct

*A thinking aid for the "understand the process" lesson. It maps the utilitarian
literature on focal points and decision procedures onto one question: when Claude's
output is wrong, at what level do you look, and at what level do you pull?*

Your own framing, from the draft:

> if you're not getting what you want, understand the process … at what level to
> understand, whatever level allows you to think less and still get the results …
> the problem is analogous to the problem global utilitarians face. you can choose at
> the level of acts, motives, character, etc. … the advantage of choosing at the
> highest level is that such thing covers more terrain, but it's also less responsive
> to circumstances.

That analogy is exact, and the philosophy has already done the work of separating the
moves you're running together. The anchor is Toby Ord's DPhil thesis,
[*Beyond Action: Applying Consequentialism to Decision Making and Motivation*](https://amirrorclear.net/academic/papers/beyond-action.html)
(Oxford, 2009; [ORA copy](https://ora.ox.ac.uk/objects/uuid:c85a99d8-5ed3-4854-a2ee-9fdbf9ea942f)),
and its short version [*How to be a Consequentialist About Everything*](https://philpapers.org/rec/ORDHTB).

## 1. The one distinction that does all the work

Utilitarians learned early to split two things a naive reading fuses:

- **The criterion** — what *makes* an outcome good. For you: did the task get done to
  your standard.
- **The decision procedure** — the thing you actually run to produce good outcomes.

[Bales (1971)](https://www.jstor.org/stable/20009424) first insisted these come
apart: act-utilitarianism can be the *account of what's right* without being the
*method you use to decide*. Trying to compute the optimum case by case — running the
criterion *as* your procedure — is usually self-defeating: it costs too much
deliberation and you get it wrong more often than a good habit would. [Railton
(1984)](https://www.jstor.org/stable/2265273) turned this into "sophisticated
consequentialism": the sophisticated agent is judged by results but does *not* deliberate
by calculating results; they act from cultivated dispositions that reliably produce them.

Ord's move is to generalize this. Don't stop at acts and procedures — apply the one
criterion (goodness of consequences) to **every focal point at once**: acts, decision
procedures, motives, dispositions, rules, character, institutions. Each is scored by
the *same* standard but **evaluated independently**. The best act, the best motive to
have, and the best rule to follow can, and often do, come apart. This is *global*
consequentialism, and it's the frame your draft is reaching for.

The payoff for you: **the level at which you judge an outcome is not the level at which
you intervene.** You judge at the top — did I get what I wanted. You pull the lever
wherever leverage is highest, which is usually not there.

## 2. The Claude stack *is* a stack of focal points

Ord's list maps cleanly onto the levers you have over Claude:

| Focal point (ethics) | Lever over Claude | Who sets it |
|---|---|---|
| Act | a single output / response | the running session |
| Decision procedure | the prompt, the CLAUDE.md, the workflow you hand it | you, per task or per project |
| Motive / disposition | the persona, the "soul," the constitution | Askell & Carlsmith |
| Rule | skills, standing instructions, permission defaults | you, once |
| Character / institution | the trained model, the org behind it | Anthropic |

Every level is judged by the same question — *did it produce good outputs?* — and each
is judged on its own. That independence is the license behind your line about Askell and
Carlsmith "choosing Claude's soul": they are optimizing a *motive*, not any particular
act, and the right motive is the one whose downstream acts go best in aggregate.

## 3. Reach vs. responsiveness — the tradeoff you already named

"Covers more terrain, but less responsive to circumstances" is the exact tension
indirect consequentialism lives in. A rule or disposition is set once and governs a
thousand cases you'll never inspect; that's its whole value (economy, coordination,
no re-thinking) and its whole cost (it can't bend to the particular case). An act-level
correction bends perfectly to the case in front of you and generalizes to nothing —
you pay again next time.

[R. M. Hare's](https://en.wikipedia.org/wiki/Two-level_utilitarianism) two levels name
the switch between them: run on **intuitive-level** rules and dispositions for the
ordinary run of cases; drop to **critical-level**, case-by-case reasoning only when the
rules conflict or the case is odd enough that the standing habit misfires. The trigger
to go low is not "this matters" — it's "this is *atypical*."

Translating: don't re-supervise every Claude output by hand (that's running the
criterion as your procedure — the self-defeating move). Invest once at the standing
level so good outputs fall out for free, and reach down to the prompt or a direct
correction only when the case is unusual enough that your standing setup won't cover it.

## 4. "Think less" is a design goal, and the literature agrees with you

"Whatever level allows you to think less and still get the results" is not laziness —
it's the sophisticated-consequentialist prescription. The point of installing a higher
focal point is precisely to remove deliberation from the loop. This is the same idea as
the [first tab's](../../..) "cached thinking" and "clean automations": you do the
thinking *once*, at the highest level that holds, and then stop thinking. The two tabs
are one argument — tab 1 says *do the thinking and cache it*; this is the question of
*at what level you install the cache.*

## 5. "Understand the process" = locate the focal point

Here's why this belongs in *this* lesson. To know which lever to pull, you have to
diagnose which level *owns* the failure — and that requires looking at the process, not
just the outcome. A wrong output can be:

- **a bad act** — a one-off; just correct it and move on;
- **a bad decision procedure** — your prompt or CLAUDE.md steered it wrong; fix the prompt;
- **a bad disposition** — it keeps doing this across prompts; needs a standing instruction
  or a different model, not another correction.

Global consequentialism hands you the diagnostic: evaluate each focal point separately
and intervene at the one with the best leverage. Outcome supervision tells you *that*
it's wrong; process supervision tells you *where* it's wrong — which focal point to
touch.

**The frequency heuristic.** Frequency is the cheap signal for which level to touch. A
one-off failure lives at the act level — correct it there and don't touch anything
standing. A *recurring* failure means the fix belongs one level up: promote it from a
correction into the prompt, from the prompt into a skill or CLAUDE.md line. Recurring →
raise the level. One-off → stay low.

## 6. Don't over-fit the high level

The independence of focal points cuts the other way too, and it's the mistake to warn
against. The best motive can still produce the occasional wrong act — and in global
consequentialism you *don't* demote the motive for it, because the motive is scored by
its aggregate consequences, not its worst case. Practically: **one bad output is not
evidence your CLAUDE.md is bad.** Rewriting your standing instructions to prevent the
last specific failure makes them worse across the terrain they cover — you've traded
reach for a case that won't recur. Judge each standing level by its average over all the
cases it governs. This is the discipline that keeps "recurring → raise the level" from
degrading into "panic-edit the constitution after every miss."

## 7. Who operates at which level

There's a second axis: not just *what* level, but *who* sets it. Askell and Carlsmith
work at the critical level, choosing the disposition the rest of us then run on
intuitively — we mostly just prompt and trust. That's the structure Sidgwick described
and [Bernard Williams named "Government House utilitarianism"](https://en.wikipedia.org/wiki/Esoteric_morality):
an enlightened few set the rules the many live by without re-deriving. In ethics it's a
worry (who elected them?). For Claude it's mostly a feature — but it's the same shape,
and it's worth naming that when you write about the constitution you're describing a
Government-House arrangement, with all the trust that implies.

## 8. Where the analogy breaks (so you don't over-lean on it)

- **One criterion vs. many goals.** Ord's focal points all answer to a single good.
  Your levels answer to *this task's* goal, which changes task to task. The criterion
  is yours to set and it moves — so the "right" standing disposition is the one that
  does best across the *distribution* of your tasks, not against a fixed good.
- **You have write access to the motives.** A person can't edit their own character on
  demand; you can literally rewrite Claude's CLAUDE.md or persona in seconds. The higher
  levels are *cheap* to adjust here in a way they aren't in ethics — which makes the
  "install a disposition" move even more attractive, and makes over-fitting (§6) even
  easier to fall into.
- **The levels leak.** A single prompt can shift "disposition" for a whole session; the
  line between decision-procedure and motive is blurrier for Claude than Ord's clean
  taxonomy suggests. Treat the stack as a gradient, not five sealed boxes.

## 9. The heuristic, distilled

1. **Judge at the top, pull low as possible.** Score by the outcome; intervene at the
   highest level that reliably delivers it — that's where you think least.
2. **Drop a level only for atypical cases** (Hare's trigger), not merely important ones.
3. **Let frequency choose the level.** One-off → fix the act. Recurring → promote the fix
   up a level.
4. **Don't over-fit the standing levels.** A level earns its keep on the average case,
   not the last failure.
5. **To pick the level, read the process.** Outcome tells you *that* it's wrong; process
   tells you *which focal point* to touch.

## Sources

- Toby Ord, [*Beyond Action: Applying Consequentialism to Decision Making and Motivation*](https://amirrorclear.net/academic/papers/beyond-action.html) (DPhil thesis, Oxford, 2009) · [ORA](https://ora.ox.ac.uk/objects/uuid:c85a99d8-5ed3-4854-a2ee-9fdbf9ea942f) — the anchor; global consequentialism and the focal-point taxonomy.
- Toby Ord, [*How to be a Consequentialist About Everything*](https://philpapers.org/rec/ORDHTB) — the compressed version of the thesis's core move.
- R. Eugene Bales, [*Act-Utilitarianism: Account of Right-Making Characteristics or Decision-Making Procedure?*](https://www.jstor.org/stable/20009424) (1971) — the criterion/procedure split.
- Peter Railton, [*Alienation, Consequentialism, and the Demands of Morality*](https://www.jstor.org/stable/2265273) (1984) — sophisticated consequentialism; be judged by results, don't deliberate by them.
- Philip Pettit & Michael Smith, *Global Consequentialism* (2000), in Hooker, Mason & Miller eds., *Morality, Rules, and Consequences* — the earlier statement of scoring every focal point by one standard.
- R. M. Hare, [*Two-level utilitarianism*](https://en.wikipedia.org/wiki/Two-level_utilitarianism) (from *Moral Thinking*, 1981) — the intuitive/critical switch and its trigger.
- [Government House utilitarianism / esoteric morality](https://en.wikipedia.org/wiki/Esoteric_morality) (Sidgwick; Williams's coinage) — who gets to set the level.
