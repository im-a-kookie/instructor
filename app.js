const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;

const connectionString = process.env.DATABASE_URL;

mongoose.connect(connectionString);
app.listen(port, () => console.log(`App listening on port ${port}!`))
app.get("/", (req, res) => res.type('html').send(html));

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <style>
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello!
    </section>
  </body>
</html>
`
