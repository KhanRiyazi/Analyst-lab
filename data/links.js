/* ==========================================================
   YOUR LEARNING LIBRARY. Edit this file, save, refresh the page.
   ----------------------------------------------------------
   LINKS: add one line per link.
     phase: 0 SQL, 1 Advanced SQL, 2 PostgreSQL, 3 BigQuery,
            4 Python + Pandas, 5 Statistics, 6 Looker Studio,
            7 FastAPI, 8 Analytical Dashboard
     type:  "free" or "paid"
     kind:  "docs", "course", "video", "practice", "book",
            "project" or "tool" (any word you like)
     note:  optional, for price or warning text
   The Free and Paid buttons on each phase card list every link
   with the matching phase and type, so new lines appear there too.
   TRICKS: add hacks, tricks and techniques you learn.
   Tip: only use https links, and check prices on the site itself.
   ========================================================== */
const LINKS = [
  { phase: 0, type: "free", kind: "docs", title: "Kaggle Learn: Intro to SQL", url: "https://www.kaggle.com/learn/intro-to-sql", why: "Short, hands-on lessons that run real queries in your browser. No installs, so you can start your first 30 queries on day one." },
  { phase: 0, type: "paid", kind: "course", title: "DataCamp: Introduction to SQL", url: "https://www.datacamp.com/courses/introduction-to-sql", why: "A guided 2-hour course with instant feedback and a certificate. Good if you like a structured, game-like path.", note: "The first chapter is free. The full course needs a DataCamp plan, so check the current price." },
  { phase: 1, type: "free", kind: "docs", title: "Kaggle Learn: Advanced SQL", url: "https://www.kaggle.com/learn/advanced-sql", why: "Covers JOINs, UNIONs, analytic (window) functions and writing efficient queries. It matches your Phase 2 topics closely." },
  { phase: 1, type: "paid", kind: "course", title: "DataCamp: Joining Data in SQL", url: "https://www.datacamp.com/courses/joining-data-in-sql", why: "A deep dive into inner, outer, cross and self joins, set theory and subqueries. Use Kaggle alongside it for window functions.", note: "The first chapter is free. The full course needs a DataCamp plan, so check the current price." },
  { phase: 2, type: "free", kind: "docs", title: "PostgreSQL Official Tutorial", url: "https://www.postgresql.org/docs/current/tutorial.html", why: "The official source. Covers tables, views, foreign keys, transactions and window functions for the same PostgreSQL you run on port 5433." },
  { phase: 2, type: "paid", kind: "course", title: "Coursera: Database Design and Basic SQL in PostgreSQL", url: "https://www.coursera.org/learn/database-design-postgresql", why: "A University of Michigan course taught with psql: CRUD, keys and one-to-many relationships. Good for learning database design, not just queries.", note: "Certificate and graded work need a Coursera plan. Check the page for current options and price." },
  { phase: 3, type: "free", kind: "docs", title: "BigQuery Sandbox", url: "https://docs.cloud.google.com/bigquery/docs/sandbox", why: "Lets you run real BigQuery queries without enabling billing, within free usage limits. The best place to try public datasets and partitioning." },
  { phase: 3, type: "paid", kind: "course", title: "DataCamp: Introduction to BigQuery", url: "https://www.datacamp.com/courses/introduction-to-bigquery", why: "A 4-hour course on BigQuery architecture, querying, joins and query optimisation, with practice exercises.", note: "The first chapter is free. The full course needs a DataCamp plan, so check the current price." },
  { phase: 4, type: "free", kind: "docs", title: "Kaggle Learn: Pandas", url: "https://www.kaggle.com/learn/pandas", why: "Short practical lessons on creating, selecting, grouping and cleaning DataFrames, run in a free online notebook." },
  { phase: 4, type: "paid", kind: "course", title: "DataCamp: Data Manipulation with pandas", url: "https://www.datacamp.com/courses/data-manipulation-with-pandas", why: "Guided exercises on filtering, aggregating, merging and slicing DataFrames, with instant feedback.", note: "The first chapter is usually free. The full course needs a DataCamp plan, so check the current price." },
  { phase: 5, type: "free", kind: "docs", title: "OpenStax: Introductory Statistics 2e", url: "https://openstax.org/details/books/introductory-statistics-2e", why: "A free, peer-reviewed textbook covering probability, the normal distribution, hypothesis tests and regression, with worked examples." },
  { phase: 5, type: "paid", kind: "course", title: "Coursera: Statistics with Python", url: "https://www.coursera.org/specializations/statistics-with-python", why: "A University of Michigan specialization that applies statistics to real datasets in Python, from visualisation to inference and modelling.", note: "Certificate needs a Coursera plan. Check the page for current options and price." },
  { phase: 6, type: "free", kind: "docs", title: "Looker Studio Help Center", url: "https://support.google.com/looker-studio/", why: "Google’s official guides for connecting Sheets and BigQuery, calculated fields, filters, charts and sharing reports." },
  { phase: 6, type: "paid", kind: "course", title: "Coursera: Creating Business Value with Data and Looker", url: "https://www.coursera.org/specializations/creating-business-value-with-data-and-looker", why: "A Google Cloud specialization that includes the Looker Studio Essentials course, plus a wider view of business intelligence.", note: "Only one course in it is about Looker Studio; the rest cover Looker. Included with Coursera Plus, so check current options." },
  { phase: 7, type: "free", kind: "docs", title: "FastAPI Official Tutorial", url: "https://fastapi.tiangolo.com/tutorial/", why: "The best FastAPI teacher: clear step-by-step lessons on endpoints, Pydantic models, databases and error handling." },
  { phase: 7, type: "paid", kind: "course", title: "TestDriven.io: Test-Driven Development with FastAPI and Docker", url: "https://testdriven.io/courses/tdd-fastapi/", why: "Build, test and deploy a real API with FastAPI, Postgres, Docker and pytest. Great for a portfolio-grade backend.", note: "This is not a beginner course. Learn Python and basic web concepts first. Check the site for the current price." },
  { phase: 8, type: "free", kind: "docs", title: "Chart.js Documentation", url: "https://www.chartjs.org/docs/latest/", why: "Official docs for the JavaScript chart library. A good fit for your KPI cards, trend lines and bar charts in plain HTML, CSS and JavaScript." },
  { phase: 8, type: "paid", kind: "course", title: "Coursera: Google Data Analytics Professional Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", why: "Eight courses with a capstone project, useful for practising how to tell a story with data and for a portfolio piece.", note: "Monthly Coursera subscription, and financial aid is offered. Check the page for the current price." },
  { phase: 0, type: "free", kind: "video", title: "Luke Barousse: SQL for Data Analytics (full course)", url: "https://youtu.be/7mz73uXD9DA", why: "A 4+ hour practical course with a full portfolio project, using PostgreSQL and VS Code." },
  { phase: 0, type: "paid", kind: "course", title: "Luke Barousse: SQL for Data Analytics, Supporter plan", url: "https://lukebarousse.com/sql", why: "One-time paid plan that adds interview-level problems, notes, community access and a certificate.", note: "Check the page for the current price." },
  { phase: 0, type: "free", kind: "project", title: "Luke Barousse: finished SQL project (GitHub)", url: "https://github.com/lukebarousse/SQL_Project_Data_Job_Analysis", why: "A completed SQL analysis repo to study as a model for your own README and portfolio. Learn from it, do not copy it." },
  { phase: 0, type: "free", kind: "video", title: "freeCodeCamp: Learn SQL for Analytics", url: "https://www.freecodecamp.org/news/learn-sql-for-analytics/", why: "A free 11-hour video course on handling complex database queries for analytics." },
  { phase: 3, type: "free", kind: "video", title: "freeCodeCamp: Beginner’s guide to Cloud Data Analytics", url: "https://www.freecodecamp.org/news/beginners-guide-to-cloud-data-analytics", why: "A free 10-hour Google Cloud data analytics video course. Check its outline for the BigQuery parts." }
];

