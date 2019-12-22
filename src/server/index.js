const express = require("express");
const os = require("os");
const fs = require("fs"); 

const app = express();

app.use(express.static("dist"));
app.use(express.static("public"));

app.get("/api/lol", (req, res) => {
    fs.readFile('./public/playlists.json', 'utf8', function(err, contents) {
      if (err) throw err;
      let parsedJson = JSON.parse(contents);
      res.send({content: parsedJson});
    });
})

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
