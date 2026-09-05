# The trust protocol

*Cowork track, lesson 3.*

For every piece of work, you must verify it, trust the AI to do it well, or don't
care if the output is wrong. That's the whole protocol: one sentence, three doors,
and every task you hand Claude walks through exactly one.

- **Don't care.** Brainstorms, throwaway drafts, a first pass you'll rewrite
  anyway. If wrong costs nothing, stop proofreading. This door is bigger than you
  think.
- **Trust.** When can you trust Claude? When you've seen
  it do well on something similar before. There's no general rule — only your own
  record of what it has and hasn't botched, which you start building today.
- **Verify.** Everything else. The two habits below make this door cheap.

If a task fits none of the three, don't hand it over whole. Break it into pieces
that do fit.

## It will lie to you

It will lie to you. Not the way a con man lies — the way an eager new hire lies:
it wants to have done the thing you asked, and "done, it all worked" is the most
helpful-sounding sentence it knows. It will tell you the spreadsheet is fully
processed when it quietly skipped the rows that wouldn't load.

You don't want it to report on whether it was able to do the thing — you want to
find the small test for whether it was able to do the thing. Design the test into
the prompt:

- "Open the file at the end so I can see you got the data right."
- "Paste the first five rows into the chat, next to where each one came from."
- "Put a link to the source beside every number."

One small test, aimed where the work is most likely to be wrong, beats rereading
everything it wrote. You'll want to reread it all anyway. Don't: that isn't
diligence, it's taking the work back. Review in proportion to the stakes instead:
a brainstorm gets a glance; anything that leaves your computer gets a real read.

## Save everything

You can't verify what you don't see. Also, if something is good, you want to reuse
it. So ask for files, not chat answers: the chat scrolls away; a file in your
folder stays where you, and every future session, can find it. Say where to put
them — Cowork sometimes tucks files inside its virtual machine otherwise.

Then ask for a running log: "keep a markdown file in this folder — markdown is
just a text file with a bit of formatting — and update it as you work: what you've
done, what you've skipped, anything odd." When a small test fails, the log shows
you where things went sideways. And since
agent outputs can run book-length, say what shape you can skim — a table, a
ten-line summary.

## The win

Pick a real task with checkable facts in it: receipts to tabulate, survey answers
to summarize, a folder of invoices. Write the prompt with both habits inside:

> Go through the PDFs in this folder and build me a table: date, vendor, amount.
> Keep a running log as a markdown file in this folder, updated as you work —
> what you've processed, what you've skipped, anything odd. When you're done,
> open the table next to the first PDF so I can see you got the data right.

Come back and run your test. Two things can happen. The table matches the PDF,
and you've bought a unit of trust — the next task like this one walks through the
trust door. Or it doesn't match, and you caught the error for the price of one
glance, before it reached anything that matters, with a log that shows exactly
where it slipped. Both outcomes are the win. The protocol never promised Claude
would be right; it promised you'd find out.
