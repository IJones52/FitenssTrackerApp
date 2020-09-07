<template>
    <v-flex md6 class="center">
            <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Create a Workout</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field type='text' v-model="workout.name" label="Workout Name" placeholder="Legs Workout"/>
                    <v-toolbar>
                        <v-toolbar-title>Select Exercises</v-toolbar-title>
                        <v-spacer/>
                    <v-text-field
                        v-model="exerciseSearch"
                        label="Search"
                        single-line
                        hide-details>             
                        </v-text-field>
                </v-toolbar>
                <v-data-table
                show-select
                v-model="workout.fullExercises"
                :headers="exercise_headers"
                :items="exercises"
                :search="exerciseSearch"
                height="300px"
                hide-default-footer
                >
           
                </v-data-table>
                    <v-btn dark class="indigo" @click="submitWorkout">Submit</v-btn>
                </div>

            </div>
        </v-flex>

</template>

<script>
import workoutService from '@/services/workoutService'
import exercisesService from '@/services/exercisesService'
export default {
  data(){
    return{
       exerciseSearch: '',
       exercises: undefined,
       exercise_headers: [
                    {
                        text: 'Exercise',
                        align: 'start',
                        value: 'name'
                    },
                    {text: 'Focus', value: 'focus'},
                    {text: 'Link', value: 'link'}
                ],

        workout: {
            name:'',
            fullExercises: [],
            exerciseIds: [],
            UserId: this.$store.getters.userId
        },
    }


  },
  created(){
      this.getExercises(this.$store.getters.userId)
  },

  methods: {
    async getExercises(id){
                console.log('getting exercises id:', id)
                try{
                    const response = await exercisesService.getAllExercises({
                            UserId: id
                        }
                    )
                    this.exercises = response.data
                }
                catch(err){
                    console.log("Exercises broke")
                }
            },

    async submitWorkout(){
        console.log('submitting')
        for(let exercise in this.workout.fullExercises){
            this.workout.exerciseIds.push(this.workout.fullExercises[exercise].id)
        }
        console.log(this.workout)
        this.workout.fullExercises = []
        try{
            await workoutService.newWorkout(this.workout)
            //On success navigate home
            this.$router.push({name: 'dashboard'})       
           }
        catch(err){
            console.log(err)
        }
        
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.center{
        margin-left:25%;
        margin-right: 25%;
    }

</style>
