import api from '@/services/api'

export default {
    getAllExercises (credentials) {
        return api().get('/exercises/all?UserId=' + credentials.UserId)
    },

    newExercise(credentials){
        return api().post('/exercises/new',credentials)
    }
}
