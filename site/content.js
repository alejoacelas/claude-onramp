// Placeholder course content, shaped like the BlueDot curriculum pages.
// Block types: video, p, heading, list, resources, exercises, optional
// Resources and exercises are "completable" — they count toward session progress.

const COURSE = {
  title: "Claude On-ramp",
  units: [
    {
      title: "Delegating Real Work",
      sessions: [
        {
          title: "Meeting your new coworker",
          minutes: 55,
          blocks: [
            { type: "video", label: "Welcome to the Claude On-ramp (placeholder video)" },
            { type: "p", text: "Placeholder intro paragraph. You've hired a brilliant coworker who works at 100x speed, never sleeps, and forgets everything between conversations. This course is about learning to delegate real work to them." },
            { type: "p", text: "Placeholder second paragraph. Throughout these lessons you'll do one real thing: build your own personal website. Each lesson walks through a narrative with examples drawn from that activity, and ends with your turn to act." },
            { type: "heading", text: "By the end of this course, you will be able to:" },
            { type: "list", items: [
              "describe a task so an agent can run with it unsupervised (placeholder),",
              "review finished work without redoing it yourself (placeholder),",
              "build feedback loops that make each delegation better than the last (placeholder),",
              "ship a personal website you delegated most of the work for (placeholder)."
            ]},
            { type: "resources", minutes: 55, items: [
              {
                favicon: "📄",
                title: "Placeholder Resource One",
                url: "#",
                desc: "One-sentence placeholder describing what this resource covers and why it's worth the reader's time before the session.",
                meta: "Author Name · 2025 · 30 min",
                listen: true
              },
              {
                favicon: "📘",
                title: "Placeholder Resource Two",
                subtitle: "Read chapter 1: The Placeholder Chapter",
                url: "#",
                desc: "Second placeholder blurb. A couple of sentences summarizing the argument of the piece and what to look for while reading it.",
                meta: "Another Author · 2016 · 25 min"
              }
            ]},
            { type: "optional", items: [
              {
                favicon: "🔗",
                title: "Optional Placeholder Resource",
                url: "#",
                desc: "Placeholder description for an optional deep-dive that curious readers can follow after the required material.",
                meta: "Optional Author · 2024 · 15 min"
              }
            ]},
            { type: "continue" }
          ]
        },
        {
          title: "What would you hand off?",
          minutes: 20,
          blocks: [
            { type: "heading", text: "Exercises", topLevel: true },
            { type: "exercises", items: [
              {
                title: "What work do you wish someone else did?",
                body: [
                  "Placeholder exercise framing. Think about your last work week. Some of it needed your judgment; a lot of it probably didn't.",
                  "List three tasks you'd hand to a capable assistant tomorrow if you trusted them. Then write down what stops you from handing them off today."
                ],
                note: "Placeholder note: your responses stay in this browser session — nothing is sent anywhere."
              },
              {
                title: "Describe one of those tasks out loud",
                body: [
                  "Placeholder second exercise. Take one task from your list and write the instructions you'd give. Notice where you reach for context only you have."
                ]
              }
            ]},
            { type: "continue" }
          ]
        },
        {
          title: "Steering without micromanaging",
          minutes: 45,
          blocks: [
            { type: "p", text: "Placeholder body text. The failure mode of delegation isn't bad work — it's work you have to babysit. This session covers how to set direction once and let the work come back finished." },
            { type: "p", text: "Second placeholder paragraph with enough length to show how prose sits on the page at reading width, wrapping across a few lines the way real lesson text will." },
            { type: "resources", minutes: 45, items: [
              {
                favicon: "📝",
                title: "Placeholder Resource Three",
                url: "#",
                desc: "Blurb placeholder. What the piece argues, in one or two sentences, and the question to hold while reading.",
                meta: "Someone · 2023 · 20 min",
                listen: true
              },
              {
                favicon: "🎧",
                title: "Placeholder Podcast Episode",
                url: "#",
                desc: "Podcast blurb placeholder. Why this conversation matters for the session's theme.",
                meta: "Host & Guest · 2024 · 25 min"
              }
            ]},
            { type: "continue" }
          ]
        },
        {
          title: "The characters",
          minutes: 10,
          blocks: [
            { type: "p", text: "Placeholder framing for a short session — a quick tour of the recurring characters and running examples used through the rest of the course." },
            { type: "resources", minutes: 10, items: [
              {
                favicon: "👥",
                title: "Placeholder Character Guide",
                url: "#",
                desc: "Short placeholder description of the cast of examples that recur through the lessons.",
                meta: "Course team · 10 min"
              }
            ]},
            { type: "continue" }
          ]
        }
      ]
    },
    {
      title: "Writing the Brief",
      sessions: [
        {
          title: "Placeholder session A",
          minutes: 40,
          blocks: [
            { type: "p", text: "Placeholder content for unit 2. Real lesson text lands here once drafted." },
            { type: "resources", minutes: 40, items: [
              { favicon: "📄", title: "Placeholder Resource", url: "#", desc: "Placeholder description.", meta: "Author · 20 min" }
            ]},
            { type: "continue" }
          ]
        },
        {
          title: "Placeholder session B",
          minutes: 25,
          blocks: [
            { type: "heading", text: "Exercises", topLevel: true },
            { type: "exercises", items: [
              { title: "Placeholder exercise", body: ["Placeholder exercise prompt for unit 2."] }
            ]},
            { type: "continue" }
          ]
        }
      ]
    },
    {
      title: "Reviewing Finished Work",
      sessions: [
        {
          title: "Placeholder session",
          minutes: 35,
          blocks: [
            { type: "p", text: "Placeholder content for unit 3." },
            { type: "continue" }
          ]
        }
      ]
    },
    {
      title: "Feedback Loops",
      sessions: [
        {
          title: "Placeholder session",
          minutes: 30,
          blocks: [
            { type: "p", text: "Placeholder content for unit 4." },
            { type: "continue" }
          ]
        }
      ]
    },
    {
      title: "Shipping Your Site",
      sessions: [
        {
          title: "Placeholder session",
          minutes: 50,
          blocks: [
            { type: "p", text: "Placeholder content for unit 5." },
            { type: "continue" }
          ]
        }
      ]
    }
  ]
};
