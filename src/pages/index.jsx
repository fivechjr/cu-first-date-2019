import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Hero from '../components/sections/hero'
import FirstDate from '../components/sections/first-date'
import Intro from '../components/sections/intro'
import Clubs from '../components/sections/clubs'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        {/* <FirstDate /> */}
        <Intro />
        <Clubs />
    </Layout>
)

export default IndexPage
