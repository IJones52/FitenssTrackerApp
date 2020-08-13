import api from '@/services/api'

export default {
    getAllExercises (credentials) {
        console.log('credentials',credentials.UserId)
        return api().get('/exercises/all?UserId=' + credentials.UserId)
    },
}
