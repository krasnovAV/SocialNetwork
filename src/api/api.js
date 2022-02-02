import axios from "axios";

const instance = axios.create({
    withCredentials: true,  // прикрепляем идентификационную куку ко всем запросам
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "2c2edca1-c413-48b3-ab9a-10cd3d1f5d35"
    },
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 20) { // 1 и 20 значения по умолчанию
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instance.post(`follow/` + userId)
    },

    unfollow(userId) {
        return instance.delete(`follow/` + userId)
    }
}


export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/` + id)
            .then(response => response.data);
    },

    toggleFr(id) {
        return instance.delete(`profile/` + id)
            .then(response => response.data);
    },

    getUserStatus(id) {
        return instance.get(`profile/status/` + id)
            .then(response => response.data);
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}



