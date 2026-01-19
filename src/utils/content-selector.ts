/**
 * Content selector for location pages
 * Selects unique content combinations based on city/service hash
 */

import { createLocationHash, selectByHash, selectMultipleByHash } from './hash';
import introsData from '../data/content-pools/intros.json';
import benefitsData from '../data/content-pools/benefits.json';
import faqsData from '../data/content-pools/faqs.json';

// Type definitions
interface FAQ {
  question: string;
  answer: string;
}

type ServiceKey = keyof typeof introsData;

/**
 * Replaces {city} placeholder with actual city name
 */
function replaceCityPlaceholder(text: string, cityName: string): string {
  return text.replace(/\{city\}/g, cityName);
}

/**
 * Gets a unique intro paragraph for a city-service combination
 */
export function getIntro(citySlug: string, cityName: string, serviceSlug: string): string {
  const hash = createLocationHash(citySlug, serviceSlug);
  const serviceKey = serviceSlug as ServiceKey;
  const intros = introsData[serviceKey] || introsData['website-design'];
  const intro = selectByHash(intros, hash);
  return replaceCityPlaceholder(intro, cityName);
}

/**
 * Gets unique benefits for a city-service combination
 */
export function getBenefits(
  citySlug: string,
  cityName: string,
  serviceSlug: string,
  count: number = 5
): string[] {
  const hash = createLocationHash(citySlug, serviceSlug);
  const serviceKey = serviceSlug as ServiceKey;
  const benefits = benefitsData[serviceKey] || benefitsData['website-design'];
  const selected = selectMultipleByHash(benefits, hash, count);
  return selected.map(benefit => replaceCityPlaceholder(benefit, cityName));
}

/**
 * Gets unique FAQs for a city-service combination
 */
export function getFAQs(
  citySlug: string,
  cityName: string,
  serviceSlug: string,
  count: number = 6
): FAQ[] {
  const hash = createLocationHash(citySlug, serviceSlug);
  const serviceKey = serviceSlug as ServiceKey;
  const faqs = faqsData[serviceKey] || faqsData['website-design'];
  const selected = selectMultipleByHash(faqs, hash, count);
  return selected.map(faq => ({
    question: replaceCityPlaceholder(faq.question, cityName),
    answer: replaceCityPlaceholder(faq.answer, cityName),
  }));
}

/**
 * Gets all location content for a city-service page
 */
export function getLocationContent(
  citySlug: string,
  cityName: string,
  serviceSlug: string
) {
  return {
    intro: getIntro(citySlug, cityName, serviceSlug),
    benefits: getBenefits(citySlug, cityName, serviceSlug, 5),
    faqs: getFAQs(citySlug, cityName, serviceSlug, 6),
  };
}
