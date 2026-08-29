import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  BarChart3,
  Boxes,
  Camera,
  ClipboardList,
  Code2,
  Database,
  History,
  LayoutDashboard,
  ListChecks,
  MapPinned,
  PackagePlus,
  PackageSearch,
  Pause,
  Play,
  Printer,
  ScanLine,
  Server,
  Smartphone,
  X,
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import Contact from '../sections/Contact'
import dashboardImage from '../assets/projects/kiss-web/01-dashboard.webp'
import locationsImage from '../assets/projects/kiss-web/02-locations-pallets.webp'
import addPalletsImage from '../assets/projects/kiss-web/03-add-pallets.webp'
import productsImage from '../assets/projects/kiss-web/04-products.webp'
import ordersImage from '../assets/projects/kiss-web/05-orders-list.webp'
import orderViewImage from '../assets/projects/kiss-web/06-order-view.webp'
import reportImage from '../assets/projects/kiss-web/07-orders-report.webp'
import scannerImage from '../assets/projects/kiss-web/08-pallet-scanner.webp'
import mobileDashboardImage from '../assets/projects/kiss-web/mobile-dashboard.webp'
import mobileLocationsImage from '../assets/projects/kiss-web/mobile-locations-pallets.webp'
import mobileOrdersImage from '../assets/projects/kiss-web/mobile-orders-list.webp'
import mobileScannerImage from '../assets/projects/kiss-web/mobile-scanner.webp'
import walkthroughGif from '../assets/projects/kiss-web/kiss-web-walkthrough-safe.gif'

const features = [
  { title: 'Warehouse dashboard', text: 'An operational overview brings important warehouse activity and common actions into one starting point.', icon: LayoutDashboard },
  { title: 'Locations & pallet inventory', text: 'Warehouse and location-based interfaces keep pallet, quantity and stock information organised.', icon: MapPinned },
  { title: 'Product & SKU summaries', text: 'Product-level views make it easier to review SKU records and the quantities held across locations.', icon: PackageSearch },
  { title: 'Add & import pallets', text: 'Pallet records can be added in the interface or prepared through the available import workflow.', icon: PackagePlus },
  { title: 'Order management', text: 'Orders can be created, reviewed and followed through clear operational statuses.', icon: ClipboardList },
  { title: 'Picking & checking', text: 'Fulfilment work is supported through connected picking and checking steps before dispatch.', icon: ListChecks },
  { title: 'Dispatch documents', text: 'Courier details, packing slips and label-related actions sit alongside the order workflow.', icon: Printer },
  { title: 'Reports & charts', text: 'Orders and operational activity can be reviewed through date-based reports and visual summaries.', icon: BarChart3 },
  { title: 'History & notifications', text: 'Transaction history and in-application notifications help users follow recent activity.', icon: History },
  { title: 'QR pallet scanning', text: 'The browser camera can open pallet records by QR code, with manual pallet ID entry as a fallback.', icon: ScanLine },
]

const desktopScreens = [
  { src: dashboardImage, width: 1265, height: 1087, title: 'Warehouse dashboard', caption: 'Operational overview cards, recent activity and quick links to common warehouse tasks.', alt: 'Redacted KISS-Web warehouse dashboard with overview cards, recent activity and quick actions' },
  { src: locationsImage, width: 1280, height: 1100, title: 'Location and pallet inventory', caption: 'Location-based pallet records with search, selection and stock-management actions.', alt: 'Redacted KISS-Web product locations screen with pallet inventory table and search controls' },
  { src: addPalletsImage, width: 1280, height: 1100, title: 'Add and import pallets', caption: 'A structured pallet-entry workflow with row creation and file import options.', alt: 'Redacted KISS-Web add pallets screen with pallet entry rows and import controls' },
  { src: productsImage, width: 1280, height: 1100, title: 'Product and SKU summary', caption: 'A searchable summary of product records and quantities held across current locations.', alt: 'Redacted KISS-Web products summary with search controls and SKU quantity table' },
  { src: ordersImage, width: 1280, height: 1100, title: 'Orders and status tracking', caption: 'Order creation, status filtering and fulfilment actions within one operational list.', alt: 'Redacted KISS-Web orders list showing status filters and order workflow actions' },
  { src: orderViewImage, width: 1265, height: 1087, title: 'Picking and checking workflow', caption: 'A detailed order view connecting picking, checking, labels and pallet scanning.', alt: 'Redacted KISS-Web order view with picking details, checking fields and fulfilment actions' },
  { src: reportImage, width: 1265, height: 1087, title: 'Orders reporting', caption: 'Date-based operational reporting with summary measures, charts and PDF export.', alt: 'Redacted KISS-Web orders report with date controls, summary cards and chart areas' },
  { src: scannerImage, width: 1280, height: 1100, title: 'Pallet scanner', caption: 'Browser-camera QR scanning with a manual pallet ID fallback when a camera is unavailable.', alt: 'Redacted KISS-Web pallet scanner with camera area and manual pallet ID field' },
]

