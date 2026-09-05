# Lessons — full inventory (2026-07-04)

Everything a guide could plausibly teach a smart, non-technical person about
delegating real work to Claude. Divergent stage: comprehensive, deduped, not
prioritized. ⚑ = facts that drift (prices, plan names, features, deadlines) —
reverify before publishing. Sources worth revisiting linked inline.

Main sources: Alejo's samples (rant-tips, love-agents, better-start), seeds
from the old plan, [Claude Code best practices](https://code.claude.com/docs/en/best-practices),
[Anthropic Academy](https://www.anthropic.com/learn) / [AI Fluency](https://aifluencyframework.org/),
Cowork help center + community guides, Claude Tag launch + tutorial.

## 1. Core — using AI better, product-agnostic

### Delegation and mindset
- **Delegate the tasks you'd never do yourself.** The value is in work that's too technical, too small, too time-consuming, too draining, or too vague to start alone — not your existing to-do list.
- **You're the manager now, not the typist.** More of your work becomes judging streams of smart-but-misguided machine output; the skill is asking for what you want and spotting bullshit fast.
- **Don't just hand over your to-dos; imagine bigger.** If you can only conceive of this multi-expert genius as a personal assistant, you're short on imagination.
- **The 5x rule: repeated five times means ask Claude.** Anything you'll do five or more times, ask whether Claude can do it or automate it.
- **Ask Claude first; decide afterward if more effort pays.** Throw the task at it immediately — a bad answer arrives fast and tells you whether a better prompt is worth writing.
- **Prompting is only a quarter of the skill.** Anthropic's AI Fluency framework: Delegation (what to hand off), Description (the prompt), Discernment (judging output), Diligence (owning the result) — weakness at any one breaks the chain. ([aifluencyframework.org](https://aifluencyframework.org/))
- **Pick a task that would take you 3+ hours.** A rough proxy for "hard enough to be worth delegating" — small enough asks waste the leverage.
- **The mere belief you can hand off harder tasks powers you through.** Most tips are optional; the identity shift — "I can delegate this" — is the load-bearing one.
- **Notice what worked; no guide replaces your own intuition.** When output is great or terrible, ask what you did — prompt structure, context, mode — and keep what works. ([best practices](https://code.claude.com/docs/en/best-practices))

### Prompting and description
- **Talk, don't type; rambling and hedging make prompts better.** Dictate the goal with all your uncertainty in it — "I suspect this source might not connect" — exactly as you'd say it to a person. (Wispr Flow: [wisprflow.ai](https://wisprflow.ai/))
- **State the problem, not a tidy plan.** The AI doesn't need a well-defined spec handed in; say what you want, be clear about what you don't know, and let it structure the work.
- **Describe outcomes; leave the steps to Claude.** Brief it like a capable new teammate: the goal, why it matters, and where the relevant material lives.
- **Specific prompts need fewer corrections; save vague for exploring.** Scope the file, the scenario, and what "done" looks like — but "what would you improve here?" is exactly right when you want its read first.
- **Point at examples instead of describing what you want.** "Follow the pattern in this file / this past report" beats paragraphs of specification.
- **End your ramble with "ask me lots of questions."** Have Claude interview you to surface edge cases and tradeoffs you haven't considered, then write the spec down. ([best practices](https://code.claude.com/docs/en/best-practices))
- **Feed it text; CSV over XLSX, download over connector.** Agents read text — when a file format or connector fights you, export the thing as a text file and drop it in the folder.
- **Give real context: paste screenshots, attach files, link docs.** Rich inputs (an error screenshot, the actual data, the design image) beat descriptions of them every time.

### Verifying and trust
- **Every piece of work: verify it, trust it, or don't care.** Decompose any task into steps meeting one of the three; if you can't, restructure the task or work on something else.
- **It will lie to you; find the small test.** Never ask for a self-report ("did it work?") — design a check you can see: "open the file at the end so I can see you got the data right."
- **Trust comes from track record, not general rules.** You can trust the AI on a task when you've seen it do well on something similar — try it, hear it from others, or extrapolate carefully.
- **Give Claude a check it can run, then walk away.** A test, a build, a script, a screenshot comparison — anything pass/fail closes the loop without you as the error detector. ([best practices](https://code.claude.com/docs/en/best-practices))
- **Ask for evidence, not assertions of success.** Have it show the output, the command it ran, the linked source next to each claim — reviewing evidence is faster than re-verifying.
- **Dispatch a second AI for adversarial review.** A fresh context isn't biased toward work it just produced — "use a subagent to adversarially review this" — and read their disagreement.
- **Reviewers always find something; ask for gaps, not style.** A critic prompted to find problems will, even in sound work — scope it to correctness and requirements, treat the rest as optional.
- **Review proportionally to stakes.** Skim internal summaries; carefully read anything going to other people or changing systems you care about.
- **Never assume generated code works until it has run.** The whole point of agents that execute their own work is that "looks right" stops being the standard. ([simonwillison.net](https://simonwillison.net/tags/ai-assisted-programming/))

### When it fails
- **Be curious when it fails; don't just re-delegate.** Karpathy: "you can delegate your thinking but you cannot delegate your understanding" — ask why it failed, check the explanation against what you saw, then try fixes.
- **Course-correct early; interrupt the moment it drifts.** Stopping and redirecting mid-task beats waiting politely for a finished wrong answer.
- **Two failed corrections means start over with a better prompt.** The context is now polluted with failed approaches; a clean session incorporating what you learned almost always wins. ([best practices](https://code.claude.com/docs/en/best-practices))
- **Once fixed, make the fix permanent.** After debugging a setup problem once, say "add this to your global instructions" so no future session repeats it.

### Context and memory
- **Long conversations degrade; it's structural, not a bug.** Model quality predictably drops as context fills — past ~200k tokens, think about handing off. ⚑
- **Ask for a handoff prompt, not a longer conversation.** "Write down what we've agreed and give me a prompt for a fresh agent" — done for performance, not cost.
- **One task, one session; don't kitchen-sink.** Mixing unrelated asks fills context with noise; reset between tasks.
- **Files are the memory, not the chat.** Save the plan, intermediate outputs, and decisions as files; any future session can read them, and you can verify what you can see.
- **Save everything; you can't verify what you don't see.** Also: anything good is something you'll want to reuse — and files are the on-ramp to reusable instructions.
- **Ask for skimmable outputs.** Agent outputs can be book-length; specify summaries, tables, and lists so you can actually judge them.

### Parallelism and scale
- **Run many AIs; buy speed with parallelism, not a worse model.** Agents are slow to reply but you aren't idle — open another session for anything else that improves the final output.
- **Always use the best model; don't haggle with your genius.** You're paying Claude far less than a living wage for work that matters; if you hit limits, buy more. ⚑
- **Your attention is the bottleneck, not the agents.** Willison runs four parallel agents and is "wiped out by 11 a.m." — scale delegation only as far as your judgment keeps up. ([Cherny on Lenny's Podcast](https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny))
- **Too-big task? Say "do it with subagents."** One magic sentence turns a single overloaded session into coordinated parallel workers.
- **Cheap-to-verify tasks can run on a schedule without you.** "Loop engineering": recurring jobs where a machine can check the result — the hard part is picking tasks whose success is machine-checkable.

### Safety and permissions
- **Permissions gate consequences, not competence.** Reversible? Wave it through. Irreversible — deleting, sending, publishing — that's the one action to actually read.
- **Worry less about security; screen off specific fears passively.** Name what you actually fear losing, ask Claude "how could that happen, and what zero-maintenance setup prevents it?", set it up once.
- **Failures feel like lending your laptop to an eager friend.** Real risk comes from overly broad goals ("just upgrade my Mac, don't check with me"), not from editing a spreadsheet.
- **Prompt injection is documented but rare in practice so far.** A hijacked-agent attack is real in the literature; for personal use you can mostly not organize your life around it. ⚑
- **Scope what you delegate; don't invite harm in.** "Install this program at all costs" is you creating the failure mode — keep goals bounded and the escape hatches open.

## 2. Claude Cowork

- **Cowork is Claude that does the work, not describes it.** In the desktop app, it reads a folder you point it at, plans, executes multi-step tasks, and writes real files back. ([get started](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork))
- **It runs in a sandboxed VM on your machine.** Code executes in an isolated Linux virtual machine — but it can still make real changes to the files in your folder. ⚑
- **Cowork is the fenced on-ramp; it teaches Code's four intuitions.** Folders, models, permissions, context — learn them where Anthropic has padded the walls, then graduate.
- **Outputs are real files: working Excel, actual PowerPoint.** Not chat text to copy-paste — deliverables land in your folder with formulas that work.
- **Point it at one folder per job; the folder is the workspace.** A well-organized directory is most of context management — Claude reads what's there and writes results beside it.
- **Context files in the folder brief every session automatically.** Small markdown files saying who you are, how you work, and what good output looks like get read at session start.
- **Global instructions live in Settings; folder instructions per project.** Standing preferences go in Settings > Cowork; project-specific context goes in the folder. ⚑
- **Projects keep workstreams from bleeding into each other.** Separate Projects give each stream clean, persistent memory — marketing assumptions stay out of your financial analysis. ⚑
- **Two permission modes; deletion always asks.** "Ask before acting" (default) or "act without asking" — destructive operations require explicit approval either way. ⚑
- **The app must stay open; close the laptop, tasks stop.** Scheduled runs wait for you to reopen — Cowork is supervised delegation, not always-on automation. ⚑
- **Dispatch several tasks, come back to deliverables.** Cowork coordinates parallel workstreams; five tasks queued in five minutes changes your relationship to busy work.
- **Queue tasks from your phone.** Mobile task assignment lets you dispatch Cowork work remotely and collect it at your desk. ⚑
- **Schedule recurring tasks for weekly repeatable jobs.** Anything you'd do every Monday can become a standing Cowork task — within the app-open constraint. ⚑
- **Connectors give reach but truncate; export for real analysis.** A connector often pulls only the first few hundred rows — download the file into the folder instead.
- **Built-in Google connectors mostly read; writing needs other tools.** Drive/Gmail/Calendar connectors are largely read-only — a CLI or MCP does the writing. ⚑
- **Skills fire automatically or by slash command.** A markdown file teaching one specific thing — Claude applies it when relevant, or you type `/` to pick one. ([use skills](https://support.claude.com/en/articles/12512180-use-skills-in-claude))
- **Update skills by talking.** "Add this to my copywriting skill as a non-negotiable rule" mid-conversation — no settings round-trip.
- **Cowork sometimes hides files inside its VM.** Ask it to deliver outputs into your actual folder so you can see and keep them.
- **Cowork burns more tokens than chat; use chat for simple asks.** Reserve Cowork for genuinely multi-step work. ⚑
- **It can't reach arbitrary websites or clone repos.** Network egress from the VM is filtered — some fetch/POST/clone operations silently aren't available. ⚑

## 3. Claude Code

### Why and what
- **You don't need to learn how to code.** You speak to it in natural language and it does stuff — the name is the worst thing about it.
- **Use what the Anthropic engineers use.** They're automating themselves into creating God; Code is the tool they pour the most effort into, so ride their tailwind.
- **Code is the unfenced version: what you can do, it can do.** Your whole computer, every file, any program — restricted by default but infinitely extensible by you or anyone on the internet.
- **Expect the first day to be Linux, not Windows.** It's made for hackers: things need setting up once, and the first session includes friction Cowork hides — then it works *for you*.
- **Everything it makes is just a file on your computer.** No hidden VM, no platform lock-in — future-proof across subscription and employer changes.
- **Conversation history is local and deleted after 30 days by default.** Ask Claude to change that if you want to keep everything. ⚑

### Permissions and safety
- **Shift+Tab cycles the permission modes.** Default (asks), accept-edits (auto-applies file edits), plan (read-only) — learn the cycle before anything else. ⚑
- **Auto mode: a classifier approves routine, blocks risky.** After the tenth approval you're not reviewing anymore — let a watchdog model handle the clicking while you keep direction. ⚑ ([permission modes](https://code.claude.com/docs/en/permission-modes))
- **Allowlist the commands you always approve.** `/permissions` lets specific safe tools through forever, so prompts only interrupt for genuinely new territory.
- **Plan mode reads without touching.** Explore a question or codebase with zero risk of changes — the mode for "understand first."
- **git is save-points, not engineering.** Ask Claude to commit before and after work; undo-ability is what makes autonomous modes safe to run.
- **Checkpoints let you rewind anything Claude did.** Esc Esc / `/rewind` restores code, conversation, or both — so try the risky approach and roll back if it flops (not a git replacement). ([checkpointing](https://code.claude.com/docs/en/checkpointing))

### CLAUDE.md and the reuse arc
- **CLAUDE.md is what Claude reads before every session.** Standing context — commands, preferences, gotchas it can't infer — that you never have to repeat. ([memory](https://code.claude.com/docs/en/memory))
- **Keep CLAUDE.md short or Claude ignores it.** For each line ask "would removing this cause mistakes?" — bloated instruction files bury the rules that matter.
- **CLAUDE.md files nest: global, project, subfolder.** `~/.claude/` applies everywhere; each folder can add its own; child folders load on demand.
- **The reuse arc: files → CLAUDE.md → skills.** Save outputs as files, promote what repeats into standing instructions, package what others could use as skills — reuse becomes sharing.
- **Start big sessions with a ramble, end setup with two documents.** Alejo's pattern: ramble + "ask me lots of questions," 3–4 rounds, then have it draft CLAUDE.md (rarely-changing context) and DESIGN.md (the plan).

### Skills, subagents, hooks, extensions
- **A skill is a folder with a SKILL.md.** Drop it in `~/.claude/skills/` (or the project's `.claude/skills/`); Claude applies it when relevant or you invoke `/name`. ([skills](https://code.claude.com/docs/en/skills))
- **Skills load on demand; CLAUDE.md loads always.** Domain knowledge used sometimes belongs in a skill, so it doesn't tax every conversation.
- **Subagents research in a separate context and report back.** "Use subagents to investigate X" — they read the hundred files so your main conversation stays clean. ([subagents](https://code.claude.com/docs/en/sub-agents))
- **Hooks make things happen every time, guaranteed.** CLAUDE.md is advisory; a hook is deterministic — and Claude will write the hook for you ("write a hook that blocks deletes in this folder"). ([hooks](https://code.claude.com/docs/en/hooks-guide))
- **Plugins bundle skills, hooks, and tools in one install.** `/plugin` browses a marketplace of community and Anthropic packages. ⚑
- **Prefer CLI tools over connectors; Claude learns any CLI from --help.** `gh`, `gcloud`, or an obscure tool — "run `foo --help` to learn it, then use it" — CLIs are the most context-efficient reach into services.
- **MCP servers connect the tools without CLIs.** Notion, Figma, databases — `claude mcp add` when a CLI doesn't exist. ⚑

### Working in a session
- **@-reference files; paste images straight in.** `@budget.csv` pulls the file itself; screenshots and design images drag-and-drop into the prompt.
- **Explore, plan, then implement — in that order.** Plan mode for research, edit the plan directly, then execute; skip the ceremony when you could describe the change in one sentence. ([best practices](https://code.claude.com/docs/en/best-practices))
- **`/clear` between unrelated tasks.** The cheapest, highest-value context habit — reset instead of accumulating noise.
- **Compact with instructions when context runs long.** `/compact focus on the decisions we made` keeps what matters through summarization.
- **Ask codebase (or folder) questions like you'd ask a senior colleague.** "How does this work? Why is it this way?" — no special prompting; it's the best onboarding tool ever shipped.
- **Sessions persist; name and resume them.** `claude --continue` / `--resume` picks up a workstream with context intact — treat sessions like named branches of your attention.

### Scale and interfaces
- **Multiple sessions is the native way to go faster.** Parallel Claudes in separate folders/worktrees; a writer/reviewer pair beats one Claude grading its own work.
- **Superconductor is the interface built for running many sessions.** Notifications when agents finish, easy project switching, one screen for parallel work — the reason to start more things. ⚑ ([super.engineering](https://super.engineering/))
- **Claude Code runs in the cloud too; steer it from your phone.** Web sessions on Anthropic's infrastructure persist after you close the browser; the mobile app monitors and redirects them. ⚑ ([docs](https://code.claude.com/docs/en/claude-code-on-the-web))
- **The desktop app is Code with training wheels on the interface.** Visual sessions, folder pickers, auto-permission toggles — same engine, gentler cockpit, and the on-ramp Alejo uses in workshops. ⚑
- **Headless mode turns Claude into a building block.** `claude -p "prompt"` in a script loops over a thousand files or slots into any pipeline — automation without a session.
- **Recurring jobs: have Claude schedule itself.** Cron jobs / scheduled routines that prompt an agent, check results, repeat — Cherny runs dozens. ⚑

## 4. Claude Tag

- **Tag is Claude hired into your Slack as a teammate.** Type @Claude in a channel to delegate work; it plans, uses connected tools, and reports back in the thread. ⚑ ([announcement](https://www.anthropic.com/news/introducing-claude-tag))
- **Team/Enterprise beta only; runs on the best model.** Launched June 2026; individual plans excluded at launch; billing is organizational with token spend limits. ⚑
- **One shared Claude per channel — it's multiplayer.** Everyone sees what it's working on and anyone can pick up where the last person left off; no private silos.
- **It remembers the channel; skip the briefing.** Memory builds from channel history, so months of decisions are already context — long preambles in established channels waste everyone's time.
- **Memory is scoped: public channels share, DMs stay isolated.** Admins create separate Claude "identities" (sales vs. engineering) whose memories and permissions never cross. ⚑
- **Work in public channels so Claude learns.** Dedicated channels for one kind of work give it focus; the history becomes its training on your team.
- **One thread per task; new replies, never edits.** Each top-level message starts a task, and editing a message does nothing to work already in flight. ([Tag best practices](https://claude.com/resources/tutorials/best-practices-using-claude-tag))
- **Corrections stick.** Tell it what was wrong in the thread; preferences persist for future work in that channel.
- **Ambient mode makes it proactive — start reactive first.** Standing instructions ("flag urgent threads," "answer questions here") work without mentions; earn trust with tagged tasks before enabling.
- **Schedule recurring work in plain language.** "Post a digest every Monday at 9am" — and unlike Cowork, it runs without your laptop open.
- **It works over hours or days, unattended.** Set a task, go do something else; it can schedule its own future steps and pursue a project autonomously.
- **Give it something to own, then ask what it missed.** Move from one-off tasks to responsibilities ("keep questions answered here"), and periodically ask "what's been raised repeatedly that nobody answered?"
- **Ask "what can you access from this channel?"** Don't assume connections exist; verify tool access before blaming the model, and request additions from your admin.
- **Admins see everything: audit log, network calls, spend.** Every task, requester, and connection is logged in org settings — the governance that makes a shared agent deployable. ⚑

## 5. Cross-product

- **Same Claude, different fences.** Chat is one Claude on a short attention span; Cowork is many Claudes in a padded room; Code is all the Claudes on your actual computer; Tag is one Claude your whole team shares.
- **Match the product to the task, not to loyalty.** Quick question → chat; supervised folder job → Cowork; anything touching your real setup or needing custom tools → Code; team-visible recurring work → Tag.
- **Skills are the same idea everywhere; installation isn't.** In Code you point at a folder or have Claude clone a repo; in Cowork/Chat you upload a ZIP (the sandbox can't clone GitHub repos) or browse the built-in directory. ⚑
- **Standing instructions exist everywhere under different names.** Cowork's global/folder instructions, Code's CLAUDE.md hierarchy, Tag's channel memory and standing instructions — one habit, three spellings.
- **Memory lives in different places per product.** Chat memory in the account, Cowork in Projects, Code in files you control, Tag in channels — only Code's is plain files you own forever.
- **Connectors are rented hands; CLIs are your own.** Connectors are easy and limited (read-only, truncated); CLIs need one-time setup and then do everything — Cowork mostly rents, Code owns.
- **Scheduled tasks differ in who has to be awake.** Tag runs in the cloud unattended; Code can run cloud sessions or local cron; Cowork only runs while the app is open. ⚑
- **Parallelism has a product-shaped form each time.** Code: multiple sessions/worktrees; Cowork: dispatched parallel tasks and subagents; Tag: one task per thread across channels.
- **The permission question is identical everywhere.** Reversible actions get waved through, irreversible ones get read — only the UI for saying so changes.
- **Your files outlive every product.** Work that lands in folders you control survives product pivots, plan changes, and employer switches; work trapped in a chat log doesn't.
- **One paid subscription covers chat, Cowork, and Code.** Pro unlocks all three; Max raises the ceiling; Tag alone requires an org plan. ⚑ ([pricing](https://claude.com/pricing))

## 6. Setup & troubleshooting

- **Install Code with one command; no developer tools needed.** Mac: `curl -fsSL https://claude.ai/install.sh | bash`; Windows PowerShell one-liner; then run `claude` and sign in via browser. ⚑ ([quickstart](https://code.claude.com/docs/en/quickstart))
- **Cowork lives in the desktop app and needs a paid plan.** Download from claude.com/download; first run fetches a ~2 GB sandbox. ⚑
- **Windows Cowork needs virtualization switched on.** Enable "Virtual Machine Platform" in Windows features and restart — the single most common Windows blocker. ⚑
- **Hitting rate limits means buy the bigger plan.** More than once a day on limits → the $100/$200 tier; your productivity is worth more than Anthropic charges. ⚑
- **Set up dictation before anything else.** Wispr Flow (or the built-in mic) is the highest-leverage install in the whole stack — it changes what prompts you're willing to give.
- **Google Docs/Sheets: install a CLI, not just the connector.** `gdoc` for Docs/Sheets editing, `gog` for everything Google — your own hands instead of rented ones. ⚑ ([gdoc](https://github.com/LucaDeLeo/gdoc), [gogcli.sh](https://gogcli.sh/))
- **Google CLI setup: one OAuth dance, one famous gotcha.** You create your own Google Cloud project and Desktop credentials (~15 min); leave the consent screen in "Testing" and Google revokes your tokens every 7 days — set it to "In production." ⚑
- **Work Google accounts often need an admin's blessing.** Enterprise Workspace blocks unknown apps until IT allowlists them — know when the wall is your org, not you.
- **Expect stuck points; they're standard, not personal.** OAuth stalls, 2FA walls, "command not found," Mac folder-access dialogs, managed-laptop restrictions — every beginner hits two or three.
- **When stuck, screenshot the error and paste it to Claude.** The screenshot habit turns every inscrutable dialog into a question Claude can answer.
- **Ask Claude to fix its own setup problems.** "You couldn't connect — why? What are ways to fix it? Let's try and test them" — the tool debugs its own installation.
- **Connector fighting you? Download the file.** The universal workaround: export as CSV/text, drop it in the folder, move on with your day.
- **Set up passive protections once, then stop worrying.** Drive version snapshots, no-delete tool configs, Time Machine — zero-maintenance answers to each specific fear.
- **First delegation: inventory a messy folder.** Payoff in a minute, mistakes harmless; alternative starter: turn a meeting transcript into a summary doc.
- **Budget an hour or two for the full setup.** Dictation + Google CLIs + interface, if you're reasonably computer-savvy — after which you're in position to just ask Claude for stuff.
