import express from "express";
// import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from "morgan";
const app = express();

app.use(express.json());
// app.use(cors({
//     origin: frontendUrl,
//     credentials: true
// }));

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(morgan("dev"));

app.use("/ping", function (req, res) {
    res.send("Pong")
})
export default app;