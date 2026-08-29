import { MonitorSmartphone, Search, BadgeDollarSign, Headphones, Code2, PanelsTopLeft, Wrench, MessagesSquare, Map, Scaling, LifeBuoy, Compass, LayoutTemplate, Braces, Rocket, Globe2, Mail, MapPin, Phone, Share2, MessageCircle, Camera, MonitorCog, HardDrive, Building2, ClipboardList, ScanSearch, CircleCheckBig } from 'lucide-react'
import kissWebImage from '../assets/projects/kiss-web-dashboard.webp'
import weddingInvitationImage from '../assets/projects/wedding-invitation.webp'
import exploreNzImage from '../assets/projects/explore-nz.webp'
import nobleInnSyncImage from '../assets/projects/noble-innsync.webp'
import nzftcImage from '../assets/projects/nzftc-employee-management.webp'
import weddingBudgetImage from '../assets/projects/wedding-budget.webp'
import zenfitImage from '../assets/projects/zenfit.webp'

export const navLinks = [
  { label: 'Web Development', href: '/web-development' },
  { label: 'Pricing', href: '/web-development#pricing' },
  { label: 'Work', href: '/work' },
  { label: 'Tech Support', href: '/tech-support' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '#contact' },
]

export const values = [
  { title: 'Web & IT Support', text: 'Two services, one local contact.', icon: MonitorSmartphone },
  { title: 'Clear Advice', text: 'Practical help without the jargon.', icon: Search },
  { title: 'Clear Pricing', text: 'Know what to expect upfront.', icon: BadgeDollarSign },
  { title: 'Local Support', text: 'Friendly help from Canterbury.', icon: Headphones },
]

export const techSupportServices = [
  { title: 'Windows Setup & Reformat', description: 'A clean, reliable Windows setup for new, slow or problem computers.', icon: MonitorCog, features: ['Windows reinstallation and reformatting', 'Updates and driver installation', 'Essential software setup', 'New computer setup', 'Performance clean-up', 'Backup planning before reformatting'] },
  { title: 'Troubleshooting & Device Help', description: 'Straightforward diagnosis and support for everyday computer and software problems.', icon: HardDrive, features: ['Slow computer troubleshooting', 'Software errors and crashes', 'Internet and Wi-Fi diagnosis', 'Printer and peripheral setup', 'Email and account troubleshooting', 'Basic malware and security checks'] },
  { title: 'Small Business IT Support', description: 'Practical technology assistance that helps small teams stay productive.', icon: Building2, features: ['Computer and device setup', 'Microsoft 365 and email guidance', 'File backup and synchronisation', 'Basic network support', 'Software configuration', 'Ongoing support options'] },
]

export const supportSteps = [
  { title: 'Tell us the problem', text: 'Explain what is happening, which device is affected and what you need working again.', icon: MessagesSquare },
  { title: 'Initial assessment', text: 'We review the symptoms and identify the most practical way to investigate the issue.', icon: ScanSearch },
  { title: 'Clear recommendation', text: 'You receive a straightforward explanation of the options, likely cost and next step.', icon: ClipboardList },
  { title: 'Fix and handover', text: 'The agreed work is completed, checked and explained so you know what was done.', icon: CircleCheckBig },
]

export const services = [
  { title: 'Website Development', description: 'Fast, responsive and professionally designed websites for small businesses, tradespeople, service providers and growing companies.', icon: PanelsTopLeft, features: ['Business websites', 'Landing pages', 'Website redesigns', 'Responsive development', 'Contact and enquiry forms', 'Basic SEO setup'] },
  { title: 'Web Application Development', description: 'Custom web-based systems designed to simplify business processes and improve productivity.', icon: Code2, features: ['Booking systems', 'Customer portals', 'Task management systems', 'Business dashboards', 'Database-driven applications', 'API integrations'] },
  { title: 'Website Care and Support', description: 'Reliable ongoing support to keep your website secure, updated and performing properly.', icon: Wrench, features: ['Content updates', 'Bug fixes', 'Performance improvements', 'Website maintenance', 'Feature improvements', 'Technical support'] },
]

export const benefits = [
  { title: 'Direct Communication', text: 'Work directly with the person designing and developing your website.', icon: MessagesSquare },
  { title: 'Clear Process', text: 'Understand what is happening at every stage without unnecessary technical jargon.', icon: Map },
  { title: 'Flexible Solutions', text: 'Start with a simple website and expand it as your business grows.', icon: Scaling },
  { title: 'Ongoing Support', text: 'Receive help even after your website has been launched.', icon: LifeBuoy },
]

