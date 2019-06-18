import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Hero from '../components/sections/hero'
import FirstDate from '../components/sections/first-date'
import Intro from '../components/sections/intro'
import Clubs from '../components/sections/clubs'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <FirstDate />
        <Intro />
        <Clubs />
    </Layout>
)

export default IndexPage