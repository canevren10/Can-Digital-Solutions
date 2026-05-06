import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/site/Hero'
import Services from '../components/site/Services'
import Portfolio from '../components/site/Portfolio'
import WhyUs from '../components/site/WhyUs'
import Process from '../components/site/Process'
import Contact from '../components/site/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Contact />
    </>
  )
}
