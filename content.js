// All site content lives here. Everything marked SAMPLE is placeholder copy — swap it for the real thing.
// Item fields:
//   slug   – url id (#/<section>/<slug>)
//   title  – shown big on hover / as the post heading
//   line   – the one-liner shown on hover
//   meta   – small label (date, role, year…)
//   image  – optional image path; without one a generated pattern is drawn
//   logo   – (work only) logo file (SVG or transparent PNG). Only its shape is used, drawn in the screen's colour,
//            so any logo turns black or white to match. Without one the name is set as a wordmark.
//   kind   – (inspo only) "image" | "book"
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
      line: "Sentiment models and AI tooling, summer 2023.",
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
    {
      slug: "kingland-systems", title: "Kingland Systems", logo: "logos/kingland-systems.svg",
      line: "TODO — one line on your work here.",
      roles: [{ title: "Role", dates: "Dates", body: ["TODO — the team, what you owned, what you shipped."] }], // TODO: not on the resume
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
    { slug: "geb", kind: "book", title: "Gödel, Escher, Bach", meta: "Douglas Hofstadter", line: "Strange loops, all the way down.",
      body: ["SAMPLE SYNOPSIS — why this book stuck with you, in a paragraph or three.", "## What I took from it", "Self-reference is where the interesting things happen."] },
    { slug: "tokyo-at-night", kind: "image", title: "Tokyo at night", line: "Every sign a small UI." },
    { slug: "design-of-everyday-things", kind: "book", title: "The Design of Everyday Things", meta: "Don Norman", line: "If it needs a label, it's a bad door.",
      body: ["SAMPLE SYNOPSIS — replace with your take."] },
    { slug: "swiss-posters", kind: "image", title: "Swiss posters", line: "Grids, but make it loud." },
    { slug: "brutalism", kind: "image", title: "Concrete", line: "Honest materials, no apologies." },
    { slug: "the-idea-factory", kind: "book", title: "The Idea Factory", meta: "Jon Gertner", line: "Bell Labs and the art of patient ambition.",
      body: ["SAMPLE SYNOPSIS — replace with your take."] },
    { slug: "type-specimens", kind: "image", title: "Type specimens", line: "The quick brown fox, forever." },
    { slug: "shape-of-the-sky", kind: "image", title: "Shape of the sky", line: "Blue at 6pm is a different blue." },
    { slug: "creative-act", kind: "book", title: "The Creative Act", meta: "Rick Rubin", line: "Pay attention. That's most of it.",
      body: ["SAMPLE SYNOPSIS — replace with your take."] },
    { slug: "old-computers", kind: "image", title: "Old computers", line: "Beige boxes that changed everything." },
    { slug: "sicp", kind: "book", title: "SICP", meta: "Abelson & Sussman", line: "Programs are for people to read.",
      body: ["SAMPLE SYNOPSIS — replace with your take."] },
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
