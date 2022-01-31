import { instance } from './api';

export const UserAPI = {
    getUsers: () => {
        return instance
            .get(`/users`, {
                params: {
                    fields: 'id,login,email,name',
                    $skip: 1,
                },
            })
            .then((response) => response.data)
            .catch((err) => err);
    },
};
