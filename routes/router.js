import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';

let users = [];
//all routes in users must stareted as "/"
router.get('/', (res) => {
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
    const User = users.find(user => user.id === id);
    if (firstName) {
        User.firstName = firstName;
    }
    if (lastName) {
        User.lastName = lastName;
    }
    if (age) {
        User.age = age;
    }
    users.push(User)
    res.send(`User with ${id} was edied to Database`);


})
router.get("/:id", (req, res) => {
    const { id } = req.params;
    const data = users.find(user => user.id === id);
    res.send(data)


})
export default router;