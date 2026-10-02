const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`listening on prot ${port}`);
});

app.get("/rolldice", (req, res) => {
    let getNum = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {getNum});
});
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    res.render("insta.ejs", { data });
});