const mobileScreens = [
  { src: mobileDashboardImage, width: 375, height: 812, title: 'Dashboard on mobile', caption: 'Overview cards reflow into a practical narrow-screen layout.', alt: 'Redacted mobile KISS-Web dashboard with responsive overview cards' },
  { src: mobileLocationsImage, width: 390, height: 844, title: 'Pallet locations on mobile', caption: 'Location and pallet records remain usable within a touch-friendly mobile view.', alt: 'Redacted mobile KISS-Web product locations and pallet inventory view' },
  { src: mobileOrdersImage, width: 390, height: 844, title: 'Orders on mobile', caption: 'Order statuses, filters and actions adapt for a narrow portrait screen.', alt: 'Redacted mobile KISS-Web orders list with responsive status and order cards' },
  { src: mobileScannerImage, width: 390, height: 844, title: 'QR scanning on mobile', caption: 'The scanning workflow is sized for a phone camera with manual ID entry available.', alt: 'Redacted mobile KISS-Web QR pallet scanner with manual pallet ID fallback' },
]

const technologyGroups = [
  { label: 'Backend', values: ['PHP 8.2'], icon: Code2 },
  { label: 'Database', values: ['MySQL'], icon: Database },
  { label: 'Server', values: ['Apache'], icon: Server },
  { label: 'Frontend', values: ['HTML', 'CSS', 'JavaScript'], icon: Smartphone },
  { label: 'Application capabilities', values: ['Responsive layouts', 'Browser camera / QR scanning'], icon: Camera },
]

