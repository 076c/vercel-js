const { readFileSync } = require("fs");

const express = require("epxress");
const app = express();

app.get("/", (req, res) => {
    console.log("hi :D");
});

app.post("/", (req, res) => {
    const { body } = req;
    const { scriptexample } = body;

    console.log("hi :D");
});

if (!process.env.VERCEL) {
    app.listen(6969, "Listening on http://localhost:6969, visit to test.");
}