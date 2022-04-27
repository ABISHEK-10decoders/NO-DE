import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

let users = [];
//all routes in users must stareted as "/"
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);

})
router.post("/", (req, res) => {

    const user = req.body


    const userID = uuidv4();
    const DataUser = { ...user, id: userID };
    users.push(DataUser);
    res.send(`Hello ${DataUser.firstName} Your was added in Database , and this is your "${DataUser.id}" ID`);

})
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with ${id} was deleted from Database`);
})
router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(user => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    users.push(user)
    res.send(`User with ${id} was edied to Database`);


})
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id === id);
    res.send(user)


})
export default router;