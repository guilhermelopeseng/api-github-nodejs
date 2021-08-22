import { Router } from 'express';

import GetUserInfoService from '../services/GetUserInfoService';

const userinfoRouter = Router();

userinfoRouter.post('/', async (request, response) => {
    try {
        const { username } = request.body;

        const getUserInfo = new GetUserInfoService();

        const { login, name, bio } = await getUserInfo.execute({ username });

        return response.json({ login: login, name: name, bio: bio });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default userinfoRouter;
