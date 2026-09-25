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
//            The tile shows the latest role; the company page lists them all as a timeline.
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

  work: [
    {
      slug: "john-deere", title: "John Deere", logo: "logos/john-deere.svg",
      line: "Agents and MCP Apps for John Deere's dealer network.",
      roles: [
        {
          title: "AI Software Engineer", dates: "Jun 2025 — now",
          body: [
            "- Architected the org-wide rollout of MCP Apps, bringing in-chat UI to 30K+ queries a month",
            "- Cut agent response latency by 32% across 1.6M queries a year by optimising database logic",
            "- Engineered a virtual file system that enables agentic search and skill sharing for dealerships",
            "- Built an MCP App server with AI-powered parts search, handling 2.4K queries a week",
            "- Built an analytics pipeline so business and engineering stakeholders can track KPIs",
          ],
        },
        {
          title: "Student Software Engineer", dates: "Nov 2023 — May 2025",
          body: [
            "- Enabled async releases for 10+ teams with Module Federation, decoupling 40+ micro-frontends",
            "- Modernised 30+ UI components to match the Deere design system, improving UX and DX",
            "- Automated 40+ repositories with Husky, CI/CD improvements and versioning for semantic deploys",
          ],
        },
      ],
    },
    {
      slug: "collins-aerospace", title: "Collins Aerospace", logo: "logos/collins-aerospace.svg",
      line: "Sentiment models and AI tooling.",
      roles: [
        {
          title: "AI Interactions Intern", dates: "May — Aug 2023",
          body: [
            "- Deployed a BERT-based sentiment analysis model with a 91% F1 score, contributing to an enterprise LLM",
            "- Architected a PyGame-based manual override system for an autonomous buggy prototype",
            "- Built the UI for an AI resources dashboard used by 4 teams, centralising company-wide AI initiatives and training",
          ],
        },
      ],
    },
    {
      slug: "kingland-systems", title: "Kingland Systems", logo: "logos/kingland-systems.svg",
      line: "Research and data quality for banking and capital-markets clients.",
      roles: [
        {
          title: "Data Research Analyst Intern", dates: "Dec 2021 — Mar 2023",
          body: [ // TODO: check this matches what you actually did
            "- Researched corporations and investment vehicles for large banking and capital-markets clients, identifying how they relate and turning that into validated data",
            "- Cleaned up new and existing records to keep improving data quality over time",
            "- Worked to the Operational Data Outsourcing team's data-quality and production standards",
            "- Helped on projects to improve automation, efficiency and training",
          ],
        },
      ],
    },
    {
      slug: "iowa-state-university", title: "Iowa State University", logo: "logos/iowa-state.svg",
      line: "Undergraduate research in computer vision and GPU computing.",
      body: ["Where I studied: B.S. in Computer Science with a Data Science minor, 2025."],
      roles: [
        {
          title: "Undergraduate Research Assistant", dates: "Sep — Dec 2022",
          body: [
            "- Improved YOLOv4 defect-detection accuracy by 15% by labelling images and optimising the train/test/validation split",
            "- Trained the model to detect dents and cracks, improving production quality control",
          ],
        },
        {
          title: "Undergraduate Research Assistant", dates: "Jan — May 2022",
          body: [
            "- Evaluated PyTorch and QuTiP efficiency for matrix operations in 8–12 bonding-site systems",
            "- Benchmarked CUDA performance, showing QuTiP's strength on sparse matrices and PyTorch's on dense ones",
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
