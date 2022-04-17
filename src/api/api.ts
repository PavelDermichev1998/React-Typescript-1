import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'bf05589b-7ecb-4b86-808b-a9d624d9fb02'
    }
})
export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    }
}
