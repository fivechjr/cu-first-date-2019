const path = require('path')
const fs = require('fs')
const { clubs } = require('../data')
const _ = require('lodash')

let data = []
let index = 0

for (const _c of clubs) {
    let c = _.clone(_c, true)
    const directoryPath = path.resolve(`static/clubs/per-club-view/${c.slug}`)
    fs.readdir(directoryPath, function(err, files) {
        let _f = _.pull(files, 'images.json')
        c.images = []
        if (_f && _f.length > 0) {
            let _files = _f.map(f => {
                return '/clubs/per-club-view/' + c.slug + '/' + f
            })
            c.images = _files
        }
        data.push(c)
        index++
        if (index === clubs.length) {
            const dataDirectoryPath = path.resolve(`src/data/_clubs.json`)
            fs.writeFile(dataDirectoryPath, JSON.stringify(data), 'utf8', () => console.log('Yay!'))
        }
    })
}
