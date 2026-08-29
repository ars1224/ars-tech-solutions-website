import { projects } from './siteData'

const byTitle = Object.fromEntries(projects.map(project => [project.title, project]))

export const caseStudies = [
  {
    slug: 'kiss-web-inventory-system',
    ...byTitle['KISS-Web Inventory and Warehouse Management System'],
    category: 'Custom Web Application',
    status: 'Private internal application',
    overview: 'A responsive, database-backed warehouse-management application for inventory, pallets, orders, fulfilment, reporting and QR scanning.',
    need: 'Warehouse teams need a dependable way to see stock, understand where products are located and record movement through operational workflows.',
    goals: ['Centralise product and stock information', 'Support location and movement tracking', 'Make order processing and reporting easier to follow'],
    role: 'Application planning, interface design, full-stack development and database implementation.',
    approach: 'The system was structured around key warehouse activities, with screens and data relationships organised to keep common tasks clear.',
    functionality: ['Stock visibility', 'Location tracking', 'Order processing', 'Product movement records', 'Operational reporting'],
    challenges: 'Multiple warehouse activities and data relationships needed to remain understandable within one connected application.',
    outcome: 'Developed as a private internal warehouse-management application.',
    relatedService: 'Custom Web Applications',
    relatedServiceHref: '/web-development#custom-web-applications',
  },
  {
    slug: 'digital-wedding-invitation',
    ...byTitle['Aries & Jade Digital Wedding Invitation'],
    category: 'Personal Project',
    status: 'Live personal project',
    overview: 'A personalised event website combining guest information, online responses and simple guest-management workflows.',
    need: 'Guests needed one mobile-friendly place to find wedding information and confirm attendance.',
    goals: ['Make event details easy to access', 'Collect RSVP information online', 'Keep responses organised in a familiar system'],
    role: 'Responsive design, front-end development, serverless form handling and Google Sheets integration.',
    approach: 'The experience prioritised clear event information and a straightforward RSVP journey across phones and larger screens.',
    functionality: ['Responsive event information', 'Online RSVP confirmation', 'Guest management', 'Google Sheets integration'],
    challenges: 'The project needed to combine a personal visual experience with dependable form and guest-data handling.',
    outcome: 'Live personal project with a public demonstration available.',
    relatedService: 'Business Websites',
    relatedServiceHref: '/web-development#business-websites',
  },
  {
    slug: 'noble-innsync-hotel-system',
    ...byTitle['Noble InnSync Hotel Booking System'],
    category: 'Development Project',
    status: 'Live project',
    overview: 'A hotel management platform connecting guest bookings with room and operational management functions.',
    need: 'Hotel operations involve connected information across bookings, availability, payments, maintenance, inventory and staffing.',
    goals: ['Connect booking and room information', 'Support operational workflows', 'Create a consistent management interface'],
    role: 'System planning, interface design, application development and database modelling.',
    approach: 'Related hotel activities were organised into one application so operational information could be managed through a consistent structure.',
    functionality: ['Guest bookings', 'Room availability', 'Payment records', 'Maintenance workflows', 'Inventory and staff operations'],
    challenges: 'A broad set of hotel workflows needed clear separation while still sharing related information.',
    outcome: 'Completed as an academic development project and now available as a public live demonstration.',
    relatedService: 'Custom Web Applications',
    relatedServiceHref: '/web-development#custom-web-applications',
  },
]

export const caseStudyBySlug = Object.fromEntries(caseStudies.map(study => [study.slug, study]))