export default function KissWebCaseStudyPage() {
  return <><article className="case-study kiss-case-study">
    <header className="case-study__hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">›</span><a href="/work">Work</a><span aria-hidden="true">›</span><span aria-current="page">KISS-Web</span>
        </nav>
        <a className="case-study__back" href="/work"><ArrowLeft /> All work</a>
        <div className="case-study__heading">
          <div>
            <p className="eyebrow">Custom business application</p>
            <h1>KISS-Web Warehouse Management System</h1>
            <p>A responsive warehouse-management application for inventory, pallet locations, orders, fulfilment, reporting and QR scanning.</p>
          </div>
          <dl>
            <div><dt>Application type</dt><dd>Database-backed internal business system</dd></div>
            <div><dt>Deployment</dt><dd>Private warehouse application</dd></div>
            <div><dt>Related service</dt><dd><a href="/web-development#custom-web-applications">Custom Web Applications</a></dd></div>
            <div><dt>ARS Tech Solutions role</dt><dd>Planning, interface design and full-stack development</dd></div>
          </dl>
        </div>
      </div>
    </header>
    <div className="container case-study__visual">
      <img src={dashboardImage} alt="Redacted KISS-Web warehouse dashboard showing operational overview cards and quick actions" width="1265" height="1087" fetchPriority="high" />
    </div>
    <section className="section kiss-overview">
      <div className="container kiss-overview__grid">
        <div>
          <p className="eyebrow">Project overview</p>
          <h2>One application for connected warehouse work</h2>
          <p>KISS-Web connects day-to-day warehouse records and workflows in one full-stack, database-backed interface. The published screens are redacted to protect operational data.</p>
        </div>
        <div className="kiss-overview__facts" aria-label="KISS-Web project characteristics">
          <div><Boxes aria-hidden="true" /><span>System scope</span><strong>Inventory, pallets, orders and fulfilment</strong></div>
          <div><Database aria-hidden="true" /><span>Application model</span><strong>Database-backed business software</strong></div>
          <div><Smartphone aria-hidden="true" /><span>Interface</span><strong>Responsive desktop and mobile layouts</strong></div>
          <div><Server aria-hidden="true" /><span>Outcome</span><strong>Private internal warehouse application</strong></div>
        </div>
      </div>
    </section>

    <section className="section section--tint kiss-problem-solution">
      <div className="container">
        <div className="kiss-brief-grid">
          <article>
            <p className="eyebrow">The problem</p>
            <h2>Fragmented warehouse work needed one clear system.</h2>
            <p>Inventory, pallet locations, stock movement and order fulfilment needed one consistent system instead of disconnected manual processes.</p>
          </article>
          <article>
            <p className="eyebrow">The ARS solution</p>
            <h2>A responsive application shaped around the workflow.</h2>
            <p>ARS Tech Solutions planned and built a connected application that keeps the records and actions for each warehouse workflow clear.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="section kiss-features">
      <div className="container">
        <SectionHeading eyebrow="Major features" title="Warehouse workflows in one application" text="Each feature supports a specific operational task while sharing connected data." />
        <div className="kiss-feature-grid">
          {features.map(({ title, text, icon: Icon }) => <article key={title}><span><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section section--tint kiss-desktop-gallery" id="desktop-gallery">
      <div className="container">
        <SectionHeading eyebrow="Desktop application gallery" title="Real screens across the warehouse workflow" text="These supplied captures show different parts of the application. Operational information remains redacted in every published image." />
        <ScreenshotGallery items={desktopScreens} variant="desktop" label="KISS-Web desktop application screenshots" />
      </div>
    </section>

    <section className="section section--tint kiss-mobile">
      <div className="container">
        <SectionHeading eyebrow="Mobile experience" title="Responsive where warehouse work needs it" text="KISS-Web adapts its operational screens for phones without presenting the entire system as mobile-first." />
        <ScreenshotGallery items={mobileScreens} variant="mobile" label="KISS-Web mobile application screenshots" />
      </div>
    </section>

    <section className="section kiss-walkthrough">
      <div className="container">
        <SectionHeading eyebrow="See KISS-Web in action" title="A walkthrough of selected application screens" text="The walkthrough is assembled from the same real, redacted KISS-Web captures used in this case study." />
        <Walkthrough />
      </div>
    </section>

    <section className="section section--tint kiss-technology">
      <div className="container">
        <SectionHeading eyebrow="Technology" title="A practical full-stack application" text="KISS-Web combines a server-side application, relational database and responsive browser interface." />
        <div className="kiss-tech-grid">
          {technologyGroups.map(({ label, values, icon: Icon }) => <article key={label}><Icon aria-hidden="true" /><span>{label}</span>{values.map(value => <strong key={value}>{value}</strong>)}</article>)}
        </div>
      </div>
    </section>

  </article><Contact context="work" /></>
}

function ScreenshotGallery({ items, variant, label }) {
  const dialogRef = useRef(null)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) dialogRef.current.showModal()
  }, [selected])

  const closeDialog = () => {
    if (dialogRef.current?.open) dialogRef.current.close()
    else setSelected(null)
  }

  return <>
    <div className={`kiss-gallery kiss-gallery--${variant}`} aria-label={label}>
      {items.map(item => <figure className="kiss-screenshot-card" key={item.title}>
        <button className="kiss-screenshot-trigger" type="button" onClick={() => setSelected(item)} aria-label={`Enlarge ${item.title}`} aria-haspopup="dialog">
          <img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
        </button>
        <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
      </figure>)}
    </div>
    <dialog className={`kiss-lightbox kiss-lightbox--${variant}`} ref={dialogRef} onClose={() => setSelected(null)} onClick={event => event.target === event.currentTarget && closeDialog()} aria-label={selected ? `Expanded screenshot: ${selected.title}` : 'Expanded KISS-Web screenshot'}>
      {selected && <div className="kiss-lightbox__panel">
        <button className="kiss-lightbox__close" type="button" onClick={closeDialog} aria-label="Close expanded screenshot"><X aria-hidden="true" /></button>
        <img src={selected.src} alt={`Expanded view: ${selected.alt}`} width={selected.width} height={selected.height} />
        <p><strong>{selected.title}</strong><span>{selected.caption}</span></p>
      </div>}
    </dialog>
  </>
}

function Walkthrough() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPlaying(!reducedMotion.matches)
    update()
    reducedMotion.addEventListener?.('change', update)
    return () => reducedMotion.removeEventListener?.('change', update)
  }, [])

  return <figure className="kiss-walkthrough__frame">
    <img src={playing ? walkthroughGif : dashboardImage} alt={playing ? 'Animated walkthrough of real redacted KISS-Web warehouse application screens' : 'Static redacted KISS-Web dashboard fallback for the application walkthrough'} width="1280" height="720" loading="lazy" decoding="async" onError={() => setPlaying(false)} />
    <figcaption><span>{playing ? 'Walkthrough playing' : 'Static walkthrough fallback'}</span><button className="button button--secondary button--small" type="button" onClick={() => setPlaying(value => !value)}>{playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}{playing ? 'Pause walkthrough' : 'Play walkthrough'}</button></figcaption>
  </figure>
}
