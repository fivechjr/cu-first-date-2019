import React from 'react'
import App, { Container } from 'next/app'
import '../resources/tailwind.css'

import NavigationBar from '../components/navigation-bar'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <NavigationBar />
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default MyApp