const TRICKS = [
  { phase: 0, title: "Show query time in psql", code: "\\timing on", note: "Run it once per session. psql then prints how long each query took." },
  { phase: 0, title: "Expanded view for wide rows", code: "\\x auto", note: "psql switches to a vertical layout when a row is too wide for the screen." },
  { phase: 1, title: "Count with a condition", code: "SELECT COUNT(*) FILTER (WHERE amount > 100) AS big_orders\nFROM orders;", note: "FILTER lets one query compute several conditional counts or sums at once." },
  { phase: 1, title: "Replace NULL with a default", code: "SELECT COALESCE(discount, 0) FROM orders;", note: "Use COALESCE before maths so NULL does not turn the whole result into NULL." },
  { phase: 2, title: "Import a CSV from your own computer", code: "\\copy customers FROM 'customers.csv' CSV HEADER", note: "\\copy runs on the client side, so it reads files from your laptop, not the server." },
  { phase: 2, title: "See how a query runs", code: "EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 7;", note: "ANALYZE really runs the query. For UPDATE or DELETE, wrap it in BEGIN ... ROLLBACK." },
  { phase: 3, title: "Select all columns except a few", code: "SELECT * EXCEPT (internal_notes) FROM mydata.sales;", note: "A BigQuery shortcut that avoids typing a long column list." },
  { phase: 3, title: "LIMIT does not cut BigQuery cost", code: "Check the bytes estimate before you run", note: "BigQuery bills by data scanned, so filter on partition columns and select only the columns you need." },
  { phase: 4, title: "First look at any DataFrame", code: "df.info()\ndf.describe()\ndf.isna().sum()", note: "Types, summary numbers and missing values in three lines." },
  { phase: 4, title: "Share of each category", code: "df[\"region\"].value_counts(normalize=True)", note: "normalize=True turns counts into proportions." },
  { phase: 4, title: "Safe date conversion", code: "pd.to_datetime(df[\"date\"], errors=\"coerce\")", note: "Bad dates become NaT instead of stopping your script." },
  { phase: 5, title: "Mean or median?", code: "df[\"price\"].median()", note: "If a few huge values pull the mean away, the median describes a typical row better." },
  { phase: 5, title: "What a p-value is not", code: "p < 0.05 does not mean the null hypothesis is 95% false", note: "It is how surprising your data would be if the null hypothesis were true." },
  { phase: 6, title: "Start from a clean Sheet", code: "One header row, one record per row, no merged cells", note: "Looker Studio reads tidy tables best, so fix the sheet before building charts." },
  { phase: 7, title: "Free interactive API docs", code: "Open /docs on your running app", note: "FastAPI builds a Swagger page where you can test every endpoint in the browser." },
  { phase: 8, title: "Commit small and often", code: "git commit -m \"Add monthly revenue chart\"", note: "Small commits make a readable GitHub history that employers can follow." }
];

