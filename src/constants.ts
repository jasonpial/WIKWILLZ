import { ServicePlan } from './types';

export const SERVICE_PLANS: ServicePlan[] = [
  {
    id: 'basic',
    name: 'Standard Event',
    price: 'UGX 1,500,000',
    deposit: 500000,
    description: 'Perfect for small gatherings and private parties.',
    features: [
      '2 High-quality PA Speakers',
      '1 Wireless Microphone',
      'Basic Lighting Setup',
      'Professional Sound Engineer',
      'Up to 6 Hours of Service'
    ]
  },
  {
    id: 'premium',
    name: 'Corporate & Wedding',
    price: 'UGX 3,500,000',
    deposit: 1000000,
    description: 'Comprehensive sound and lighting for medium to large events.',
    features: [
      '4 Line Array Speakers',
      '2 Subwoofers',
      '4 Wireless Microphones',
      'Advanced Stage Lighting',
      'Digital Mixing Console',
      'Full Day Coverage (Up to 12 Hours)'
    ]
  },
  {
    id: 'concert',
    name: 'Concert & Festival',
    price: 'UGX 7,000,000+',
    deposit: 2000000,
    description: 'Large scale production for outdoor events and concerts.',
    features: [
      'Full Line Array System',
      'Multiple Monitor Mixes',
      'Complete Backline Support',
      'Intelligent Lighting Rig',
      'LED Screen Integration',
      'Dedicated Technical Team'
    ]
  }
];

export const EVENT_TYPES = [
  'Wedding',
  'Introduction (Kwanjula)',
  'Corporate Event',
  'Concert',
  'Church Function',
  'Birthday Party',
  'Graduation',
  'Other'
];
