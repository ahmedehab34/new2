const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello from Elastic Beanstalk 🚀"));
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.listen(port, () => console.log(`Listening on ${port}`));
