import { Location, Company, Benefit, Solution } from '@/types';

export const locations: Location[] = [
  { id: 1, city: 'London', country: 'United Kingdom', count: 145 },
  { id: 2, city: 'Manchester', country: 'United Kingdom', count: 28 },
  { id: 3, city: 'Birmingham', country: 'United Kingdom', count: 19 },
  { id: 4, city: 'Edinburgh', country: 'United Kingdom', count: 12 },
  { id: 5, city: 'Glasgow', country: 'United Kingdom', count: 10 },
  { id: 6, city: 'Leeds', country: 'United Kingdom', count: 15 },
  { id: 7, city: 'Bristol', country: 'United Kingdom', count: 11 },
  { id: 8, city: 'Reading', country: 'United Kingdom', count: 9 },
  { id: 9, city: 'New York', country: 'United States', count: 89 },
  { id: 10, city: 'Los Angeles', country: 'United States', count: 67 },
  { id: 11, city: 'Toronto', country: 'Canada', count: 34 },
  { id: 12, city: 'Sydney', country: 'Australia', count: 28 },
  { id: 13, city: 'Singapore', country: 'Singapore', count: 45 },
  { id: 14, city: 'Dubai', country: 'United Arab Emirates', count: 38 },
  { id: 15, city: 'Mumbai', country: 'India', count: 52 },
];

