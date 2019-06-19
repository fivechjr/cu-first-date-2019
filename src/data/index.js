module.exports.clubs = require('./_clubs.json')
module.exports.clubPath = function(club) {
    return `/clubs/${club.slug}`
}