/* Example popups on the Do / Check / Fix / Reflect / Review cards */
const VID = ["https://youtu.be/7mz73uXD9DA", "https://lukebarousse.com/sql"];
const VNOTE = " Free video: a 4+ hour practical SQL course with a full portfolio project by Luke Barousse, using PostgreSQL and VS Code like your setup. Paid course: the same course’s one-time Supporter plan adds interview-level problems, notes and a certificate. Check the page for the current price.";
const EX = [
  ["Do", "Do: try it yourself first", "Task: Table customers(id, name, city). Show all columns for customers in Delhi.\n\nYour move: type your own answer before looking anything up, for example:\nSELECT * FROM customers WHERE city = 'Delhi';\n\nA wrong first try is fine. The attempt is what makes the lesson stick.", "While watching, pause each time the instructor sets a task and try it first."],
  ["Check", "Check: compare with the expected result", "You typed: SELECT * FROM customers WHERE city = 'Delhi';\nThe page replies: Correct. Level 1. Review in 1 day(s).\n\nNow run the same query in psql on port 5433 and compare the rows you get with the rows you expected.", "Watch how results are read and compared to what was expected after each query."],
  ["Fix", "Fix: change one thing and try again", "You typed: SELECT * FROM customers WHERE city = Delhi;\nPostgreSQL says: column \"delhi\" does not exist.\n\nRead the error, change one thing: text values need single quotes, so write 'Delhi'. Run it again.", "Watch how errors are read and fixed one change at a time."],
  ["Reflect", "Reflect: write one line", "Your one-line note could be:\nText values go in single quotes. Double quotes are for column names.\n\nWrite it in your own words in the Reflect box. It is saved on your device only.", "Pause after each lesson and write one sentence about what you learned."],
  ["Review", "Review: spaced repetition", "Day 0: you answer correctly, so the mission moves to Level 1 and comes back in 1 day.\nCorrect again: Level 2, back in 3 days, then 7, then 14.\nA wrong answer drops the mission back to Level 1 so it returns sooner.", "Re-do a few queries from earlier lessons without looking at the video."]
];
