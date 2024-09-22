import React, { useEffect, useRef } from 'react'
import EcoenvasesSection from '../components/EcoenvasesSection'
import ContactoSection from '../components/ContactoSection'
import AliadosSection from '../components/AliadosSection'
import PrimerCompraSection from '../components/PrimeraCompraSection'
import ConjuntaSection from '../components/ConjuntaSection'
import NosotrosSection from '../components/NosotrosSection'
import AvalaSection from '../components/AvalaSection'
import GeneralInfo from '../components/GeneralInfo'
import HeroSection from '../components/HeroSection'

// Placeholder components for each section
const Section1 = () => <div><HeroSection /></div>
const Section2 = () => <div><EcoenvasesSection /></div>
const Section3 = () => <div><ContactoSection /></div>
const Section4 = () => <div><AliadosSection /></div>
const Section5 = () => <div><PrimerCompraSection /></div>
const Section6 = () => <div><ConjuntaSection /></div>
const Section7 = () => <div><NosotrosSection /></div>
const Section8 = () => <div><AvalaSection /></div>
const Section9 = () => <div><GeneralInfo /></div>

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {[Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8, Section9].map(
        (Section, index) => (
          <div
            key={index}
            className="section" // Eliminamos la clase condicional
          >
            <Section />
          </div>
        )
      )}
    </div>
  )
}

export default HomePage