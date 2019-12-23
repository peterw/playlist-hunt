const express = require("express");
const os = require("os");
const fs = require("fs"); 

const app = express();

app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/api/getAllPlaylists", (req, res) => {
    fs.readFile('./public/playlists.json', 'utf8', function(err, contents) {
      if (err) throw err;
      let parsedJson = JSON.parse(contents);
      res.send({content: parsedJson});
    });
})

app.get("/api/scrapPlaylistsOffReddit", (req, res) =>

  // get data from Reddit

  // gets posts with spotify link 

  // check if link is already in playlists.json, else add 

  res.send({ hi: 'hi' })
);
app.listen(process.env.PORT || 8080, () =>
  // schedule to run getPlaylists once or twice per day
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
