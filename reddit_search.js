const config = require('./config.json')
// const playlist_json = require('./playlists.json')
const snoowrap = require('snoowrap');

const r = new snoowrap({
userAgent: config.username,
clientId: config.clientId,
clientSecret: config.clientSecret,
username: config.username,
password: config.password
});


r.getSubreddit('SpotifyPlaylists').getNew().map( post => {
    // first body is for urls that not already in the playlist_json
    // if (JSON.stringify(playlist_json).includes(post.url) == false) {
        const myObj  = {
            "title": post.title,
            "url": post.url,
            "desc": "",
            "date": "Jan 6 2019"
        }
        console.log(JSON.stringify(myObj) + ",")
    // } 
})

