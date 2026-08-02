import { MonitorSmartphone, Search, BadgeDollarSign, Headphones, Code2, PanelsTopLeft, Wrench, MessagesSquare, Map, Scaling, LifeBuoy, Compass, LayoutTemplate, Braces, Rocket, Globe2, Mail, MapPin, Phone, Share2, MessageCircle } from 'lucide-react'

export const navLinks = [
  ['Home', 'home'], ['Services', 'services'], ['Work', 'work'], ['Process', 'process'],
  ['Pricing', 'pricing'], ['About', 'about'], ['Contact', 'contact'],
]

export const values = [
  { title: 'Mobile Friendly', text: 'Designed for every screen.', icon: MonitorSmartphone },
  { title: 'SEO Ready', text: 'A strong foundation to be found.', icon: Search },
  { title: 'Clear Pricing', text: 'Know what to expect upfront.', icon: BadgeDollarSign },
  { title: 'Local Support', text: 'Friendly help from Canterbury.', icon: Headphones },
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
  { category: 'Internal Project', title: 'ARS Tech Solutions Website', description: 'A modern business website designed to present services clearly and generate customer enquiries.', technologies: ['React', 'Vite', 'CSS'], theme: 'blue' },
  { category: 'Academic Web Application', title: 'TaskFlow', description: 'A responsive task management application designed to help students organise and prioritise academic activities.', technologies: ['JavaScript', 'Database', 'Responsive UI'], theme: 'green' },
  { category: 'Personal Project', title: 'Personal Developer Portfolio', description: 'A portfolio website presenting development skills, completed projects and technical experience.', technologies: ['HTML5', 'CSS3', 'JavaScript'], theme: 'amber' },
]

export const processSteps = [
  { title: 'Discovery', text: 'We discuss your business, goals, customers and required website features.', icon: Compass },
  { title: 'Planning', text: 'We organise the page structure, content, features, timeline and project scope.', icon: LayoutTemplate },
  { title: 'Design', text: 'We create a clean interface that matches your business and works across different screen sizes.', icon: PanelsTopLeft },
  { title: 'Development', text: 'The approved design is developed, tested and prepared for launch.', icon: Braces },
  { title: 'Launch and Support', text: 'Your website goes live, and ongoing support is available when you need it.', icon: Rocket },
]

export const pricing = [
  { title: 'Starter Website', price: 'NZ$599', prefix: 'Starting from', suitable: ['Sole traders', 'New businesses', 'Personal services', 'Simple informational websites'], includes: ['Up to 3 pages', 'Mobile-responsive design', 'Contact form', 'Basic SEO setup', 'Social media links', 'One revision round'], button: 'Request a Quote' },
  { title: 'Business Website', price: 'NZ$1,199', prefix: 'Starting from', popular: true, suitable: ['Small businesses', 'Tradespeople', 'Service providers', 'Growing businesses'], includes: ['Up to 6 pages', 'Custom responsive design', 'Contact or enquiry forms', 'Basic SEO setup', 'Google Maps integration', 'Analytics setup', 'Two revision rounds'], button: 'Request a Quote' },
  { title: 'Custom Web Application', price: 'Custom Quote', prefix: 'Built for your workflow', suitable: ['Booking systems', 'Customer portals', 'Dashboards', 'Internal business tools', 'Database-driven applications'], includes: ['Requirements consultation', 'Custom interface', 'Database integration', 'User authentication when required', 'Testing and deployment', 'Ongoing support options'], button: 'Discuss Your Project' },
]

export const contactDetails = [
  { label: 'Phone', value: '027 207 8245', href: 'tel:+64272078245', icon: Phone },
  { label: 'Email', value: 'a.tayao1224@gmail.com', href: 'mailto:a.tayao1224@gmail.com', icon: Mail },
  { label: 'Location', value: 'Rolleston, Canterbury, New Zealand', icon: MapPin },
  { label: 'Website', value: 'arstechsolutions.com', href: 'https://arstechsolutions.com', icon: Globe2 },
]

export const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com/', icon: Share2 },
  { label: 'Messenger', href: 'https://m.me/', icon: MessageCircle },
]
