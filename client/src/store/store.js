import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        currentExercise: null,
        currentWorkout: null,
    },
    mutations: {
        setToken(state,token){
            state.token = token
            if (token){
                state.isUserLoggedIn = true
            }
            else{
                state.isUserLoggedIn = false
            }
        },
        setUser(state,user){
            state.user = user
        },
        setCurrentExercise(state, id){
            state.currentExercise = id
        },
        setCurrentWorkout(state, id){
            state.currentWorkout = id
        },
        
    },
    actions: {
        setToken({commit}, token){
            commit('setToken', token)
        },

        setUser({commit}, user){
            commit('setUser', user)
        },
        setCurrentExercise({commit}, id){
            commit('setCurrentExercise',id)
        },
        setCurrentWorkout({commit},id){
            commit('setCurrentExercise',id)
        }

    },
    getters:{
        userId: state => {return state.user.id},
        currentExercise: state=> {return state.currentExercise},
        currentWorkout: state=> {return state.currentWorkout}
    }
    
})