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
    {
      slug: "first-year-reflections", title: "Reflections: First Year in Industry", meta: "Apr 2026",
      line: "Learnings and observations from my first year of working full time.",
      body: [
        "This past weekend, scrolling social media (as one does), I saw a couple of graduation pictures pop up. It didn't mean much to me in the beginning but it made me realize - I'm coming up on my first year in industry.",
        "This past year has been an incredible one, filled with growth and challenges alike. Regardless of the stage of career you're in, I hope that you walk away either learning, understanding or reminiscing these.",
        "## The Abundance of Monotony and Existential Dread",
        "Growing up, as far back as I can remember, career talk was all about getting into a good college followed by a well paid job. Once I got to college, even though it was a completely new experience, there was a mental model of what college looked like and that it would last for a fixed amount of time.",
        "Once college was done, there was an endless abyss I was staring into - the next 40 years of my career, which, from the outside looked like the same thing over and over again. You woke up, you did \"work\", gym, dinner and prepped for work the next day. In the most meta, abstract view, that's what your days might look like - they seem the same, but I've come to realize that they're not.",
        "The onus is on you to not only catch your defects but also see, understand and appreciate your growth. Up until now, my neural pathways have been wired to look at multiple external stimuli to tell me if I'm doing well - test scores, practice exams, professor feedback, etc. But a lot of that disappears. For example, if you behave like a fool, chances are nobody is going to tell you. Performance reviews are only once a year - and for a lot of managers it's just another box in their never-ending to-do list.",
        "TLDR: Every day might look the same, but it's not. You have to see things differently - you have to be your own best critic, judge and fan.",
        "## Sidequests",
        "Sidequests are your only rebuttal to the abundance of monotony and existential dread. Some people might have a different experience but I'm actually able to log off of work. There is a clear line between when I am working vs. not. Compare this to college / high school, you'd work on something for a couple of hours, go hang out with friends, do homework and maybe have dinner with the family.",
        "Unknowingly, those \"sidequests\" were in fact important. Hanging out with your friends, going on a walk and all of those things changed your mental pace and way of thinking. A lot of the time, it gave you a moment in time you could look back on. Being locked in all the time makes you a miserable person.",
        "Don't get me wrong, there are going to be times when work is all you're doing, especially if you're ambitious and high agency. Longevity is key here. Similar to Warren Buffett's investing strategy - you have to stay in the game for it to turn out well.",
        "TLDR: Do more, but do different things. Live your life in seasons - sometimes you work harder, sometimes you play harder. But keep both.",
        "## There is no end to work",
        "Another part of my brain that I'm rewiring now is that there is no \"end\" or finish line to your career. There is always an endless sea of work that awaits. There's no final exam, no semesters, none of that. You're never going to be able to finish work in totality.",
        "What that translates to is that - your only possible moat is the quality of work that you do. Doing excellent work is more important than just getting work done. And that's possibly the only moat that you have. The endless sea of work that you see is not set in stone either - things happen, stuff changes and then you've got a brand new to-do list.",
        "TLDR: Quality is the moat. Shit never ends.",
        "## The bar is low",
        "It's very easy to see people around you and put them on a pedestal - somebody is printing money making consumer apps, somebody's company just got funded, somebody landed a big tech job. But the bar is low.",
        "All it takes is being on time, showing up a little early, staying a little later, talking to people (nicely) and ability + willingness to learn. That's the only common denominator in people that are the best in what they do.",
        "TLDR: Get the basics down. Do them well.",
        "## People are your only resource and liability",
        "You can have the most fantastic product - that didn't come to be by itself. A lot of people thought about things, discussed, debated, fought and built the thing you see today. The final product is the melting pot of thoughts and ideas from different people - that's beautiful.",
        "Technical problems are rarely technical problems - there's always a human element involved and that's the more challenging part. Apart from certain groups in the world, tech rarely is the barrier. People, their strengths, weaknesses, insecurities and thoughts are what's going to influence how much you're able to push the needle.",
        "TLDR: People are key.",
        "## Restless to get stuff done in the short term. Nothing happens for a while",
        "There's a lot of talk today about immediate gratification. That's true. Up until this point, I've seen clear results, some sort of artifact from the work I've done. That doesn't happen anymore. Improvements are measured over months and years.",
        "There's a certain duality to balance - you have to be incessantly driven to get things done and move forward in the short term. Even after doing all that work, stuff might not change. You have to be okay with that and remind yourself that things happen and are measured over months and years now.",
        "TLDR: Relentless execution in the short term. Be comfortable with the fact that things don't change on the scale you expect for months, even years.",
        "## In office on Fridays. Always.",
        "You'll see your director and VP strolling along the office. Nobody is rushing to get anything done, people are talking about their lives. Guards are down - people aren't holding things to their chest anymore and information is gold.",
        "TLDR: Fridays in office.",
      ],
    },
  ],

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
