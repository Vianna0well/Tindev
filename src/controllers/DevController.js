const axios = require('axios');
const Dev = require('../models/dev');

module.exports = {
    async index(req, resp) {
        const { user } = req.headers;
        
        const loggedDev = Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedDev.likes } },
                { _id: { $nin: loggedDev.dislikes } }
            ],
        });
        return resp.json(users);
    },

    async store(req, resp) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });
        if(userExists) {
            return resp.json(userExists);
        };

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return resp.json(dev);
    }
}