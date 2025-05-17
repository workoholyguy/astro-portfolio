---
layout: '@/templates/BasePost.astro'
title: "SEO Best Practices for Your Astro-Powered Local Business Site"
description: Actionable tips and real-world examples to help local cafés, shops, and services rank higher on Google using your Astro site.
pubDate: 2025-09-01T00:00:00Z
imgSrc: '/assets/images/image-post6.jpeg'
imgAlt: 'Image post 6'
tags: ["Astro", "SEO", "Local Business", "Marketing"]
---

## Introduction  
For local businesses—cafés, boutiques, salons—being found online is as critical as a prime storefront location. A well-optimized website can put you at the top of search results when customers in your neighborhood look for your offerings. In this guide, we’ll cover practical SEO steps, illustrated with examples, that any non-technical owner can implement in an Astro project.

## 1. Craft Clear, Location-Rich Page Titles  
**Why it matters:** Your page title is the first thing searchers see. A concise, descriptive title with your service and neighborhood boosts clicks and local relevance.

**How to implement:**  
- Format: `Business Name — Service in Neighborhood`  
- Example:  
  ```html
  <title>Sunrise Café — Specialty Coffee & Pastries in Midtown Atlanta</title>

Best practices:
* Keep under 60 characters so Google displays the full title.
* Place primary keyword (“Specialty Coffee”) near the front.
* Include a secondary term (“Midtown Atlanta”) for local targeting.

⸻

2. Write Compelling Meta Descriptions

Why it matters: Meta descriptions appear under the title in search results. A clear, benefit-focused snippet drives higher click-through rates.

How to implement:
* Length: 150–160 characters.
* Include your unique selling point and location.
* Example:

<meta
  name="description"
  content="Sunrise Café in Midtown Atlanta serves hand-roasted espresso, freshly baked pastries, and offers free Wi-Fi in a cozy atmosphere."
/>



Tips:
* Use an active voice and a call to action (“Visit us today!”).
* Avoid duplicate descriptions across pages—each should be tailored.

⸻

3. Structure Content with Proper Headings

Why it matters: Clear heading hierarchy helps Google understand your page’s layout and makes content scannable for readers.

How to implement:

* <h1>: Main page topic (only once per page).
* <h2>: Major sections (Menu, Hours, Location, Reviews).
* <h3>: Subsections within those (Coffee Types, Pastry Menu).

Example structure:

<h1>Sunrise Café Menu & Hours</h1>
<h2>Our Menu</h2>
<h3>Espresso Drinks</h3>
<h3>Cold Beverages</h3>
<h2>Opening Hours</h2>
<h2>Find Us</h2>

Tip:
* Include keywords naturally in headings (“Espresso Drinks” instead of just “Drinks”).

⸻

4. Optimize Image Alt Text for Accessibility & SEO

Why it matters: Alt text describes images to screen readers and gives search engines context. Local keywords here reinforce relevance.

How to implement:
* Keep descriptions concise (5–15 words).
* Mention the subject and location when appropriate.

Examples:

<img src="/images/barista.jpg"
     alt="Barista pouring latte art at Sunrise Café Midtown Atlanta" />
<img src="/images/shop-front.jpg"
     alt="Exterior of Sunrise Café on Peachtree St in Midtown Atlanta" />

Tip:
* Don’t stuff keywords—write naturally as if describing the image to a friend.

⸻

5. Claim & Link Your Google Business Profile

Why it matters: A verified Google Business listing puts your map pin, hours, reviews, and contact info front and center in local searches.

How to implement:
	1.	Go to Google Business Profile and claim your listing.
	2.	Verify your address via postcard, phone, or email.
	3.	Ensure your website URL points to your Astro site’s homepage.

Benefit:
	•   In “Local Pack” results, your business appears alongside a map—prime real estate for foot-traffic-driven companies.

⸻

6. Generate a Sitemap & Configure Robots.txt

Why it matters: A sitemap tells search engines which pages to crawl. robots.txt directs bots away from unimportant sections.

How to implement in Astro:
	1.	Install the sitemap integration:

npm install astro-sitemap


	2.	Add to astro.config.mjs:

import sitemap from 'astro-sitemap';

export default {
  integrations: [sitemap()],
  sitemap: {
    filter: (page) => !page.includes('/drafts/'),
  },
};


	3.	Create a public/robots.txt:

User-agent: *
Disallow: /drafts/
Sitemap: https://your-domain.com/sitemap.xml



Tip:
	• Update your sitemap whenever you add or remove pages to keep indexing current.

⸻

7. Add Structured Data (JSON-LD) for Local Business

Why it matters: Structured data enables rich snippets (star ratings, hours, address) directly in search results, increasing click-throughs.

How to implement:
Place this in your site’s <head> within your Astro layout:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunrise Café",
  "image": "https://your-domain.com/images/shop-front.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Peachtree St NE",
    "addressLocality": "Atlanta",
    "postalCode": "30303",
    "addressRegion": "GA"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 33.786, "longitude": -84.387 },
  "telephone": "+1-404-555-1234",
  "url": "https://your-domain.com",
  "openingHours": "Mo–Fr 07:00–18:00, Sa–Su 08:00–16:00"
}
</script>

Tip:

	•	Use Google’s Rich Results Test to verify your JSON-LD.

⸻

8. Mobile-Friendly & Performance Matters

Why it matters: Over 60% of searches are on mobile. Google penalizes slow, non-responsive sites.

How to implement:

* Use responsive layouts with CSS grid and flexbox.
* Compress and lazy-load images (covered in earlier posts).
* Leverage Astro’s zero-JS defaults to minimize payload.

Tip:
	
* Test on real devices or simulate in Chrome DevTools at various network speeds.

⸻

Conclusion & Next Steps

Implementing these SEO practices on your Astro site positions your local business to capture more customers searching in your area. Start with titles and meta descriptions, then move through structured data and mobile optimizations. Over time, monitor your Google Search Console for performance insights and adjust as needed.

Final Takeaway: Small, consistent SEO improvements compound—helping your café, shop, or service stand out in local search and attract more foot traffic every day.