export const projects = [
  { category: 'Custom Web Application', title: 'KISS-Web Inventory and Warehouse Management System', description: 'A responsive, database-backed warehouse application for inventory, pallets, orders, fulfilment, reporting and QR scanning.', technologies: ['PHP 8.2', 'MySQL', 'Apache', 'HTML', 'CSS', 'JavaScript'], image: kissWebImage, github: 'https://github.com/ars1224/Kiss-Web', status: 'Private internal application' },
  { category: 'Personal Project', title: 'Aries & Jade Digital Wedding Invitation', description: 'A personalised event website with wedding information, online RSVP confirmation, guest management and Google Sheets integration.', technologies: ['JavaScript', 'Node.js', 'Netlify Functions', 'Google Sheets API'], image: weddingInvitationImage, github: 'https://github.com/ars1224/JadeAries', liveUrl: 'https://ariesjadeweddinginvitation.netlify.app/' },
  { category: 'Academic Project', title: 'Explore NZ Tourism Website', description: 'A responsive tourism website for discovering New Zealand landmarks, cultural attractions, events and destinations through an interactive map.', technologies: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js'], image: exploreNzImage, github: 'https://github.com/ars1224/Explore-NZ', status: 'No public live demo' },
  { category: 'Academic Project', title: 'Noble InnSync Hotel Booking System', description: 'A hotel management platform combining guest bookings, room availability, payments, maintenance, inventory and staff operations.', technologies: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'], image: nobleInnSyncImage, github: 'https://github.com/ars1224/Noble_InnSync', liveUrl: 'https://noble-innsync.onrender.com/', status: 'Live project' },
  { category: 'Academic Project', title: 'NZFTC Employee Management System', description: 'A web-based employee records platform with authentication, centralised staff information, dashboards and database integration.', technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'MySQL'], image: nzftcImage, github: 'https://github.com/ars1224/NZFTC-Employee-Management-System', status: 'Live demo pending' },
  { category: 'Personal Project', title: 'Wedding Budget Management App', description: 'A web application for tracking wedding expenses, payments, category allocations, remaining funds and visual budget summaries.', technologies: ['JavaScript', 'Node.js', 'Google Sheets API', 'Chart.js'], image: weddingBudgetImage, github: 'https://github.com/ars1224/Wedding-Budget-Management-App', status: 'Live demo pending' },
  { category: 'Academic Project', title: 'ZenFit Fitness and Booking Website', description: 'A responsive fitness business website where customers can explore services, learn about the business and submit bookings online.', technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], image: zenfitImage, github: 'https://github.com/ars1224/ZenFit-Fitness-and-Booking-Website', status: 'Live demo pending' },
]

export const processSteps = [
  { title: 'Discovery', text: 'We learn about your business, customers, goals and what the website needs to achieve.', icon: Compass },
  { title: 'Planning', text: 'We agree on the pages, content, features, scope and timeline.', icon: LayoutTemplate },
  { title: 'Design', text: 'The page structure and interface are shaped for your brand and customers.', icon: PanelsTopLeft },
  { title: 'Development', text: 'The approved design is built, tested and refined across screen sizes.', icon: Braces },
  { title: 'Launch & Support', text: 'The website goes live with a clear plan for care and future improvements.', icon: Rocket },
]

export const pricing = [
  { title: 'One-Page Website', purpose: 'A simple professional online presence.', price: 'NZ$399', prefix: 'From', suitable: ['Sole traders', 'New businesses', 'Small local services', 'Businesses mainly relying on Facebook or Instagram'], includes: ['1 professionally designed scrolling page', 'Mobile-responsive design', 'About section', 'Services section', 'Contact or enquiry section', 'Social media links', 'Google Maps integration if required', 'Basic SEO setup', 'One revision round'], button: 'Start Your Project' },
  { title: 'Starter Website', purpose: 'A small multi-page website.', price: 'NZ$699', prefix: 'From', suitable: ['Sole traders', 'New businesses', 'Personal services', 'Simple informational websites'], includes: ['Up to 3 pages', 'Mobile-responsive design', 'Contact form', 'Basic SEO setup', 'Social media links', 'One revision round'], button: 'Start Your Project' },
  { title: 'Business Website', purpose: 'A complete website for an established or growing business.', price: 'NZ$1,499', prefix: 'From', popular: true, suitable: ['Small businesses', 'Tradespeople', 'Service providers', 'Growing businesses'], includes: ['Up to 6 pages', 'Custom responsive design', 'Contact or enquiry forms', 'Basic SEO setup', 'Google Maps integration', 'Analytics setup', 'Two revision rounds'], button: 'Start Your Project' },
  { title: 'Custom Web Application', purpose: 'Custom functionality and systems for your business.', price: 'NZ$2,999', prefix: 'From', suitable: ['Booking systems', 'Dashboards', 'Inventory systems', 'Internal management systems', 'Customer portals', 'Custom workflows', 'Database-driven applications'], includes: ['Requirements consultation', 'Custom interface', 'Database integration', 'User authentication when required', 'Testing and deployment', 'Ongoing support options'], button: 'Start Your Project' },
]

export const contactDetails = [
  { label: 'Phone', value: '027 207 8245', href: 'tel:+64272078245', icon: Phone },
  { label: 'Email', value: 'contact@arstechsolutions.com', href: 'mailto:contact@arstechsolutions.com', icon: Mail },
  { label: 'Location', value: 'Rolleston, Canterbury, New Zealand', icon: MapPin },
  { label: 'Website', value: 'arstechsolutions.com', href: 'https://arstechsolutions.com', icon: Globe2 },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/ARStechsolutions', icon: Share2 },
  { label: 'Instagram', href: 'https://www.instagram.com/ars.techsolutions/', icon: Camera },
  { label: 'Messenger', href: 'https://m.me/ARStechsolutions', icon: MessageCircle },
]
