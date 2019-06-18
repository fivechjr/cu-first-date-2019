import { Fragment } from 'react'
import Head from 'next/head'
import Hero from '../components/sections/hero'
import FirstDate from '../components/sections/first-date'
import Intro from '../components/sections/intro'
import Clubs from '../components/sections/clubs'

function Home() {
    return (
        <Fragment>
            <Head>
                <title>CU First Date 2019</title>
            </Head>
            <Hero />
            <FirstDate />
            <Intro />
            <Clubs />
        </Fragment>
    )
}

export default Home
