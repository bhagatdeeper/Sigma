const express = require("express");

const app = express();
// console.log(app);

app.use((req, res) => {
    res.send('Sorry, the requested page was not found.');
});

let port = 3000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// app.use((req, res) => {
//     console.log(`recieving response`);
//     res.send({
//         name: "Pranjal",
//         age: 19
//     });
// })
    app.get("/", (req, res) => {
        res.send("you contacted root path");
    });
    app.get("/search", (req, res) => {
        let {q} = req.query;
        res.send(`you contacted search path<br>
            search results for query: ${q}`);
    });
    app.get("/help", (req, res) => {
        res.send("you contacted help path");
    });
    // app.get("*", (req, res) => {
    //     res.send("This path doesn't exist!");
    // });
    app.get("/:user/:id", (req, res) => {
        let {user, id} = req.params;
        console.log(`welcome @${user}`);
    });

    app.get("/register", (req, res) => {
        res.send("This is a GET response");
    });
    app.post("/register", (req, res) => {
        res.send("This is a POST response");
    });

    