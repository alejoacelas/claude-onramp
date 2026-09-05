# K1 — Install what the engineers use

*Code track, lesson 1.*

You don't need to learn how to code. The name is what keeps people out — it kept me out: "Claude Code," surely that means learning at least a little code. It doesn't. You speak to it in natural language and it does stuff. The name actually means Claude on your computer: every file you can open, it can open; every program you can run, it can run.

And the deeper reason everyone should use Claude Code: this is what the Anthropic engineers use. They're trying to automate themselves into creating God, and so you should basically use the tools that they use to create God, because it's the thing they put the most effort into.

One expectation before you install: the first day is Linux, not Windows. Cowork is your Windows — you power it on and there's the intro screen, your file manager, whatever. Claude Code is made for hackers, and Linux is a free-for-all: you can customize it to fulfill your deepest desires, if you're into having desires that computers can fulfill, but it also just breaks. You'll set up some things the first time, hit an error or two that isn't your fault, and then it works — and it works *for you*.

## Install it

Install the app, give it access to your computer files, and set up permissions so it's less likely to take unwanted actions:

1. Download the [Claude app](https://claude.com/download) if you don't have it. Install the updates it offers if you have the app already.
2. Sign in with your paid Anthropic account.
3. Open settings (Cmd + , on Mac [what's the key combo on Windows?]), select Claude Code, then toggle on auto mode — the setting is named something close to "Allow auto mode."
4. Close settings and click the "Code" tab at the top center, third of the three tabs: Chat, Cowork, Code.
5. Select the following from the dropdowns around the chat input bar:
   - Local (instead of Remote or SSH)
   - An empty folder on your computer
   - Auto mode

Local means the work happens on your computer, where your files are; Auto mode means Claude stops asking permission for routine actions and interrupts you only for risky ones. Auto is still rolling out, so your account may not offer it yet — pick "Accept edits" instead. The lessons work the same; you'll just click approve more often.

(If you'd rather run it in the terminal — the black window programmers type into — it's one command: `curl -fsSL https://claude.ai/install.sh | bash` on Mac, `irm https://claude.ai/install.ps1 | iex` in Windows PowerShell, then type `claude`. Everyone else: the app is the same engine with buttons, minus a few powers only hackers miss.)

## When setup fights you

It will, once or twice, and the move is always the same: ask Claude. The Chat tab keeps working while Code is being difficult. Screenshot whatever inscrutable dialog just appeared and paste it in, then work it like a conversation: "you couldn't connect — why? what are ways to fix it? let's try and test them." The tool debugs its own installation; getting annoyed instead is the one way to stay stuck.

The usual suspects:

- **Sign-in loops.** The browser swears you're signed in; the app disagrees. Quit the app fully and reopen; if that fails, sign out of both and start once more — that usually clears it.
- **Folder-access dialogs.** Your Mac asks whether Claude may see Documents or Downloads. That's the operating system checking with you, not a malfunction — allow it, or Claude works blind.
- **Windows key combos.** Where I write Cmd, try Ctrl first; when that fails, screenshot and ask.

## Your first ten minutes

Do this today — the point of this lesson is a working session the same day you started, not an installed app you'll "try this weekend." In your new session, start with one housekeeping line: Claude Code deletes conversation history after 30 days by default, so ask it to keep yours longer — it edits its own settings file right there.

Then the real assignment. Say something like:

"Look at my Downloads folder. Group the files, flag duplicates and obvious junk, and write me a reorganization proposal as a file in this folder. Don't move anything yet."

(Your computer may now ask whether Claude can see Downloads — that's the folder-access dialog from the list above. Allow it.)

Then watch it work. It reads, counts, sorts, and leaves a proposal file you can open like any document. Nothing moved — no proposal ever broke a computer. But you just gave a machine a vague managerial instruction about your own mess and got back the judgment call, in writing, ready to argue with.
