---
layout: '@/templates/BasePost.astro'
title: "Integrating MDX + TypeScript for a Robust Blog"
description: Combine the simplicity of Markdown with the safety of TypeScript to create a flexible, maintainable blog in Astro.
pubDate: 2024-11-04T00:00:00Z
imgSrc: '/assets/images/image-post3.jpeg'
imgAlt: 'Image post 3'
tags: ["Astro", "MDX", "TypeScript", "Blog"]
---
## Introduction  
MDX lets you write blog posts in Markdown while embedding interactive components. Adding TypeScript ensures those components are type-safe. Together, they streamline content updates and prevent runtime errors.

---

## 1. Installing & Configuring MDX  
1. **Install the integration**  
   ```bash
   npm install @astrojs/mdx

	2.	Enable in Astro config

// astro.config.mjs
import mdx from '@astrojs/mdx';

export default {
  integrations: [mdx()],
};



⸻

2. Writing Your First MDX Post

Place posts under src/content/posts/hello.mdx:

---
title: "Hello MDX"
date: "2025-05-17"
---

# Welcome to MDX

This is regular Markdown.

<MyAlert message="This is a React component in MDX!" />


⸻

3. Adding TypeScript to Components
	•	Create typed components under src/components/:

// src/components/MyAlert.tsx
interface Props { message: string }
export default function MyAlert({ message }: Props) {
  return <div className="alert">{message}</div>;
}


	•	Import in MDX without losing type checks:

import MyAlert from '../components/MyAlert.tsx';



⸻

4. Benefits for Your Workflow
	•	Writer-Friendly: Markdown for non-technical contributors.
	•	Developer Confidence: TypeScript catches mismatched props at build time.
	•	Single Source: Content and components live in the same repo—no external CMS needed.

⸻

Takeaway

MDX plus TypeScript in Astro delivers a best-of-both-worlds solution: easy authoring and reliable, type-checked components. It’s ideal for blogs, documentation, or any content-driven site.

---