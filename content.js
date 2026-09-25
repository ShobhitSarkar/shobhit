// All site content lives here. Everything marked SAMPLE is placeholder copy — swap it for the real thing.
// Item fields:
//   slug   – url id (#/<section>/<slug>)
//   title  – shown big on hover / as the post heading
//   line   – the one-liner shown on hover
//   meta   – small label (date, role, year…)
//   image  – optional image path; without one a generated pattern is drawn
//   logo   – (work only) transparent-background logo path; without one the name is set as a wordmark
//   kind   – (inspo only) "image" | "book"
//   body   – array of paragraphs; a string starting with "## " becomes a subheading
window.SITE = {
  name: "Shobhit Sarkar",
  email: "hello@example.com", // TODO: your real address
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
      slug: "company-one", title: "Company One", meta: "AI Engineer · 2024 — now", logo: "",
      line: "SAMPLE — building LLM-powered agents for internal tooling.",
      body: [
        "SAMPLE — Describe the team, what you owned and what changed because you were there.",
        "## Highlights",
        "Shipped an agent that turned a two-day workflow into a ten-minute one.",
        "Built the evaluation harness the team now uses before every model upgrade.",
      ],
    },
    {
      slug: "company-two", title: "Company Two", meta: "ML Engineer · 2022 — 2024", logo: "",
      line: "SAMPLE — retrieval, ranking and the pipelines under them.",
      body: ["SAMPLE — What you built, who used it, and one number you're proud of."],
    },
    {
      slug: "company-three", title: "Company Three", meta: "Software Engineer · 2021 — 2022", logo: "",
      line: "SAMPLE — backend services and a lot of on-call.",
      body: ["SAMPLE — Keep it short. Link out to anything public."],
    },
    {
      slug: "research-lab", title: "Research Lab", meta: "Research Assistant · 2020 — 2021", logo: "",
      line: "SAMPLE — NLP research, one paper, many GPU hours.",
      body: ["SAMPLE — The question, the approach, what you found."],
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
    { slug: "this-site", title: "This site", meta: "2026", line: "Big letters, small grids, a few somersaults.",
      body: ["Hand-sketched, then built with plain HTML, CSS and JS. No framework, no build step.", "## Why", "Because a portfolio should feel like a place, not a résumé."] },
    { slug: "project-two", title: "Project Two", meta: "2025", line: "SAMPLE — an agent that does one boring thing very well.", body: ["SAMPLE — what it is, why it exists, how it works, link to the repo."] },
    { slug: "project-three", title: "Project Three", meta: "2025", line: "SAMPLE — an eval harness for flaky prompts.", body: ["SAMPLE — replace me."] },
    { slug: "project-four", title: "Project Four", meta: "2024", line: "SAMPLE — a CLI you'll use once and love.", body: ["SAMPLE — replace me."] },
    { slug: "project-five", title: "Project Five", meta: "2024", line: "SAMPLE — a weekend hack that got out of hand.", body: ["SAMPLE — replace me."] },
    { slug: "project-six", title: "Project Six", meta: "2023", line: "SAMPLE — fine-tuning a tiny model on a tiny budget.", body: ["SAMPLE — replace me."] },
  ],
};
