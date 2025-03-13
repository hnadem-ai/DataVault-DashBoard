const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, './build')));

const port = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:3000" })); 
app.use(bodyparser.json());

app.get("/api/tasks", (req, res) => {
    res.json([
        { id: 1, task: "Buy groceries" },
        { id: 2, task: "Walk the dog" }
    ]);
});

app.listen(port, () => {console.log("Listening at 5000!", process.env.PORT)})