import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import HeroSection from './components/HeroSection'
import SupportSkinJourney from './components/SupportSkinJourney'
import ChooseMedijoy from './components/ChooseMedijoy'
import WhatClientsSay from './components/WhatClientsSay'
import SkinConcernsPage from './pages/SkinConcernsPage'
import SkinConcernDetailPage from './pages/SkinConcernDetailPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import MeetJoyPage from './pages/MeetJoyPage'
import ProvenResultsPage from './pages/ProvenResultsPage'
import FaqPage from './pages/FaqPage'
import AboutMedijoyPage from './pages/AboutMedijoyPage'
import FindSkinConcern from './components/FindSkinConcern'
import FindOurServices from './components/FindOurServices'
import MeetCeo from './components/MeetCeo'
import ProvenResults from './components/ProvenResults'
import Faq from './components/Faq'

function HomePage() {
  return (
    <>
      <HeroSection />
      <FindSkinConcern/>
      <FindOurServices/>
      <SupportSkinJourney />
      <ChooseMedijoy />
      <MeetCeo/>
      <WhatClientsSay />
      <ProvenResults/>
      <Faq/>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route
        path="/about-medijoy"
        element={<Layout><AboutMedijoyPage /></Layout>}
      />
      <Route
        path="/skin-concerns"
        element={<Layout><SkinConcernsPage /></Layout>}
      />
      <Route
        path="/skin-concerns/:slug"
        element={<Layout><SkinConcernDetailPage /></Layout>}
      />
      <Route
        path="/services"
        element={<Layout><ServicesPage /></Layout>}
      />
      <Route
        path="/services/:slug"
        element={<Layout><ServiceDetailPage /></Layout>}
      />
      <Route
        path="/meet-joy"
        element={<Layout><MeetJoyPage /></Layout>}
      />
      <Route
        path="/proven-results"
        element={<Layout><ProvenResultsPage /></Layout>}
      />
      <Route
        path="/faqs"
        element={<Layout><FaqPage /></Layout>}
      />
    </Routes>
  )
}

export default App
