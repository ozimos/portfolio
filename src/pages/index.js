import React from "react"

import Intro from 'components/landing/Intro'
import Projects from 'components/landing/Projects'
import Skills from 'components/landing/Skills'
import Contact from 'components/landing/Contact'
import Footer from 'components/theme/Footer'
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Intro />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
  </>
)

export default IndexPage
