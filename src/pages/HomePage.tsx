import React, { useEffect, useRef } from 'react'
import EcoenvasesSection from '../components/EcoenvasesSection'

// Placeholder components for each section
const Section1 = () => <div className='h-dvh'>Section 1 Content</div>
const Section2 = () => <div><EcoenvasesSection /></div>
const Section3 = () => <div>Section 3 Content</div>
const Section4 = () => <div>Section 4 Content</div>
const Section5 = () => <div>Section 5 Content</div>
const Section6 = () => <div>Section 6 Content</div>
const Section7 = () => <div>Section 7 Content</div>
const Section8 = () => <div>Section 8 Content</div>

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {[Section1, Section2, Section3, Section4, Section5, Section6, Section7, Section8].map(
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