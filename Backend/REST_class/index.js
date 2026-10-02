const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "views");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: "1a",
        username: "pranjalgupta",
        content: "I love coding",
    },
    {
        id: "2b",
        username: "ankitagupta",
        content: "Hard work is important to achieve success",
    },
    {
        id: "3c",
        username: "anjaligupta",
        content: "I got my 1st internship",
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts")
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", {post});
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});