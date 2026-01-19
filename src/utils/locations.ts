/**
 * Location utilities for Georgia cities
 */

import georgiaCity from '../data/locations/georgia-cities.json';
import nearbyCitiesData from '../data/locations/nearby-cities.json';

// Type definitions
export interface City {
  name: string;
  slug: string;
  state: string;
  stateAbbr: string;
  region: string;
  population: number;
}

const nearbyCities: Record<string, string[]> = nearbyCitiesData;

/**
 * Get all Georgia cities
 */
export function getAllCities(): City[] {
  return georgiaCity as City[];
}

/**
 * Get a city by slug
 */
export function getCityBySlug(slug: string): City | undefined {
  return getAllCities().find(city => city.slug === slug);
}

/**
 * Get nearby cities for a given city
 */
export function getNearbyCities(citySlug: string): City[] {
  const nearbySlugs = nearbyCities[citySlug] || [];
  return nearbySlugs
    .map(slug => getCityBySlug(slug))
    .filter((city): city is City => city !== undefined);
}

/**
 * Get city display name with state
 */
export function getCityDisplayName(city: City): string {
  return `${city.name}, ${city.stateAbbr}`;
}

/**
 * Format city name for titles (e.g., "Web Design in Atlanta, GA")
 */
export function formatLocationTitle(serviceName: string, city: City): string {
  return `${serviceName} in ${city.name}, ${city.stateAbbr}`;
}

/**
 * Generate breadcrumb items for a location page
 */
export function getLocationBreadcrumbs(
  city: City,
  serviceName?: string,
  serviceSlug?: string
) {
  const breadcrumbs = [
    { label: 'Locations', href: '/locations' },
    { label: 'Georgia', href: '/locations/georgia' },
    { label: city.name, href: `/locations/georgia/${city.slug}` },
  ];

  if (serviceName && serviceSlug) {
    breadcrumbs.push({
      label: serviceName,
      href: `/locations/georgia/${city.slug}/${serviceSlug}`,
    });
  }

  return breadcrumbs;
}

/**
 * Get all city-service combinations for static path generation
 */
export function getAllCityServicePaths() {
  const cities = getAllCities();
  const services = [
    'website-design',
    'website-redesign',
    'landing-pages',
    'maintenance-care',
    'local-seo',
    'speed-technical-seo',
    'shopify-customization',
    'brand-starter-kit',
    'analytics-tracking',
  ];

  const paths: { city: string; service: string }[] = [];

  for (const city of cities) {
    for (const service of services) {
      paths.push({
        city: city.slug,
        service: service,
      });
    }
  }

  return paths;
}

/**
 * Get metro cities (higher population, more prominent)
 */
export function getMetroCities(): City[] {
  return getAllCities().filter(city => city.region === 'metro');
}

/**
 * Get other major cities (non-metro)
 */
export function getOtherCities(): City[] {
  return getAllCities().filter(city => city.region === 'other');
}

/**
 * Sort cities by population (descending)
 */
export function sortByPopulation(cities: City[]): City[] {
  return [...cities].sort((a, b) => b.population - a.population);
}
