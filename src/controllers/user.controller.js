const User = require('../models/user');

class UserController {

    static async createUser(req, res) {
        try {
            const user = new User(req.body);
            const newUser = user.save();
            res.status(201).send(newUser);
        }
        catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    }


    static async findUserByName(req, res) {
        try {
            const { username } = req.body;
            const foundUser = await User.findOne({
                username
            });
            if (!foundUser) {
                res.sendStatus(404);
                return;
            }
            res.send(foundUser);
        }
        catch (err) {
            console.log(err);
            sendStatus(500);
        }
    }

}

module.exports = UserController;