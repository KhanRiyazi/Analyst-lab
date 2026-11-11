# Analyst Lab

Become a data analyst by doing. A Google-style learning site with a 9-phase roadmap, hands-on missions, instant answer checks, spaced review, and a **library of links and tricks that you edit yourself**. Pure HTML, CSS and JavaScript. No build step, no dependencies.

**Path:** SQL → Advanced SQL → PostgreSQL → BigQuery → Python/Pandas → Statistics → Looker Studio → FastAPI → Analytical Dashboard (24 weeks).

## Folder structure

```
analyst-lab/
├── index.html          page structure
├── assets/
│   ├── style.css       design (light and dark mode)
│   └── app.js          logic: missions, review schedule, popups, filters
├── data/
│   ├── links.js        YOUR LIBRARY: links, tricks, example videos (edit this)
│   └── missions.js     phases and practice missions
├── MENTOR_REVIEW.md    what was reviewed, what changed, what to do next
├── README.md  LICENSE  .gitignore  .nojekyll
```

## Keep learning: add a link or a trick

Open `data/links.js`, add one line, save and refresh.

```js
// A link (phase 0 = SQL ... 8 = Analytical Dashboard)
{ phase: 4, type: "free", kind: "video", title: "My new pandas video", url: "https://example.com", why: "Why this is worth my time." },

// A trick
{ phase: 0, title: "My new SQL trick", code: "SELECT ...;", note: "When to use it." },
```

New links appear in the **Library** section and in that phase's **Free** and **Paid** popups. Only `http(s)` links are shown. A wrong entry prints a warning in the browser console (press F12).

## Features

- 9-phase roadmap with progress per phase and 20 starter missions.
- Do → Check → Fix → Reflect → Review loop, each step with an **Example** popup.
- Spaced review after 1, 3, 7 and 14 days. A wrong answer drops back to Level 1.
- Searchable library with filters for phase and Free/Paid, plus a tricks section.
- Progress and notes stay in your browser (`localStorage`). A **Reset my progress** button is in the footer.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# visit http://localhost:8000
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Add Analyst Lab"
git branch -M main
git remote add origin https://github.com/<your-username>/analyst-lab.git
git push -u origin main
```

Then in the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` and `/ (root)` → Save**. The site goes live at `https://<your-username>.github.io/analyst-lab/` after about a minute. To update it later, edit `data/links.js`, then `git add . && git commit -m "Add new links" && git push`.

## Add a mission

In `data/missions.js`:

```js
mk(0, "my-id", "Title", "Task text", "Hint", s => /regex/.test(s), "Model answer")
```

The check receives the answer in lower case with tidy spaces. The checker matches text patterns, so a correct query written another way can be marked wrong. If that happens, widen the pattern.

## Notes

Analyst Lab is an independent learning project and is not affiliated with Google, PostgreSQL, Kaggle, DataCamp, Coursera, TestDriven.io or Luke Barousse. Paid links are not affiliate links. Prices and course contents change, so check each site before you buy.

MIT licence. See `LICENSE`.
