import express from "express";
import bodyParser from "body-parser";
import RouterUser from "./routes/user.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// localhost:5000/user
app.use("/users", RouterUser);
app.get("/", (req, res) => {

    console.log("TEST");
    res.send("Hello")
})
app.listen(PORT, () => { console.log(`Server was Running on a http://localhost:${PORT}`); });