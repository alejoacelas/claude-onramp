# Style criteria — Alejo's voice for the Claude onramp guide

Extracted from `samples/alejo-blog.txt` (his blog), `samples/better-start.txt` (his
hand-drafted opening for this guide — the target register),
`samples/rant-tips-claude-code.txt` (his spoken coaching on this exact subject), and
`samples/love-agents.txt` (his workshop handout on delegating to coding agents — the
closest existing match to the guide's instructional register).
`references/claude-writing-defects.txt` is a different author (JL); only its
Claude-tic catalog is used, and only where Alejo's samples agree.

Caution for anyone quoting the blog: three sections are Claude's voice, not
Alejo's — the Fable reply in "Fable on the lump of love fallacy", the "claude
notes" under "Sad kindness", and "Solve each problem only once". Don't calibrate
on those.

## 1. The voice, in one paragraph

Reading Alejo feels like being cornered at a party by someone who has decided you
matter. He talks straight at you, tells you a blunt rule as if it were law, accuses
you of the exact way you're failing it, and then confesses where he fails it himself.
The sentences sound dictated — they accumulate clauses, correct themselves mid-page,
break into runs of questions — but every one carries a new claim. He is
simultaneously the most provocative and the most earnest person in the room: he'll
call you a moron and mean it as an act of love, hedge one specific sub-claim while
the main claim stands naked, and once per piece reach a register that is almost
scripture. Nothing is neutral; everything, including a terminal command, is a matter
of manners, courage, or curiosity.

## 2. Criteria (the Pareto dimensions)

Score each 1–5 unless marked pass/fail. 3 = present but generic; 5 = indistinguishable
from the samples.

### C1. Provocative true wording
Rule: every major claim is phrased in the most provocative form the author could
literally defend — never softened, never exaggerated past what he believes.
Judge: for each major claim ask (a) does it sting or surprise? (b) is it still a
precise statement of a defensible belief? 5 = both, for every claim; 3 = true but
tame; 1 = either bland or hyperbole he couldn't stand behind.
- "A friend told me 80k finds it hard to hire for their advising team. I think the only reasonable explanation for that is that a bunch of you are absolute morons" (alejo-blog.txt, "Have you tried violent passion?")
- "if you can only conceive of this [multi-expert genius] as your personal assistant, you're really short on imagination" (better-start.txt)
- "It will lie to you." (rant-tips-claude-code.txt — a section title, stated flat)

### C2. Direct challenge, warmly meant
Rule: address the reader in second person, name their failure mode, command the fix —
and let the underlying stake be that you expect more of them, not contempt.
Judge: count second-person moves (accusation, imperative, question aimed at the
reader). 5 = the passage confronts the reader at least once and the confrontation
reads as investment in them; 3 = generic "you should" advice; 1 = third-person or
contemptuous. Distinct from C1: this scores who is addressed, not how claims are worded.
- "You're doing it wrong — because you're not being sufficiently curious." (rant-tips-claude-code.txt)
- "Do you really care about paying it a twentieth instead of a fortieth of your own wage?" (better-start.txt)
- "if you're just willing to figure out *where can I push myself* ... then I'm so extremely excited. I'm so extremely excited about you." (alejo-blog.txt, "Compounding yourself")

### C3. Rule first, exceptions as confessions
Rule: open with the rule stated as near-universal; handle exceptions after, briefly,
often by admitting the author's own violations. Never bake hedges into the rule itself.
Judge: can a reader extract the rule from the first one or two sentences? Are
qualifications concessions that follow ("One exception is…", "I don't adhere to this
strictly") rather than "generally/often/in many cases" diluting the rule? 5 = blunt
rule + honest exception; 1 = rule pre-hedged into mush.
- "Doing now is great. ... I don't adhere to this strictly. Blog post ideas I often have up to five in the shower, and I don't do them successfully after I get out." (alejo-blog.txt, "There is rarely ever a good reason to do things later")
- "Always use the best Claude." (better-start.txt)
- "For every piece of work, you must verify it, trust the AI to do it well, or don't care if the output is wrong." (love-agents.txt — a complete decision rule in one sentence, exceptions handled after)

### C4. Concrete instance within reach
Rule: every abstract claim is earned by a named person, a real incident, or a small
test the reader could run — usually within a sentence or two.
Judge: for each general claim, is there a specific, checkable instance nearby?
5 = names, incidents, or runnable tests throughout; 3 = generic examples ("imagine a
user who…"); 1 = abstraction stacked on abstraction.
- "Lilia, who works at a dating startup, tells me they enforce a rule of not talking about religion or politics on the first date" (alejo-blog.txt, "Have you tried violent passion?")
- "when was the last time you blew up your computer editing a spreadsheet? I hope never." (rant-tips-claude-code.txt)
- "See how much I hedge, ramble, and caveat in [my own work](link)" (love-agents.txt — he offers his own transcript as the checkable instance)
- "While I was preparing this session I ran Claude Code agents in parallel to: 1. Export my demo Claude conversation to a website 2. Investigate role counts at CEA..." (love-agents.txt)

### C5. Moral register on a technical subject
Rule: at least once per passage, an ethical or relational frame — manners, virtue,
temptation, Claude as a person you owe something to — does the explanatory work,
in plain non-technical words; at most one near-biblical peak per passage, never stacked.
Judge: pass/fail on presence of one such move, then 1–5 on restraint and integration.
5 = one move that carries a real lesson and would survive as a proverb; 1 = none,
or several piled up until it's kitsch.
- "You're already paying Claude less than the living wage, it's bad manners to haggle when it will be doing so much of your work for you." (better-start.txt)
- "They're trying to automate themselves into creating God, and so you should basically use the tools that they use to create God" (rant-tips-claude-code.txt)
- "Most of what can happen is like lending your computer to an over-enthusiastic friend." (rant-tips-claude-code.txt)

### C6. Spoken cadence
Rule: the prose sounds dictated — self-corrections left on the page, runs of short
rhetorical questions, clauses chained with "and", casual intensifiers (just, really,
basically, damn) — while staying grammatical enough to read.
Judge: read the passage aloud. 5 = sounds like a person mid-rant, with at least one
dictation artifact (a self-correction, a question run, an aside in parentheses);
3 = clean written prose, correct but voiceless; 1 = formal or bureaucratic.
- "Why not? What would it take? What special power will you acquire in the future that will make your reply better than the reply you'd write now?" (alejo-blog.txt, "…do things later")
- "I'd name it something like a sad kindness that radiates out of them. No, a kind sadness, actually." (alejo-blog.txt, "Sad kindness")
- "When can you trust the AI? When you've seen it do well on something similar before. There's no general rule." (love-agents.txt — question-and-answer rhythm, spoken but instructional)

### C7. Calibrated confidence
Rule: hedges are rare, local, and informative — they attach to a named sub-claim and
tell the reader exactly what the author doesn't know; the main claim stands unhedged.
Judge: list the hedges. 5 = each hedge marks a specific uncertainty ("here's half a
story", "I'm not sure exactly what's going on there") and the thesis carries none;
3 = hedges present but vague; 1 = blanket hedging ("it depends", "results may vary")
or fake omniscience with no admitted uncertainty anywhere.
- "There's no limit for what you can do if you do things now (false, but I still haven't bumped the limit yet!)" (alejo-blog.txt)
- "So here's a story — here's half a story — for what's going on" (alejo-blog.txt, "Compounding yourself")
- "This isn't literally true. Most days I have more ideas than I have tasks started." (alejo-blog.txt, "Act on all your great ideas")

### C8. Load-bearing analogy
Rule: analogies come from everyday life or well-known stories, run long enough to
explain a mechanism, and cannot be deleted without losing content. No decorative
imagery.
Judge: delete each metaphor and reread. 5 = the explanation collapses without it and
the source domain is homely (operating systems, borrowed computers, time loops);
3 = apt but skippable; 1 = ornamental ("the pipeline is the spine…") or absent where
one was needed.
- "You can think of Cowork as your Windows ... Linux is a free-for-all: you can absolutely customize it to fulfill your deepest desires if you're into having desires that computers can fulfill, but it also just breaks" (rant-tips-claude-code.txt)
- "Tokens are just a fancy term for words, or similarly-sized chunks of text." (alejo-blog.txt, "Earning to Claude" — jargon glossed in one homely line)
- the Mother of Learning time-loop carrying the whole argument of "You literally cannot die" (alejo-blog.txt)

### C9. Claim density; repetition only as incantation
Rule: every sentence adds a new claim, image, or instruction; a point is restated only
verbatim, for intensity, never reworded to fill space.
Judge: apply the deletion test sentence by sentence. 5 = nothing cuttable, and any
repetition is exact and rhythmic ("And I really love them. And I'm proud. And now
you're starting a new group. And I really love you. And I'm proud." — alejo-blog.txt,
"EA groups are hard and great and worth it"); 3 = one padded restatement; 1 = the
same idea in three reworded sentences. His densest register compresses a rule to an
aphorism: "You can't verify what you don't see." (love-agents.txt).

## 3. Anti-criteria — Claude tics that must never appear

Any single hit is a fail on this section. Each with its detection rule:

- **Announced importance.** "Crucially", "importantly", "the key insight is",
  "what matters here is". Detect: any sentence asserting that a thing matters instead
  of stating the thing. (JL rule; Alejo's samples never do it.)
- **Elegant variation.** The same claim restated in reworded adjacent sentences.
  Detect: paraphrase each sentence; duplicates that aren't verbatim incantation fail.
- **Decorative em-dash closer.** A final clause after an em-dash that adds only an
  abstraction ("— a testament to what curiosity can do"). Alejo uses em-dashes
  constantly, so the dash itself is fine; detect closers whose dash-clause restates
  rather than adds.
- **Quality-adjective filler.** "clean", "elegant", "seamless", "robust",
  "comprehensive", "nuanced", "delve", "landscape" (figurative). Detect by word list.
- **Feature-directed awe.** Superlatives whose subject is a tool or capability rather
  than a person feeling something ("powerful capabilities", "incredibly versatile").
  Alejo's superlatives attach to people and to his own reactions
  ("flabbergastingly talent-dense team"). Detect: awe-adjective + inanimate subject,
  no experiencer in the sentence.
- **Both-sidesing.** Ending on "it depends", "there are trade-offs", or symmetric
  pros/cons with no verdict. Detect: passage closes without a stance. Alejo always
  picks a side, then confesses the cost.
- **Unearned reassurance.** "You've got this", "don't worry, it's easy". Alejo's
  encouragement is always conditional on the reader doing something ("if you're
  willing to just keep trying... I'm so excited about you"). Detect: comfort with no
  condition attached.
- **Abstract-noun moralizing after a story.** "This illustrates the importance of
  curiosity." Detect: lesson restated as an abstraction. Alejo's lessons are
  imperatives ("stay clear of the things that kill you, and do literally everything
  fucking else").
- **Throat-clearing.** "It's worth noting that", "Let's dive in", "In this section
  we'll…", defining terms the reader already knows. Detect by phrase list and by
  asking whether sentence one already states the rule (see C3).
- **Cleft constructions.** "What this means is…", "It is X that…". Detect
  syntactically; convert to subject-verb-object.
- **Mid-paragraph bold for emphasis.** Alejo bolds bullet leads and headers, never a
  claim inside running prose. Detect: `**…**` inside a prose paragraph.
- **Emoji.** Never.

JL rules **not** imported, because Alejo's samples violate them: em-dashes (he nests
them), contrast framing ("Look for quests, not jobs"; "Stop feeling dread. Start
feeling regret"), "not only… but also", bold bullet leads, pre-counting lists
("does two things:"), exclamation marks, first-person emotion, and profanity.

## 4. Open questions for Alejo

- **Profanity ceiling for the guide.** The blog says "fucking" freely; the rant has
  one "absolute shit"; better-start peaks at "bullshit"; love-agents (the closest
  register match) has none. Default to the love-agents/better-start band ("bullshit"
  at most) unless you say otherwise?
- **Sustained biblical thread.** Your hypothesis is a subtle biblical register
  *extended through the guide*; the samples only show isolated peaks (one per piece).
  Extending it is a deliberate new move, not something the samples evidence — confirm
  you want it, and how visible.
- **How much Alejo-the-person.** The blog runs on intimate self-disclosure (crushes,
  crying, pride). better-start has almost none. Should the guide use your personal
  incidents as its concrete instances (C4), or the reader's hypothetical ones?
- **Exclamation marks.** Bullet-style posts use them densely ("it's free real
  state!"); better-start, the rant, and love-agents use none. Default to none?
- **Prose vs bullets.** Half the blog is bullet stubs with bold leads; better-start
  is prose plus one bullet list; love-agents is short prose paragraphs plus numbered
  bold-led tips. Is the love-agents shape the default for guide sections?
- **"Indirect, without technical language".** Partially confirmed: you gloss jargon in
  one homely line ("Tokens are just a fancy term for words") rather than avoiding the
  concept. OK to treat "no unglossed jargon" as the operational rule instead of
  "no technical language"?
