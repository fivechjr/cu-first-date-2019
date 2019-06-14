import { Fragment } from 'react'
import Head from 'next/head'
import Hero from '../components/sections/hero'
import FirstDate from '../components/sections/first-date'
import Intro from '../components/sections/intro'

function Home() {
    return (
        <Fragment>
            <Head>
                <title>CU First Date 2019</title>
            </Head>
            <Hero />
            <FirstDate />
            <Intro />
        </Fragment>
    )
}

export default Home
