import axios from "axios";

export const instance = axios.create({
    withCredentials: true,  // прикрепляем идентификационную куку ко всем запросам
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2c2edca1-c413-48b3-ab9a-10cd3d1f5d35"
    },
})