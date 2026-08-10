import HomeHero from '../sections/HomeHero'
import ValueStrip from '../sections/ValueStrip'
import HomeSelectedWork from '../sections/HomeSelectedWork'
import HomeServices from '../sections/HomeServices'
import HomeWhy from '../sections/HomeWhy'
import Process from '../sections/Process'
import FounderPreview from '../sections/FounderPreview'
import Testimonials from '../sections/Testimonials'
import HomeFaq from '../sections/HomeFaq'
import Contact from '../sections/Contact'

export default function HomePage() {
  return <>
    <HomeHero />
    <ValueStrip />
    <HomeSelectedWork />
    <HomeServices />
    <HomeWhy />
    <Process />
    <FounderPreview />
    <Testimonials />
    <HomeFaq />
    <Contact context="home" />
  </>
}
