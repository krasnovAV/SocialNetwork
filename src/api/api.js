import {instance} from "./instance";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 20) { // 1 и 20 значения по умолчанию
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId){
        return instance.post(`follow/`+ userId)
    },

    unfollow(userId){
        return instance.delete(`follow/`+ userId)
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
    }
}


