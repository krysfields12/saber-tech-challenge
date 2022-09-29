const express = require("express");
const app = express();
const bookRouter = require("./routes/books")

const PORT = 8080;

const { dbConnection } = require("./db");

const startServer = async() => {
    await dbConnection.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!~`);
    });
}
startServer();

//Start of all middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", bookRouter);

app.get("/", (req, res) => {
    res.send("Hello :)")
})