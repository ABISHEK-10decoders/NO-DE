// const arr3 = ["hey", "hello", "wassup", "goodmorning", "hi", "howdy"]
// const arr = [1, 2, 3];
// const arr2 = [...arr];
// const EXARRAY = [55,69];

// function xyz ( x,y,...z){
//     console.log ( x ,z)
//     console.log (z)
// }
// xyz(...arr3,arr)

// // console.log (arr2);
// const arrow =( x, y, z)=>{
//     // console.log (x, y, z)

// };
// arrow( 2,...arr,...EXARRAY);
// console.log ( 2,...arr, ...EXARRAY)


// function abc(a,c,...b) {
//     console.log (a)
//     console.log (b)
//     console.log (c)
//   }
//   abc(arr,arr3,arr2)


console.log("First Console");


setTimeout(function second() {
    console.log("second Console");
}, (0));
console.log("thrid Console")

const Fourth = () => {
    setTimeout(function four() {
        console.log("fourth Console");
    }, (6000));
}
Fourth()
// const EventEmitter = require("events");
import EventEmitter from "events"

// const OffEvent = new EventEmitter();

// OffEvent.on("Clicked", (result) => {
//     if (result == "Boo") {

//         console.log("The Clicked event was fired")
//     }
// })
// OffEvent.on("MouseDown", (result) => {
//     if (result === "Boo") {

//         console.log("The MouseDown event was fired")
//     }
// })
// process.on("exit", (code) => {
//     console.log("process exit event with code ", code)
// })
// OffEvent.emit("Clicked", "Boo");
// OffEvent.emit("MouseDown");