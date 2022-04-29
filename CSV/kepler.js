import { parse } from "csv-parse";
import fs from "fs";

const result = [];
function DemoTable(plants) {
    return plants["koi_disposition"] === 'CONFIRMED'
        && plants["koi_insol"] > 0.36 && plants["koi_insol"] < 1.11
        && plants["koi_prad"] < 1.6;
}

fs.createReadStream("kepler_data.csv")
    .pipe(parse({
        comment: "#",
        columns: true,
    }))
    .on("data", (data) => {
        if (DemoTable(data)) {
            result.push(data);
        }
    })
    .on("error", (err) => {
        console.error(err);
    })
    .on("end", () => {
        console.log(result.length, "PLants was founds");
        console.log("End da.....")
    })
    ;