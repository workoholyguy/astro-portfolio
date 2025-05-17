---
layout: '@/templates/BasePost.astro'
title: "Implementing Dark Mode with System Preferences"
description: Learn how to add a polished, system-driven dark mode to your Astro site with minimal configuration and zero runtime overhead.
pubDate: 2025-10-05T00:00:00Z
imgSrc: '/assets/images/image-post2.jpeg'
imgAlt: 'Image post 2'
tags: ["Astro", "Accessibility", "Dark Mode", "Tailwind"]
---

## Introduction  
Dark mode isn’t just a trend—it’s expected by many users, especially on mobile and in low-light environments. In this guide, I’ll show you how to leverage system preferences and Tailwind’s built-in support to deliver a seamless dark mode experience on your Astro site.

---

## 1. Enable Dark Mode in Tailwind  
1. Open your `tailwind.config.js`.  
2. Set `darkMode` to `'media'` to follow the user’s OS preference:
   ```js
   // tailwind.config.js
   module.exports = {
     darkMode: 'media', // Options: 'media' or 'class'
     content: ['./src/**/*.{astro,js,jsx,ts,tsx,mdx}'],
     theme: { extend: {} },
     plugins: [],
   };

	3.	Rebuild your styles:

npm run build



⸻

2. Apply Dark Styles in Your Templates

Use Tailwind’s dark: prefix to define alternate styles:

<header class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4">
  <h1 class="text-2xl">My Portfolio</h1>
</header>
<main class="prose prose-lg dark:prose-invert p-6">
  <p>Welcome to my site—now in light or dark mode based on your system settings.</p>
</main>


⸻

3. Optional Manual Toggle

If you prefer a toggle switch instead of—or in addition to—system control, switch to 'class' mode:
	1.	Change darkMode:

darkMode: 'class',


	2.	Add a toggle script in your layout:

<button id="theme-toggle">Toggle Dark Mode</button>
<script>
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
  });
</script>


	3.	Style the button and persist choice in localStorage if desired.

⸻

Benefits for Your Business
	•	User Comfort: Respects system settings and reduces eye strain.
	•	Performance: No extra JavaScript files or runtime CSS—styles are compiled at build time.
	•	SEO & Accessibility: Improves user satisfaction and time on site, which can boost search rankings.

⸻

Takeaway

With just a few lines in tailwind.config.js and your templates, you can provide a fast, reliable dark mode that adapts automatically to your customers’ preferences—no maintenance required.

