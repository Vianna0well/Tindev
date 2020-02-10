const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-qhn6b.mongodb.net/omnistack8?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001);