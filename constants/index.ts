import { FilterOption } from '@/interfaces';

export const FILTER_OPTIONS: FilterOption[] = [
  { id: 'all', label: 'All Listings', count: 0 },
  { id: 'web', label: 'Web Development', count: 0 },
  { id: 'mobile', label: 'Mobile Development', count: 0 },
  { id: 'design', label: 'UI/UX Design', count: 0 },
  { id: 'data', label: 'Data Science', count: 0 },
  { id: 'marketing', label: 'Digital Marketing', count: 0 },
];

export const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest First' },
  { id: 'oldest', label: 'Oldest First' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
];

export const DEFAULT_LISTINGS_PER_PAGE = 10;

export const API_ENDPOINTS = {
  LISTINGS: '/api/listings',
  CATEGORIES: '/api/categories',
  LOCATIONS: '/api/locations',
};

export const APP_CONFIG = {
  SITE_NAME: 'ALX Listings',
  DEFAULT_IMAGE: '/images/default-placeholder.png',
  MAX_IMAGES_PER_LISTING: 5,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
};