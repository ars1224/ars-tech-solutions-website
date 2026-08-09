import TechSupportHero from '../sections/TechSupportHero'
import TechSupportServices from '../sections/TechSupportServices'
import TechSupportProcess from '../sections/TechSupportProcess'
import Contact from '../sections/Contact'

export default function TechSupportPage() {
  return <>
    <TechSupportHero />
    <TechSupportServices />
    <TechSupportProcess />
    <Contact context="support" />
  </>
}
