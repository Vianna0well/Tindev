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

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return resp.json(loggedDev);
    }
};