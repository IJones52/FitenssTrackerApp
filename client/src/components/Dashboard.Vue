<template>
    <v-layout  column>
        <!--Look into vue-chartjs for something for weight or calories-->
        <v-flex  >
            <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Exercises</v-toolbar-title>
                    <v-spacer/>
                    <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details>             
                        </v-text-field>
                    <v-btn  class="mx-2" fab dark color="indigo">
                        <v-icon dark>+</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table
                :headers="exercise_headers"
                :items="exercises"
                :search="search"
                height="300px"
                hide-default-footer
                >
                </v-data-table>
            </div>
        </v-flex>
        <v-divider/>
        <v-flex >
            <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Workouts</v-toolbar-title>
                    <v-spacer/>
                    <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details>             
                        </v-text-field>
                    <v-btn class="mx-2" fab dark color="indigo">
                        <v-icon dark>+</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table
                :headers="workout_headers"
                :items="workouts"
                :search="search"
                hide-default-footer
                height="300px"
                >
                </v-data-table>
            </div>
        </v-flex>
    </v-layout>
    
</template>

<script lang="js">
    import exercisesService from '@/services/exercisesService'
    import workoutService from '@/services/workoutService'
    export default {
    data(){
        return {
                exercise_headers: [
                    {
                        text: 'Exercise',
                        align: 'start',
                        value: 'name'
                    },
                    {text: 'Focus', value: 'focus'},
                    {text: 'Link', value: 'link'}
                ],
                exercises: undefined,
                workouts: [],
                workout_headers: [
                    {text: 'Routine', align:'start', value:'name'},
                    {text: 'Exercises', value:'exercise_names'}
                ],
                
            }
    },
    created(){
       
        this.getExercises(this.$store.getters.userId)
        this.getWorkouts(this.$store.getters.userId)
        
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

            async getWorkouts(id){
                console.log('getting workouts id:', id)
                try{
                    const response = await workoutService.getAllWorkouts({
                            UserId: id
                        }
                    )
                    //Put the exercise names into a list for each workout
                    const exercise_names = []

                    response.data.exercise_names = exercise_names
                    this.workouts = response.data
                }
                catch(err){
                    console.log("workouts broke")
                }
            }

    }

  }
</script>
<style scoped>
    
</style>


 
