/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fs = require('fs')
const path = require('path')
const { clubs, clubPath } = require('./src/data')

exports.createPages = async ({ actions }) => {
    const { createPage } = actions
    for (const club of clubs) {
        createPage({
            path: clubPath(club),
            component: path.resolve(`src/templates/club.jsx`),
            context: club
        })
    }
}
