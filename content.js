// All site content lives here. Everything marked SAMPLE is placeholder copy — swap it for the real thing.
// Item fields:
//   slug   – url id (#/<section>/<slug>)
//   title  – shown big on hover / as the post heading
//   line   – the one-liner shown on hover
//   meta   – small label (date, role, year…)
//   image  – optional image path; without one a generated pattern is drawn
//   logo   – (work only) logo file (SVG or transparent PNG). Only its shape is used, drawn in the screen's colour,
//            so any logo turns black or white to match. Without one the name is set as a wordmark.
//   kind   – (inspo only) "image" | "music" | "book". Images and music show their picture in black and white,
//            colour on hover, with the one-liner; books are set in type and open a synopsis page
//   body   – array of paragraphs; a string starting with "## " becomes a subheading, "- " a bullet point
//   roles  – (work only) one entry per role at that company, newest first: { title, dates, body }.
//            The tile shows the latest role; the company page tells them oldest first, as chapters of a story.
window.SITE = {
  name: "Shobhit Sarkar",
  email: "hi@shobhit.fyi",
  intro: "AI engineer. I build things that think a little, write about what I learn, and collect what inspires me.",
  timezone: "America/Chicago", // the landing-screen clock shows your time, ticking by the second
  links: [
    { label: "GitHub", href: "https://github.com/ShobhitSarkar" },
    { label: "LinkedIn", href: "#" }, // TODO
  ],

  sections: [
    { id: "work", title: "Work" },
    { id: "writes", title: "Writes" },
    { id: "inspo", title: "Inspo" },
    { id: "projects", title: "Projects" },
  ],

  // Work pages read as a story, not a résumé: `body` opens the page, then each role is a short chapter of prose.
  // Roles are listed newest first here (the tile shows the latest title) but the page tells them oldest first.
  work: [
    {
      slug: "john-deere", title: "John Deere", logo: "logos/john-deere.svg",
      line: "Agents and MCP Apps for John Deere's dealer network.",
      body: [
        "I walked into Deere as a student writing front-end code, and I'm still here, now building the AI that its dealerships talk to.",
      ],
      roles: [
        {
          title: "AI Software Engineer", dates: "Jun 2025 — now",
          body: [
            "After graduating I moved over to AI full time, building the agents John Deere's dealer network uses every day.",
            "The first lesson was that nobody waits around for a clever answer. Our agent handles about 1.6 million queries a year, so I went digging in the database logic underneath it and came out with responses 32% faster.",
            "Then MCP Apps arrived: a way for an agent to hand back real interface inside the chat instead of a wall of text. I built an MCP App server with AI-powered parts search, which now answers around 2.4K queries a week, and architected the rollout of MCP Apps across the org, so more than 30K queries a month now come back as something you can click on.",
            "I also built a virtual file system that lets agents search the way a person digs through folders, and lets dealerships share skills with each other. And because none of it matters if you can't see it working, I built the analytics pipeline that business and engineering both use to keep score.",
          ],
        },
        {
          title: "Student Software Engineer", dates: "Nov 2023 — May 2025",
          body: [
            "I started while still at Iowa State, on a web platform that a lot of teams shipped into at once. That was the problem: more than 40 micro-frontends on one release train meant nobody could ship until everybody could.",
            "I pulled them apart with Module Federation, and suddenly 10+ teams could release on their own schedule. The rest was the quieter work that makes a codebase pleasant to live in: bringing 30+ components in line with the Deere design system, and wiring Husky, better CI/CD and semantic versioning into 40+ repositories so a deploy did what you expected.",
            "Looking back, most of it came down to one idea: take away the reasons people have to wait on each other.",
          ],
        },
      ],
    },
    {
      slug: "collins-aerospace", title: "Collins Aerospace", logo: "logos/collins-aerospace.svg",
      line: "Sentiment models and AI tooling.",
      body: [
        "One summer, three very different problems, and my first real taste of AI work outside a classroom.",
      ],
      roles: [
        {
          title: "AI Interactions Intern", dates: "May — Aug 2023",
          body: [
            "The main project was teaching a model to read the mood of text. I trained and deployed a BERT-based sentiment model that reached a 91% F1 score and went on to feed into the company's enterprise LLM.",
            "Meanwhile, AI work was scattered across teams with no single place to find it, so I built the UI for a dashboard that pulled the company's AI initiatives and training together. Four teams ended up using it.",
            "And the fun one: an autonomous buggy prototype needed a way for a human to take back the wheel. I built its manual override system in PyGame, which is not a sentence I expected to write about aerospace.",
          ],
        },
      ],
    },
    {
      slug: "kingland-systems", title: "Kingland Systems", logo: "logos/kingland-systems.svg",
      line: "Research and data quality for banking and capital-markets clients.",
      body: [ // TODO: check this matches what you actually did
        "Before I wrote software for a living, I worked with data, the slow and careful kind.",
      ],
      roles: [
        {
          title: "Data Research Analyst Intern", dates: "Dec 2021 — Mar 2023",
          body: [
            "For more than a year, alongside my classes, I researched corporations and investment vehicles for large banking and capital-markets clients. The job was to work out who owned what and how it all connected, then turn that tangle into data people could trust.",
            "A lot of it was going back over records, new and old, and leaving each one a little more correct than I found it, all to the Operational Data Outsourcing team's quality and production standards. Towards the end I helped on projects to make that work more automated, more efficient and easier to teach.",
            "It's where I learned that good data is mostly patience, a lesson that turns out to matter a lot once you start feeding it to models.",
          ],
        },
      ],
    },
    {
      slug: "iowa-state-university", title: "Iowa State University", logo: "logos/iowa-state.svg",
      line: "Undergraduate research in computer vision and GPU computing.",
      body: [
        "Where I studied, a B.S. in Computer Science with a Data Science minor in 2025, and where I first tried my hand at research.",
      ],
      roles: [
        {
          title: "Undergraduate Research Assistant", dates: "Sep — Dec 2022",
          body: [
            "That autumn I switched to computer vision, teaching a YOLOv4 model to spot dents and cracks for production quality control.",
            "The model wasn't where the gains came from. Labelling images by hand and getting the train, test and validation split right is what pushed detection accuracy up 15%. Better data beat a cleverer model, and I've seen that play out again and again since.",
          ],
        },
        {
          title: "Undergraduate Research Assistant", dates: "Jan — May 2022",
          body: [
            "My first project asked a narrow question: for quantum systems with 8 to 12 bonding sites, which library does the matrix maths faster, PyTorch or QuTiP?",
            "I benchmarked both on CUDA. The answer was \"it depends\": QuTiP won on sparse matrices, PyTorch on dense ones. It's the most honest answer research ever gives you, and the first time I learned to trust the numbers over my hunch.",
          ],
        },
      ],
    },
  ],

  writes: [
    ["agents-are-just-loops", "Agents are just loops", "Mar 2026", "The unglamorous truth about building agents that work."],
    ["evals-first", "Write the evals first", "Feb 2026", "Why I stopped shipping prompts without a test suite."],
    ["small-models", "In defence of small models", "Jan 2026", "Latency is a feature. So is your cloud bill."],
    ["context-is-the-product", "Context is the product", "Dec 2025", "What goes in the window matters more than the model."],
    ["tool-design", "Tools for models, not humans", "Nov 2025", "Designing APIs an LLM can actually use."],
    ["on-reading", "How I read papers", "Oct 2025", "Abstract, figures, conclusion — then maybe the rest."],
    ["failure-modes", "A field guide to failure modes", "Sep 2025", "Every way my agents have broken, catalogued."],
    ["notes-to-self", "Notes to self, year one", "Aug 2025", "What I'd tell myself on day one of this job."],
    ["rag-is-search", "RAG is just search", "Jul 2025", "And search is hard. Plan accordingly."],
    ["latency-budget", "Spending a latency budget", "Jun 2025", "Where the milliseconds actually go."],
    ["prompt-hygiene", "Prompt hygiene", "May 2025", "Version them, diff them, review them like code."],
    ["first-post", "Hello, world", "Apr 2025", "The obligatory first post."],
  ].map(([slug, title, meta, line]) => ({
    slug, title, meta, line,
    body: [
      "SAMPLE POST — replace this with your writing.",
      line,
      "## The short version",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.",
      "Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper.",
    ],
  })),

  inspo: [
    { slug: "chicago-night", kind: "image", title: "Chicago at night", image: "inspo/chicago-night.jpg", line: "Chicago after dark, from way up." },
    {
      slug: "the-da-vinci-code", kind: "book", title: "The Da Vinci Code", meta: "Dan Brown", line: "Codes, cults and the Louvre after dark.",
      body: [
        "A murder in the Louvre sends symbologist Robert Langdon and cryptologist Sophie Neveu after a trail of clues hidden in Leonardo da Vinci's work, and a secret that a centuries-old society has been guarding.",
        "## Why it's here",
        "TODO — what stuck with you.",
      ],
    },
    { slug: "neverender-rampa-remix", kind: "music", title: "Neverender (Rampa Remix)", image: "inspo/neverender.jpg", line: "Neverender (Rampa Remix) — Justice & Tame Impala" },
    { slug: "yuhhhh", kind: "image", title: "yuhhhhhh", image: "inspo/yuhhhh.jpg", line: "cout << \"yuhhhhhh\" — the build finally worked." },
    {
      slug: "the-48-laws-of-power", kind: "book", title: "The 48 Laws of Power", meta: "Robert Greene", line: "Three thousand years of power, distilled.",
      body: [
        "Forty-eight rules for gaining, holding and defending power, each one argued through stories from history: courtiers, generals, con artists and statesmen.",
        "## Why it's here",
        "TODO — what stuck with you.",
      ],
    },
    { slug: "te-estoy-correteando", kind: "music", title: "Te Estoy Correteando", image: "inspo/te-estoy-correteando.jpg", line: "Te Estoy Correteando — LATIN MAFIA & Fred again.." },
    { slug: "painting", kind: "image", title: "Painting", image: "inspo/painting.jpg", line: "Red, orange and a lot of white splatter." },
    {
      slug: "the-psychology-of-money", kind: "book", title: "The Psychology of Money", meta: "Morgan Housel", line: "Behaviour beats spreadsheets.",
      body: [
        "Short stories about how people actually think about money, and why how you behave with it matters more than how much you know about it.",
        "## Why it's here",
        "TODO — what stuck with you.",
      ],
    },
    { slug: "juicy", kind: "music", title: "Juicy", image: "inspo/juicy.jpg", line: "Juicy — The Notorious B.I.G." },
    { slug: "street-pole", kind: "image", title: "Street pole", image: "inspo/street-pole.jpg", line: "Chained, stickered, still standing." },
    {
      slug: "digital-fortress", kind: "book", title: "Digital Fortress", meta: "Dan Brown", line: "An unbreakable code inside the NSA.",
      body: [
        "NSA cryptographer Susan Fletcher discovers a code that the agency's code-breaking supercomputer can't crack, and a race begins to stop it before it compromises the country's intelligence systems.",
        "## Why it's here",
        "TODO — what stuck with you.",
      ],
    },
  ],

  projects: [
    {
      slug: "iowa-state-semantic-library", title: "Iowa State Semantic Library", meta: "RAG app",
      line: "Ask questions across the CS department's research papers.",
      body: [
        "A retrieval-augmented generation (RAG) app over the Iowa State CS department's academic papers and research.",
        "## Built with",
        "OpenAI, Docker, Google Cloud Run, Qdrant, Next.js and Tailwind CSS.",
      ],
    },
    {
      slug: "paintbots", title: "Paintbots", meta: "C++",
      line: "A C++ game engine built on classic design patterns.",
      body: [
        "A game engine written in C++, built around the Singleton, Strategy, Observer and Factory patterns.",
        "## Built with",
        "C++, object-oriented design and smart pointers.",
      ],
    },
    {
      slug: "terraflow", title: "TerraFlow", meta: "C",
      line: "A watershed simulation over 1M+ LIDAR points.",
      body: [
        "A watershed simulation system written in C that processes more than a million LIDAR points.",
        "## Built with",
        "C, low-level programming and cellular automata modelling.",
      ],
    },
    {
      slug: "this-site", title: "This site", meta: "HTML · CSS · JS", line: "Big letters, small grids, a few somersaults.",
      body: ["Hand-sketched, then built with plain HTML, CSS and JS. No framework, no build step.", "## Why", "Because a portfolio should feel like a place, not a résumé."],
    },
  ],
};
