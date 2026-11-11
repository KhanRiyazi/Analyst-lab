# Mentor review

Review date: 11 Nov 2026. Goal: Professional Data Analyst → Advanced → AI-powered → Entrepreneur.

## How this was checked

- The code was split and run in a simulated browser (jsdom) with 13 automated checks: roadmap cards, Free/Paid/Example popups, library, search and phase filter, a mission check, saving, reset, and no console errors. All passed.
- This is **not** a real browser. Open the site on your laptop and phone and look at it yourself.
- Learning links were verified by web search where possible. Not verified by search: DataCamp "Data Manipulation with pandas" and Coursera "Statistics with Python". Click them first. Prices change, so none are stored here.

## Findings and what changed

| Finding | Why it matters | Fix |
|---|---|---|
| One 30 KB file mixed content, design and logic | Hard to edit safely | Split into `index.html`, `assets/`, `data/` |
| Links were buried in code and each popup showed one link | Learning is continuous; you need an easy place to add things | `data/links.js` drives the Library and every popup |
| No place for tricks and techniques | Small habits are what make analysts fast | New Tricks section (16 starters) |
| Generic storage key and no reset | Could clash with other projects | Key is `analystlab:v1`, old progress migrates, reset button added |
| A mistyped link could break a page | Silent failures waste time | Only http(s) links render and bad entries warn in the console |

## Honest gaps (what the site cannot do)

1. **It is a practice aid, not your database.** Real skill comes from running queries in PostgreSQL 18 on port 5433 and debugging your own errors. Do both.
2. **20 missions is a start.** Your targets are 30 queries (Phase 1) and 50 analytical problems (Phase 2). Add missions as you go, or keep a query log in your SQL folder.
3. **The checker matches text patterns.** A correct query written differently may be rejected. When that happens, read the model answer, then widen the pattern in `data/missions.js`.
4. **Links are suggestions.** Finish one resource per phase before adding another. Collecting links is not learning.

## Your weekly routine

- **Daily (about 100 minutes):** concept 20, code 30, practice 30, debug 10, revise 10.
- **Friday:** redo the week's missions without hints. Anything you miss goes back to Level 1.
- **Sunday:** add 3 links and 3 tricks to `data/links.js`, commit, and push.
- **End of every phase:** one small project in its own GitHub repo with a README, a screenshot and one business insight.

## Portfolio checklist (the real finish line)

- [ ] Sales database (PostgreSQL) with Customers, Products, Orders, Payments
- [ ] SQL query collection with comments
- [ ] Python notebooks: cleaning, EDA, statistics
- [ ] FastAPI backend with JSON endpoints
- [ ] Interactive dashboard with KPI cards, charts and date filters
- [ ] README with screenshots, setup steps and what decisions the dashboard helps people make
- [ ] Live GitHub Pages link on your resume and profile

## Next review

After Phase 1, check: how many queries did you write, which errors repeated, and which mission kept returning. Bring those three answers to the next review.
