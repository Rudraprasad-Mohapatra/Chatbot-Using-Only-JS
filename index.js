import app from "./app.js";

const PORT = 5000;

app.listen(PORT,(req, res) => {
    console.log("App running at port", PORT)
})