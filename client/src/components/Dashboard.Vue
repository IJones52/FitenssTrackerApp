<template>
    <v-layout  column>
        <v-layout>
            <v-flex xs6>
                <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Calorie Tracker</v-toolbar-title>
                </v-toolbar>
                </div>
                <GChart type="PieChart" :data="calorieData" :options="calorieOptions" />
            </v-flex>
            <v-flex  xs1/>
            <v-flex xs6>
                <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Weight Tracker</v-toolbar-title>
                </v-toolbar>
                </div>
                <GChart type="LineChart" :data="weightData" :options="weightOptions"/>
            </v-flex>
        </v-layout>
        <v-flex >
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
                workouts: undefined,
                workout_headers: [
                    {text: 'Routine', align:'start', value:'name'},
                    {text: 'Exercises', value:'exercise_names'}
                ],
                weightData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
                weightOptions: {
                
                title: 'Weight',
                curveType: 'function'
        },
                calorieData:[ ['Language', 'Speakers (in millions)'],
                ['', 2100], ['Calories Consumed', 550]],
                calorieOptions: {
                    pieHole: .7,
                    pieSliceText:'none',
                    title: 'Daily Calories',
                    slices: {
                        0: {color: 'transparent'},
                        1: {color:  'blue'}
                    }
                },
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
                    const exercise_names = [1,2]

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


 
