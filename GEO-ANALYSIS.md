# GEO Analysis: Kerly Finance

Analyzed: 2026-07-10

## GEO Readiness Score: 82/100

This is a code and content-structure assessment, not a measurement of live AI citations or brand mentions.

| Platform | Readiness | Rationale |
| --- | --- | --- |
| Google AI Overviews | 84/100 | Crawlable static HTML, canonical URLs, Article schema, primary-source links, and clear headings. |
| ChatGPT web search | 78/100 | Explicit crawler access, llms.txt, and an editorial-standards page are present; off-site entity mentions remain limited. |
| Perplexity | 76/100 | Source-led passages and article structure are strong; public brand citations and community discussion are still limited. |

## Implemented Changes

- Added `/editorial-standards.html` with source, authorship, correction, and educational-scope policies.
- Connected the policy page to Organization, CollectionPage, and Article schema as the publishing-principles and author destination.
- Added visible author links and machine-readable `rel="author"` references across all articles.
- Added primary-source sections and JSON-LD citations to the two articles that lacked them.
- Declared access for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, and PerplexityBot in `robots.txt`.
- Expanded `llms.txt` and `sitemap.xml` with editorial policy information.
- Aligned canonical URLs, schema URLs, sitemap entries, and internal links with Cloudflare Pages' final extensionless routes.

## Remaining Constraints

- An external auditor's letter grade cannot be guaranteed from on-site changes alone.
- Kerly Finance has no verified social profile URLs to add as Organization `sameAs` links; URLs should only be added after the real profiles exist.
- AI visibility also depends on external brand mentions, topical citations, indexing, and crawl timing.

## Next Evidence-Based Priorities

1. Create and verify official LinkedIn and YouTube profiles, then add their URLs to Organization schema.
2. Publish source-led updates with original commentary and cite the primary release in each article.
3. Earn relevant mentions from finance, investing-education, and market-news publishers.
4. Re-run the GEO audit after the deployment is indexed; allow time for its crawler cache to refresh.
