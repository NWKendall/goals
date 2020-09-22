const router = require("express").Router();
const usersDB = require("./users.model.js");

router.get("/", (req, res) => {
    usersDB.getUsers().then(users => {
        return res.status(200).json(users);

    }).catch(({name, code, stack, message}) => {
        res.status(400).json({name, code, stack, message})
    })    
})


module.exports = router;