export const solutions: Solution[] = [
  {
    id: 'office-space',
    name: 'Office Space',
    icon: 'building',
    description: 'From a single desk to a whole building. The choice is yours.',
    subSolutions: [
      {
        name: 'Private offices',
        description: 'A range of ready-to-use, fully equipped offices with everything you need to get started.',
        features: ['By month or year', 'Teams of any size'],
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Custom Offices',
        description: 'When off-the-shelf simply isn\'t enough. Customise all aspects of your space, including furniture and branding.',
        features: ['By month or year + customised', 'Teams of any size'],
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Day Offices',
        description: 'A professional on-demand office space. Perfect when you need to get your head down and do your best work.',
        features: ['By the hour or day', 'Teams of any size'],
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Office membership',
        description: 'Flexible access to Day Offices where and when you choose, at thousands of locations worldwide.',
        features: ['5, 10 or unlimited days per month'],
        image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
    ],
  },
  {
    id: 'coworking',
    name: 'Coworking',
    icon: 'users',
    description: 'Hot desk for the day, or reserve a Dedicated Desk space across thousands of locations.',
    subSolutions: [
      {
        name: 'Dedicated Desk',
        description: 'Rent as many desks as you need in a dynamic, shared office space. Business Address and storage options included.',
        features: ['Reserved permanent workspace'],
        image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Day Coworking',
        description: 'On-demand access to inspiring, open-plan coworking spaces, so there\'s always a desk when you need one.',
        features: ['Hot desk by the hour or day'],
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Coworking membership',
        description: 'Want to Hot Desk more regularly? Rent a desk for 5,10 or unlimited days each month.',
        features: ['Hot desk as often as you need'],
        image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg',
      },
    ],
  },
  {
    id: 'virtual-offices',
    name: 'Virtual Offices',
    icon: 'globe',
    description: 'Depending on how virtual or physical your presence needs to be, we have a package to suit your business.',
    subSolutions: [
      {
        name: 'Business Address',
        description: 'Build a business and enhance your credibility using a virtual address for your business at any of our 4000+ locations.',
        features: ['A virtual presence anywhere'],
        image: 'https://images.unsplash.com/photo-1594732832278-abd644401426?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Virtual Office',
        description: 'A prestigious business address, with telephone answering, a virtual receptionist and access to our global business network.',
        features: ['Our most popular package'],
        image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      },
      {
        name: 'Virtual Office Plus',
        description: 'Everything in our Virtual Office package, plus access to meeting rooms and 5 days of office space each month.',
        features: ['Our most comprehensive package'],
        image: 'https://images.pexels.com/photos/2451566/pexels-photo-2451566.jpeg',
      },
    ],
  },
  {
    id: 'meeting-rooms',
    name: 'Meeting Rooms',
    icon: 'presentation',
    description: 'Meeting rooms to suit any purpose, anywhere in the world. Available by the hour, the day – or as long as you need.',
    subSolutions: [
      {
        name: 'Meeting room',
        description: 'Perfect places to meet, collaborate and interview. Available by the hour, with our on-site team to support you.',
        features: ['Over 10,000 to choose from'],
        image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?crop=entropy&cs=srgb&fm=jpg&q=85',
      },
      {
        name: 'Interview rooms',
        description: 'Professional, private spaces for interviewing candidates, annual appraisals or running a research group.',
        features: ['Make the right impression'],
        image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg',
      },
      {
        name: 'Training Room',
        description: 'Perfect when you need a purpose-built space with desks, whiteboards and screens for training sessions.',
        features: ['Equipped for learning'],
        image: 'https://images.pexels.com/photos/2976970/pexels-photo-2976970.jpeg',
      },
      {
        name: 'Boardrooms',
        description: 'Premium boardrooms with all the amenities. Perfect when you need to get your head down and do your best work.',
        features: ['Space to impress'],
        image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
      },
    ],
  },
];

export const companies: Company[] = [
  { name: 'Microsoft', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_34/v1695741165/WebsiteImagery/Brands/Settings/Company-Logos/MicrosoftLogo.jpg' },
  { name: 'PayPal', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_43/v1695741022/WebsiteImagery/Brands/Settings/Company-Logos/PayPal.png' },
  { name: 'FedEx', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_68/v1730289275/WebsiteImagery/Brands/Settings/Company-Logos/FedEx_Logo.png' },
  { name: 'Samsung', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_25/v1695741162/WebsiteImagery/Brands/Settings/Company-Logos/SamsungLogo.jpg' },
  { name: 'Spotify', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_48/v1695741166/WebsiteImagery/Brands/Settings/Company-Logos/SpotifyLogo.jpg' },
  { name: 'Google', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_54/v1730289269/WebsiteImagery/Brands/Settings/Company-Logos/Google_Logo.png' },
  { name: 'HSBC', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_43/v1695741902/WebsiteImagery/Brands/Settings/Company-Logos/HSBCLogo.png' },
  { name: 'Uber', logo: 'https://assets.iwgplc.com/image/upload/c_fill,f_auto,q_auto,w_160,h_33/v1695741898/WebsiteImagery/Brands/Settings/Company-Logos/UberLogo.png' },
];

export const benefits: Benefit[] = [
  {
    title: 'Work wherever business takes you.',
    description: 'With over 4000 locations globally we have offices, coworking spaces and meeting rooms in every major town, city, and transport hub.',
    description2: 'Whether you work alone, you\'re growing a start-up or you\'re running the world\'s most successful corporation our network makes it possible to work near clients, colleagues or family.',
    image: 'https://images.unsplash.com/photo-1657978837950-03646a7c7b9e?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    title: 'If your needs change, we\'re flexible.',
    description: 'Whether you need a single desk or a whole building, want to drop in or stay for much longer, we\'ve got all your immediate business requirements covered.',
    description2: 'And whatever the future brings, we\'re able to handle that too. So when you need to scale up, cross borders or make the move to hybrid working we\'re here to support you every step of the way.',
    image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
  {
    title: 'Hybrid working can work for you.',
    description: 'Hybrid working is a better way to work that gives businesses and workers more choice on how and where they work. It\'s a healthier, greener, flexible and a more cost-effective way to do business.',
    description2: 'And we have the solutions to help you work this way. So, whether you require meeting rooms for an hour, offices for the day or want to drop in and cowork, the choice is yours.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?crop=entropy&cs=srgb&fm=jpg&q=85',
  },
];

