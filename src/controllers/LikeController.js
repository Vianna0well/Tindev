const Dev = require('../models/dev');
module.exports = {
    async store(req, resp) {

        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev){
            return resp.status(400).json({ error: 'Dev not exists' })
        };

        if (targetDev.likes.includes(loggedDev._id)){
            console.log('Match!')
        };

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return resp.json(loggedDev);
    }
};