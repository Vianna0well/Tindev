const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

mongoose.connect('mongodb+srv://tindev:tindev@tindev-qazuv.mongodb.net/semana08?retryWrites=true&w=majority', {
     useNewUrlParser: true, useUnifiedTopology: true 
});

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3001
console.log(`Server is running on port: ${port}`)

app.listen(port);