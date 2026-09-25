# shobhit

Personal portfolio: big bold type, black and white, one screen per section.

Plain HTML/CSS/JS, no build step. To run locally:

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

Live at [shobhit.fyi](https://shobhit.fyi), served by GitHub Pages from the root of `main`. The `CNAME` file holds the custom domain.

## Editing content

Everything lives in `content.js`: sections, work, writes, inspo and projects. Placeholders are marked `SAMPLE` / `TODO`.

- **Work tiles** use `logo` (a transparent PNG/SVG path); without one, the company name is set as a wordmark.
- **Inspo** items are `kind: "image"` (one-liner on hover) or `kind: "book"` (Synopsis button → post page).
- Tiles without an `image` get a generated black and white pattern.

## How it behaves

- Each section is a full-height screen with scroll snapping, and the cue at the bottom points to the next one.
- Clicking the grid opens the expanded view (`#/writes`), and clicking an item opens it in post format (`#/writes/<slug>`).
- Every email link copies the address and shows a toast.
- Letters bounce on hover; about one in three does a somersault instead, and clicking a letter always flips it.
- To bring back the sketch's blue hover card, change `--accent` in `styles.css`.
