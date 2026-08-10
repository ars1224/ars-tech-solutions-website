import Hero from '../sections/Hero'
import WebDevelopmentServices from '../sections/WebDevelopmentServices'
import Process from '../sections/Process'
import WorkPreview from '../sections/WorkPreview'
import Pricing from '../sections/Pricing'
import EngagementDetails from '../components/EngagementDetails'
import Contact from '../sections/Contact'

export default function WebDevelopmentPage() {
  return <>
    <Hero />
    <WebDevelopmentServices />
    <Process />
    <WorkPreview />
    <EngagementDetails />
    <Pricing />
    <Contact context="web" />
  </>
}
