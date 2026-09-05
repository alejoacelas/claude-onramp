See [README.md](README.md) for what this folder is. This file is how to write the
lesson files in it.

# How practice lessons are written

The reader is smart, non-technical, and alone. If a step can fail and the lesson
doesn't say what failure looks like, the lesson failed, not the reader. The model
is Peter Hartree's instruction posts (`work/writing/later/ph/`, e.g. the Google
Cloud setup one): short sentences, numbered steps, the critical gotcha bolded —
but with the step-by-step detail he skips.

## Rules

- **One action per step.** Each numbered step is one thing to click, type, or say
  — with the exact button name, command, or dictation prompt. "Set up a project"
  is a heading, not a step.
- **Say what success looks like.** After any step that can fail, one line: "You'll
  see …". The reader must always know whether it worked before moving on.
- **Anticipate the break.** Where a step commonly breaks, give the actual error
  text and the fix inline (or a link that matches that error). The canonical
  example: after installing Claude Code, `command not found: claude` means close
  the terminal and open a new one.
- **Split by platform where steps diverge.** When several consecutive steps
  differ between Mac and Windows, give each its own subsection so a reader
  follows one clean path with no labels to skip. A single divergent detail can
  stay inline. Sessions themselves stay platform-neutral.
- **Prerequisites before they're needed**, never mid-flow. Plan requirements,
  accounts to create, and admin dependencies go at the top of Setup, with a time
  estimate ("~30 minutes").
- **Exact prompts, in quotes.** When the reader should say something to Claude,
  write the full dictation prompt they can say verbatim. Prompts are examples to
  riff on, and say so once per file, not per prompt.
- **Verify against `docs/`.** Every UI name, command, and behavior claim comes
  from the doc mirror in [docs/](docs/), not from memory. A fact you can't ground
  there gets a `[?: …]` bracket for the fact-filler pass.
- **The lesson's idea shows up as a "why" clause, once.** Each session exercises
  one idea from its lesson (e.g. *ground*: "it will lie to you"). State it in one
  line where it changes what the reader does; don't re-teach the lesson.
- **Steps are numbered; sub-bullets are for failure notes only.** No paragraphs
  between steps.
- **Invite challenge; never require it.** Each session ends with one italic
  *Stretch:* line that deepens the thinking — articulate a vague word ("what
  makes a site *pretty*?"), predict before you look, try to break your own rule.
  A rushed reader skips every Stretch and still completes the course. See
  [inviting-challenge.md](inviting-challenge.md) for the design.

## Structure per file

Title, two-line framing (what this tool is, who should pick it), then:

1. `## Setup` — prerequisites block, then install → sign in → Wispr Flow → first
   prompt. Ends with the reader having seen a page with their name on it.
2. One `## <session>` per session, in course order (think, understand, ease,
   mingle, stop, ground, context, ending). Each: one goal line, then steps.

Everyone builds the same personal website all course; every session's exercise
applies that session's lesson to it.
