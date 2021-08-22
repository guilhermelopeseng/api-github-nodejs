import axios from 'axios';

interface Request {
    username: string;
}

interface ResponseGithub {
    login: string;
    name: string;
    bio: string;
}

class GetUserInfoService {
    public async execute({ username }: Request) {
        try {
            const { login, name, bio }: ResponseGithub = await axios
                .get(`https://api.github.com/users/${username}`)
                .then(response => {
                    return response.data;
                });
            const UserInfo = {
                login,
                name,
                bio,
            };
            return UserInfo;
        } catch (err) {
            throw new Error('Error request github');
        }
    }
}

export default GetUserInfoService;
