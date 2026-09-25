(() => {
  "use strict";

  const S = window.SITE;
  const SECTIONS = S.sections;
  const PREVIEW_COUNT = 9;
  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const items = (id) => S[id] || [];
  const sectionById = (id) => SECTIONS.find((s) => s.id === id);
  // Screens alternate black / white: the landing screen is black, so the first section is white.
  const isInverse = (id) => SECTIONS.findIndex((s) => s.id === id) % 2 === 0;

  // ---------- Small render helpers ----------

  // Big display word split into letters so each can rise in, boing or somersault on hover.
  // A "\n" stacks the text onto separate lines.
  const letters = (text) => {
    let i = 0;
    return text.toUpperCase().split("\n").map((line) =>
      `<span class="clip">${[...line].map((c) => (c === " " ? " " : `<span class="ch" style="--i:${i++}">${esc(c)}</span>`)).join("")}</span>`
    ).join("<br>");
  };

  const fitTitle = (text, cls = "", max = "", tag = "h2") =>
    `<${tag} class="display fit ${cls}" ${max ? `data-max="${max}"` : ""} aria-label="${esc(text.replace(/\n/g, " "))}"><span class="fit__inner" aria-hidden="true">${letters(text)}</span></${tag}>`;

  const place = (l) =>
    `<div class="stack"><b>${esc(l.label)}</b><span>${esc(l.city)}</span><span class="clock" data-tz="${esc(l.timezone)}">--:--</span></div>`;

  const emailLink = (label = "Email", cls = "u-link label") =>
    `<a class="${cls} js-email" href="mailto:${esc(S.email)}" data-cursor="SAY HI">${esc(label)}</a>`;

  // Deterministic little black & white compositions for tiles without images.
  function art(seed) {
    let h = 2166136261;
    for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    const rnd = () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
    const k = Math.floor(rnd() * 5);
    const W = "currentColor";
    let g = "";
    if (k === 0) {
      const n = 3 + Math.floor(rnd() * 5);
      for (let i = 0; i < n; i++) g += `<circle cx="50" cy="50" r="${46 - i * (40 / n)}" fill="none" stroke="${W}" stroke-width="1.5"/>`;
      g += `<circle cx="${30 + rnd() * 40}" cy="${30 + rnd() * 40}" r="${4 + rnd() * 6}" fill="${W}"/>`;
    } else if (k === 1) {
      const n = 6 + Math.floor(rnd() * 10);
      for (let i = 0; i < n; i++) g += `<rect x="0" y="${(i * 100) / n}" width="100" height="${(50 / n) * (0.3 + rnd())}" fill="${W}"/>`;
    } else if (k === 2) {
      g += `<rect x="${rnd() * 30}" y="${rnd() * 30}" width="${40 + rnd() * 30}" height="${40 + rnd() * 30}" fill="${W}"/>`;
      g += `<circle cx="${40 + rnd() * 40}" cy="${40 + rnd() * 40}" r="${14 + rnd() * 14}" style="fill: var(--bg)" stroke="${W}" stroke-width="1.5"/>`;
    } else if (k === 3) {
      for (let x = 0; x < 5; x++) for (let y = 0; y < 5; y++) {
        const r = rnd() * 8;
        g += `<circle cx="${10 + x * 20}" cy="${10 + y * 20}" r="${r}" fill="${W}"/>`;
      }
    } else {
      const a = rnd() * 60 + 10;
      g += `<path d="M0 100 L${a} ${20 + rnd() * 30} L${a + 20 + rnd() * 20} ${50 + rnd() * 20} L100 ${10 + rnd() * 30} L100 100 Z" fill="${W}"/>`;
      g += `<circle cx="${20 + rnd() * 60}" cy="${12 + rnd() * 16}" r="7" fill="none" stroke="${W}" stroke-width="1.5"/>`;
    }
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${g}</svg>`;
  }

  function tileFace(section, item, i) {
    if (section === "work") {
      return item.logo
        ? `<img src="${esc(item.logo)}" alt="" loading="lazy">`
        : `<span class="tile__wordmark">${esc(item.title)}</span>`;
    }
    if (section === "inspo" && item.kind === "book") {
      return `<span class="tile__book"><span>${esc(item.title)}</span><span class="muted">${esc(item.meta || "")}</span></span>`;
    }
    if (item.image) return `<img src="${esc(item.image)}" alt="" loading="lazy">`;
    if (section === "blog") return `<span class="tile__n">${pad(i + 1)}</span><span class="tile__peek">${esc(item.title)}</span>`;
    return art(item.slug);
  }

  function tileHover(section, item) {
    if (section === "inspo" && item.kind !== "book") {
      return `<span class="tile__hover"><span class="tile__line">${esc(item.line)}</span></span>`;
    }
    const synopsis = section === "inspo" ? `<button class="btn js-synopsis" data-slug="${esc(item.slug)}" data-cursor="READ">Synopsis</button>` : "";
    return `<span class="tile__hover">
        ${item.meta ? `<span class="tile__meta">${esc(item.meta)}</span>` : ""}
        <span class="tile__title">${esc(item.title)}</span>
        ${section === "inspo" ? "" : `<span class="tile__line">${esc(item.line)}</span>`}
        ${synopsis}
      </span>`;
  }

  function tile(section, item, i, expanded) {
    const kind = section === "inspo" ? (item.kind === "book" ? "book" : "image") : section === "projects" ? "project" : section;
    // Pictures don't open anywhere; everything else opens a post-style page.
    const opens = !(section === "inspo" && item.kind !== "book");
    return `<div class="tile tile--${kind}" role="button" tabindex="0" style="--i:${i}"
        data-section="${section}" data-slug="${esc(item.slug)}" data-opens="${opens}" data-cursor=""
        aria-label="${esc(item.title)}${item.line ? " — " + esc(item.line) : ""}">
        <span class="tile__face">${tileFace(section, item, i)}</span>
        ${tileHover(section, item)}
      </div>`;
  }

  // ---------- Home (the scroll) ----------

  function renderHome() {
    const initials = S.name.split(/\s+/).map((w) => w[0]).join("").toUpperCase();
    const index = SECTIONS.map((s, i) => `<li><a href="#" class="js-jump" data-to="s-${s.id}"><span>${pad(i + 1)}</span>${esc(s.title)}</a></li>`).join("");
    const hero = `
      <section class="screen sec hero" id="s-home">
        <div class="sec__titlewrap">${fitTitle(S.name.replace(" ", "\n"), "", "", "h1")}</div>
        <div class="hero__side">
          <p class="hero__intro">${esc(S.intro)}</p>
          <div class="hero__rule"></div>
          <div class="hero__cols label">
            <ul class="hero__index">${index}</ul>
            <div class="stack"><b>Say hi</b>${emailLink(S.email, "u-link")}<button class="u-link js-agent-open" style="justify-self:start" data-cursor="CHAT">Talk to my agent</button></div>
            ${S.locations.map(place).join("")}
          </div>
        </div>
        <button class="cue js-jump" data-to="s-${SECTIONS[0].id}" data-cursor="GO">${esc(SECTIONS[0].title)} <span class="cue__arrow">↓</span></button>
      </section>`;

    const secs = SECTIONS.map((s, i) => {
      const list = items(s.id);
      const next = SECTIONS[i + 1];
      return `
        <section class="screen sec${isInverse(s.id) ? " is-inverse" : ""}" id="s-${s.id}">
          <div class="sec__num label">${pad(i + 1)} / ${pad(SECTIONS.length)}</div>
          <div class="sec__titlewrap">
            ${fitTitle(s.title, "", "34vh")}
          </div>
          <div class="sec__grid">
            <div class="grid">${list.slice(0, PREVIEW_COUNT).map((it, j) => tile(s.id, it, j, false)).join("")}</div>
          </div>
          <button class="cue js-jump" data-to="${next ? "s-" + next.id : "s-contact"}" data-cursor="GO">
            ${esc(next ? next.title : "Say hi")} <span class="cue__arrow">↓</span>
          </button>
        </section>`;
    }).join("");

    const footer = `
      <footer class="screen footer${SECTIONS.length % 2 ? "" : " is-inverse"}" id="s-contact">
        <div class="footer__cols label">
          ${S.locations.map(place).join("")}
          <div class="footer__links"><b>Quick links</b>${SECTIONS.map((s) => `<a href="#" class="u-link js-jump" data-to="s-${s.id}">${esc(s.title)}</a>`).join("")}</div>
          <div class="footer__links"><b>Elsewhere</b>${S.links.map((l) => `<a class="u-link" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}${emailLink("Email", "u-link")}</div>
        </div>
        <div class="footer__bottom label muted">
          <span>© ${new Date().getFullYear()} ${esc(S.name)}</span>
          <span>Drawn by hand, built by hand.</span>
          <a href="#" class="u-link js-jump" data-to="s-home">Back to top ↑</a>
        </div>
      </footer>`;

    $("#app").innerHTML = `
      <header class="nav label">
        <a href="#" class="nav__name js-jump" data-to="s-home" aria-label="${esc(S.name)}, back to top">${esc(initials)}</a>
        <nav class="nav__right">
          <button class="u-link js-agent-open" data-cursor="CHAT">Talk to my agent</button>
          ${emailLink("Email")}
        </nav>
      </header>
      <main>${hero}${secs}${footer}</main>
      <div class="overlay" id="overlay" hidden></div>
      <button class="agent-fab js-agent-toggle" data-cursor="CHAT"><span class="dot"></span>Talk to my agent</button>
      <aside class="agent" id="agent" hidden aria-label="Chat with Shobhit's agent">
        <div class="agent__head"><b>Shobhit's agent</b><span class="agent__status label"><span class="dot"></span>online-ish</span><button class="label u-link js-agent-toggle">Close</button></div>
        <div class="agent__log" id="agent-log" aria-live="polite"></div>
        <div class="agent__chips" id="agent-chips"></div>
        <form class="agent__form" id="agent-form"><input id="agent-input" autocomplete="off" placeholder="Ask me anything…" aria-label="Message"><button>Send</button></form>
      </aside>
      <div class="toast" id="toast" role="status"></div>
      <div class="cursor" id="cursor"><span></span></div>`;
  }

  // ---------- Overlay routes: #/section (expanded grid) and #/section/slug (post) ----------

  const overlay = () => $("#overlay");

  // Just the grid, centred. Clicking the empty space around it (or Esc) closes it.
  function renderGrid(sectionId) {
    const list = items(sectionId);
    const cols = list.length <= 4 ? list.length : list.length <= 9 ? 3 : 4;
    const rows = Math.ceil(list.length / cols);
    return `
      <div class="ov__grid js-backdrop" data-cursor="CLOSE" aria-label="${esc(sectionById(sectionId).title)}">
        <div class="grid grid--full" style="--cols:${cols}; --rows:${rows}">${list.map((it, j) => tile(sectionId, it, j, true)).join("")}</div>
      </div>`;
  }

  function renderPost(sectionId, slug) {
    const s = sectionById(sectionId);
    const list = items(sectionId).filter((it) => sectionId !== "inspo" || it.kind === "book");
    const idx = list.findIndex((it) => it.slug === slug);
    if (idx < 0) return null;
    const it = list[idx];
    const prev = list[idx - 1];
    const next = list[idx + 1];
    const body = (it.body || [])
      .map((p, j) => (p.startsWith("## ") ? `<h3>${esc(p.slice(3))}</h3>` : `<p${j === 0 ? ' class="post__lede"' : ""}>${esc(p)}</p>`))
      .join("");
    const meta = [s.title, it.meta, sectionId === "inspo" ? "Synopsis" : ""].filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join("");
    return `
      <div class="ov__bar label">
        <a href="#/${sectionId}" class="u-link js-route" data-cursor="BACK">← All ${esc(s.title)}</a>
        <a href="#" class="u-link js-close" data-cursor="BYE">Close ✕</a>
      </div>
      <article class="post">
        <h1 class="display post__heading">${esc(it.title)}</h1>
        <div>
          <div class="post__meta label muted">${meta}</div>
          <div class="post__body">${body}</div>
          <div class="post__cta"><b>Thoughts? Disagree?</b>${emailLink("Email me →", "btn js-email")}</div>
          <nav class="post__nav label">
            ${prev ? `<a class="u-link js-route" href="#/${sectionId}/${esc(prev.slug)}">← ${esc(prev.title)}</a>` : "<span></span>"}
            ${next ? `<a class="u-link js-route" href="#/${sectionId}/${esc(next.slug)}">${esc(next.title)} →</a>` : "<span></span>"}
          </nav>
        </div>
      </article>`;
  }

  // The route lives in memory too, so the site still works where history is unavailable (sandboxed previews).
  let current = location.hash;

  function parseRoute() {
    const [section, slug] = current.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    return sectionById(section) ? { section, slug } : null;
  }

  let lastSection = null;

  function route() {
    const r = parseRoute();
    const ov = overlay();
    if (!r) {
      if (!ov.hidden) {
        ov.classList.remove("is-open");
        document.body.classList.remove("is-locked");
        setTimeout(() => { if (!parseRoute()) { ov.hidden = true; ov.innerHTML = ""; } }, reducedMotion ? 0 : 650);
        if (lastSection) document.getElementById("s-" + lastSection)?.scrollIntoView({ behavior: "instant" });
      }
      return;
    }
    lastSection = r.section;
    const html = r.slug ? renderPost(r.section, r.slug) : renderGrid(r.section);
    if (html == null) return navigate("#/" + r.section, true);
    ov.innerHTML = html;
    ov.classList.toggle("is-inverse", isInverse(r.section));
    ov.scrollTop = 0;
    const wasHidden = ov.hidden;
    ov.hidden = false;
    document.body.classList.add("is-locked");
    requestAnimationFrame(() => requestAnimationFrame(() => ov.classList.add("is-open")));
    fitAll(ov);
    setTimeout(() => $$(".fit", ov).forEach((el) => el.classList.add("is-in")), wasHidden ? 250 : 30);
    document.title = `${r.slug ? $(".post__heading", ov).textContent + " — " : ""}${sectionById(r.section).title} — ${S.name}`;
  }

  function navigate(hash, replace = false) {
    current = hash;
    try { history[replace ? "replaceState" : "pushState"](null, "", hash || location.pathname + location.search); } catch { /* in-memory only */ }
    if (!hash) document.title = S.name;
    route();
  }

  function closeOverlay() {
    const r = parseRoute();
    if (!r) return;
    navigate(r.slug && r.section !== "inspo" ? "#/" + r.section : "");
  }

  // ---------- Fit big type to its container ----------

  function fit(el) {
    const inner = $(".fit__inner", el);
    if (!inner) return;
    el.style.fontSize = "100px";
    const w = inner.getBoundingClientRect().width;
    const avail = el.clientWidth;
    if (!w || !avail) return;
    let size = (100 * avail) / w;
    const max = el.dataset.max;
    if (max) size = Math.min(size, max.endsWith("vh") ? (parseFloat(max) * innerHeight) / 100 : parseFloat(max));
    el.style.fontSize = size.toFixed(2) + "px";
  }
  const fitAll = (root = document) => $$(".fit", root).forEach(fit);

  // ---------- Behaviours ----------

  function observeScreens() {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        if (!e.target.classList.contains("is-in")) {
          e.target.classList.add("is-in");
          // Once the letters have risen in, let them leave their clip box so they can jump around.
          setTimeout(() => e.target.classList.add("is-settled"), reducedMotion ? 0 : 1500);
        }
        // The hero already shows the full name, so the nav's initials only appear on the other screens.
        document.body.classList.toggle("at-home", e.target.id === "s-home");
      }
    }, { threshold: 0.45 });
    $$(".screen").forEach((s) => io.observe(s));
  }

  let toastTimer;
  function toast(html) {
    const t = $("#toast");
    t.innerHTML = html;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 3800);
  }

  const EMAIL_QUIPS = ["Copied. Go on, say hi.", "Copied! My inbox is friendly.", "Copied. I reply faster than my agent.", "In your clipboard. No pressure. (Some pressure.)"];
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(S.email);
      toast(`<span>${EMAIL_QUIPS[Math.floor(Math.random() * EMAIL_QUIPS.length)]}</span><a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`);
    } catch {
      toast(`<span>Here it is:</span><a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`);
    }
  }

  function openTile(t) {
    const { section, slug } = t.dataset;
    if (!t.closest(".grid--full")) return navigate("#/" + section); // compact grid → expanded grid
    if (t.dataset.opens === "true") navigate(`#/${section}/${slug}`); // expanded → post
  }

  function bindEvents() {
    document.addEventListener("click", (e) => {
      const t = e.target;
      const synopsis = t.closest(".js-synopsis");
      if (synopsis) { e.preventDefault(); e.stopPropagation(); return navigate(`#/inspo/${synopsis.dataset.slug}`); }
      const email = t.closest(".js-email");
      if (email) { e.preventDefault(); return copyEmail(); }
      const jump = t.closest(".js-jump");
      if (jump) { e.preventDefault(); return document.getElementById(jump.dataset.to)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }); }
      const r = t.closest(".js-route");
      if (r) { e.preventDefault(); return navigate(r.getAttribute("href")); }
      if (t.closest(".js-close") || t.classList.contains("js-backdrop")) { e.preventDefault(); return closeOverlay(); }
      if (t.closest(".js-agent-open")) return toggleAgent(true);
      if (t.closest(".js-agent-toggle")) return toggleAgent();
      const tl = t.closest(".tile");
      if (tl) return openTile(tl);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!$("#agent").hidden) return toggleAgent(false);
        return closeOverlay();
      }
      const tl = e.target.closest?.(".tile");
      if (tl && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openTile(tl); }
    });

    // Letters boing when you touch them, and now and then one does a somersault. Clicking one always flips it.
    const play = (ch, move) => {
      if (ch.classList.contains("boing") || ch.classList.contains("flip")) return;
      ch.classList.add(move);
      ch.addEventListener("animationend", () => ch.classList.remove(move), { once: true });
    };
    document.addEventListener("pointerover", (e) => {
      const ch = e.target.closest?.(".ch");
      if (ch) play(ch, Math.random() < 0.3 ? "flip" : "boing");
    });
    document.addEventListener("pointerdown", (e) => {
      const ch = e.target.closest?.(".ch");
      if (ch) play(ch, "flip");
    });

    addEventListener("popstate", () => { current = location.hash; route(); });
    addEventListener("resize", () => fitAll());
  }

  // Tiles lean toward the pointer, the cursor grows a label over interactive things.
  function bindPointer() {
    if (!finePointer) return;
    document.addEventListener("pointermove", (e) => {
      const t = e.target.closest?.(".tile");
      if (!t) return;
      const r = t.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      t.style.setProperty("--ry", (x * 14).toFixed(2) + "deg");
      t.style.setProperty("--rx", (-y * 14).toFixed(2) + "deg");
    });
    document.addEventListener("pointerout", (e) => {
      const t = e.target.closest?.(".tile");
      if (t && !t.contains(e.relatedTarget)) { t.style.removeProperty("--rx"); t.style.removeProperty("--ry"); }
    });

    if (reducedMotion) return;
    const c = $("#cursor");
    const label = $("span", c);
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("pointermove", (e) => {
      x = e.clientX; y = e.clientY;
      const l = e.target.closest?.("[data-cursor]")?.dataset.cursor;
      c.classList.toggle("has-label", !!l);
      if (l) label.textContent = l;
    });
    (function loop() {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      c.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    })();
  }

  function startClocks() {
    const tick = () => $$(".clock").forEach((el) => {
      const opts = { weekday: "short", hour: "2-digit", minute: "2-digit" };
      try { el.textContent = new Date().toLocaleString("en-GB", el.dataset.tz ? { ...opts, timeZone: el.dataset.tz } : opts); } catch { el.textContent = ""; }
    });
    tick();
    setInterval(tick, 15000);
  }

  // ---------- Talk to my agent ----------

  const history_ = [];

  function toggleAgent(force) {
    const a = $("#agent");
    const open = force ?? a.hidden;
    a.hidden = !open;
    if (open) {
      if (!history_.length) greet();
      setTimeout(() => $("#agent-input").focus(), 200);
    }
  }

  function addMsg(role, html) {
    const log = $("#agent-log");
    const m = document.createElement("div");
    m.className = "msg " + (role === "user" ? "msg--me" : "msg--bot");
    m.innerHTML = html;
    log.appendChild(m);
    log.scrollTop = log.scrollHeight;
    return m;
  }

  function setChips(list) {
    $("#agent-chips").innerHTML = list.map((q) => `<button class="chip" type="button">${esc(q)}</button>`).join("");
  }

  function greet() {
    const hi = `Hi, I'm Shobhit's agent. Shobhit is an ${S.role}, so obviously there's an agent. Ask me about work, projects, writing, or how to get in touch.`;
    history_.push({ role: "assistant", content: hi });
    addMsg("assistant", esc(hi));
    setChips(["What do you work on?", "Show me projects", "What are you reading?", "How do I reach you?"]);
  }

  const listOf = (id, n = 3) => items(id).slice(0, n).map((it) => `• <a href="#/${id}/${esc(it.slug)}" class="js-route">${esc(it.title)}</a>`).join("\n");

  // A deliberately small, honest agent. Swap in a real one via SITE.agent.endpoint.
  const RULES = [
    [/\b(hi|hey|hello|yo|sup|hiya)\b/i, () => "Hey! What would you like to know?"],
    [/(email|contact|reach|hire|talk|call|meet|coffee)/i, () => `Fastest route is email: <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>. Shobhit reads everything and replies to most things.`],
    [/(work|job|experience|company|career|resume|cv)/i, () => `Recent work:\n${items("work").slice(0, 3).map((w) => `• ${esc(w.title)}: ${esc(w.meta || "")}`).join("\n")}\n\n<a href="#/work" class="js-route">See all work →</a>`],
    [/(project|built|build|side|github|code)/i, () => `A few things Shobhit built:\n${listOf("projects")}\n\n<a href="#/projects" class="js-route">All projects →</a>`],
    [/(blog|write|writing|post|article|essay)/i, () => `Latest writing:\n${listOf("blog")}`],
    [/(read|book|inspo|inspir|favou?rite)/i, () => `On the shelf:\n${items("inspo").filter((i) => i.kind === "book").slice(0, 3).map((b) => `• <a href="#/inspo/${esc(b.slug)}" class="js-route">${esc(b.title)}</a>`).join("\n")}`],
    [/(where|live|based|located|from|bangalore|bengaluru|davenport)/i, () => `Shobhit lives in ${esc(S.locations[0].city)} and grew up in ${esc(S.locations[1].city)}, and goes back at least once a year.`],
    [/(ai|llm|agent|model|ml|machine learning|stack|skills?)/i, () => "Agents, evals, retrieval, and getting models to behave in production. The blog has the long version."],
    [/(who are you|are you (real|human|ai)|what are you)/i, () => "I'm a few dozen lines of JavaScript with ambitions. The real Shobhit is one email away."],
    [/(joke|funny|lol)/i, () => "Why did the LLM cross the road? It was 94% confident there was a road."],
  ];

  function localReply(text) {
    for (const [re, fn] of RULES) if (re.test(text)) return fn();
    return `Good question. Honestly, it's above my pay grade (I'm paid in regex). Try asking Shobhit directly: <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`;
  }

  async function reply(text) {
    if (S.agent?.endpoint) {
      try {
        const res = await fetch(S.agent.endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history_ }),
        });
        if (res.ok) {
          const data = await res.json();
          if (data.reply) return esc(data.reply);
        }
      } catch { /* fall through to the local agent */ }
    }
    return localReply(text);
  }

  function bindAgent() {
    const form = $("#agent-form");
    const input = $("#agent-input");
    const send = async (text) => {
      text = text.trim();
      if (!text) return;
      input.value = "";
      setChips([]);
      history_.push({ role: "user", content: text });
      addMsg("user", esc(text));
      const typing = addMsg("assistant", '<span class="typing"><span></span><span></span><span></span></span>');
      const [answer] = await Promise.all([reply(text), new Promise((r) => setTimeout(r, 500 + Math.random() * 600))]);
      typing.innerHTML = answer;
      history_.push({ role: "assistant", content: typing.textContent });
      $("#agent-log").scrollTop = $("#agent-log").scrollHeight;
    };
    form.addEventListener("submit", (e) => { e.preventDefault(); send(input.value); });
    $("#agent-chips").addEventListener("click", (e) => { const c = e.target.closest(".chip"); if (c) send(c.textContent); });
  }

  // ---------- Boot ----------

  renderHome();
  bindEvents();
  bindPointer();
  bindAgent();
  startClocks();
  observeScreens();
  fitAll();
  document.fonts?.ready.then(() => fitAll());
  route();
})();
