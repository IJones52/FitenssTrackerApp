import api from '@/services/api'
export default {
    getAllEntries(credentials) {
        return api().get('/weight/all?UserId=' + credentials.UserId)
    },

    newEntry(credentials){
        return api().post('/weight/new',credentials)
    },

}