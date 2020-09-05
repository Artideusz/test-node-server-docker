const express = require("express");
const app = express();

let count = 0;

// Only hex allowed. Why? Because I am lazy!

function quickCheapValidation(str) {
    return /^\#\d{6}$/.test(str) ||      // #112233
           /^\#\d{3}$/.test(str)         // #123
}

app.get("/", (req, res) => {
    count++;
    res.send(
        `<html>
            <head>
                <title>Docker test</title>
            </head>
            <body style="background-color: ${quickCheapValidation(process.env.BACKGROUND) ? process.env.BACKGROUND : "yellow"}">
                <h1 style="font-family: Monospace"><b>Hello World</b></h1>
                <p>Entries: ${count}</p>
            </body>
        </html>`);
})

app.listen(8080, '0.0.0.0', () => { console.log(`Listening on port: 0.0.0.0:8080`) })
