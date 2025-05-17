---
layout: '@/templates/BasePost.astro'
title: "Capturing Customer Inquiries with Serverless Forms"
description: Show how any café, boutique, or service provider can add a contact form without running a full backend—just simple, reliable serverless services.
pubDate: 2020-02-06T00:00:00Z
imgSrc: '/assets/images/image-post.jpeg'
imgAlt: 'Image post'
tags: ["Astro", "Forms", "Serverless", "Local Business"]
---

Show how any café, boutique, or service provider can add a contact form without running a full backend—just simple, reliable serverless services.

## Introduction  
You need an easy way for customers to reach you—ask questions, book appointments, or send feedback—without maintaining a server. Serverless forms let you do that in minutes.

## 1. Why Your Site Needs a Contact Form  
- **Build trust:** Visitors feel confident when they can message you directly.  
- **Generate leads:** Collect emails for newsletters, promotions, or bookings.  
- **Stay lean:** No extra hosting or server to manage.

## 2. Use a Static Form Service  
Services like Netlify Forms or Formspree handle submissions for you. You just add a few attributes to your HTML form:

```html
<form name="contact" netlify>
  <input type="text" name="name" placeholder="Your name" />
  <input type="email" name="email" placeholder="Your email" />
  <textarea name="message" placeholder="How can we help?"></textarea>
  <button type="submit">Send</button>
</form>