
import { get } from "https";

const req = get("https://www.google.com/", (res) => {
    res.on("data", (chunk) => {
        console.log(` Data of ................................................................. ${chunk}`);
    })
    res.on("end", () => {
        console.log("End Cardra................................................................ Mamaeee! ");
    })
});
req.end();