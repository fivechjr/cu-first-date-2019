/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../resources/tailwind.css'
import Footer from '../components/common/footer'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <main className="antialiased font-sans">{children}</main>
                <Footer />
            </>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
