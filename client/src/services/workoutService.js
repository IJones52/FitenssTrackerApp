import api from '@/services/api'

export default {
    getAllWorkouts (credentials) {
        console.log('credentials',credentials.UserId)
        return api().get('/workouts/all?UserId=' + credentials.UserId)
    },
}
