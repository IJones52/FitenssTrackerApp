<template>
<div id="main">
    <v-layout  column>
        <v-layout>
            <v-flex xs6>
                <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Calorie Tracker</v-toolbar-title>
                </v-toolbar>
                </div>
                <GChart type="PieChart" :data="calorieData" :options="calorieOptions" />
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header><b>Update Your Calories</b></v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field type="number" v-model="calorieValue" name="calorieValue" label="Custom Calorie Value"/>
                            <v-btn class="indigo"  dark @click="updateCalories">Submit</v-btn>
                            
                            <!--Puta data table to display it. need a check box for recipes/ingridents-->
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>
            <v-flex  xs1/>
            <v-flex xs6>
                <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Weight Tracker</v-toolbar-title>
                </v-toolbar>
                </div>
                <GChart id="weightGraph" type="AreaChart" :data="weightData" :options="weightOptions"/>
                <v-expansion-panels>
                    <v-expansion-panel>
                        <v-expansion-panel-header><b>Update Your Weight</b></v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-text-field type="number" v-model="weightValue" name="weightValue" label="Weight"/>
                            <v-btn class="indigo" id="updateWeight" dark @click="updateWeight">Submit</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-flex>
        </v-layout>
        <v-flex >
            <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Exercises</v-toolbar-title>
                    <v-spacer/>
                    <v-text-field
                        v-model="exerciseSearch"
                        label="Search"
                        single-line
                        hide-details>             
                        </v-text-field>
                    <v-btn  class="mx-2" @click="exerciseRedirect" fab dark color="indigo">
                        <v-icon dark>+</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-data-table
                v-model="selected"
                :headers="exercise_headers"
                :items="exercises"
                :search="exerciseSearch"
                height="300px"
                hide-default-footer
                >
                   <template slot="item" slot-scope="props">
                        <tr  @click="openExercise(props.item)">
                        <td>{{props.item.name}}</td>
                        <td>{{props.item.focus}}</td>
                        <td>{{props.item.link}}</td>
                        </tr>

                    </template>
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
                        v-model="workoutSearch"
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
                :search="workoutSearch"
                hide-default-footer
                height="300px"
                >
                </v-data-table>
            </div>
        </v-flex>
    </v-layout>
</div>
</template>

<script lang="js">
    import exercisesService from '@/services/exercisesService'
    import workoutService from '@/services/workoutService'
    import weightService from '@/services/weightService'
   

    export default {
    data(){
        return {
                exerciseSearch:'',
                workoutSearch:'',
                calorieValue: 0,
                weightValue: undefined,
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
                    ['Date', 'Weight']
                ],
                weightOptions: {
                
                title: 'Weight',
                curveType: 'function',
                hAxis: {
                    titleTextStyle: {color: '#607d8b'}, 
                    gridlines: { color:'#37474f', count:1}, 
                    textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
                },
                vAxis: {
                    minValue: 0, 
                    gridlines: {color:'#37474f', count:1}, 
                    baselineColor: 'white'
                },
                legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
                colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
                areaOpacity: 0.24,
                lineWidth: 1,
                backgroundColor: 'white',
                chartArea: {
                    backgroundColor: "white",
                    width: '100%',
                    height: '80%'
                },
                   
                    
                    colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
                    backgroundColor: 'white',
                    datalessRegionColor: '#37474f',
                    displayMode: 'regions'
                 },
                calorieData:[ ['Daily Calories', 'cal'],
                ['Alloted Calories', 2100], ['Calories Consumed', 0]],
                calorieOptions: {
                    pieSliceText:'none',
                    title: 'Daily Calories',
                    slices: {
                        0: {color: 'white'},
                        1: {color:  'blue'}
                    },
                    hAxis: {
                        titleTextStyle: {color: '#607d8b'}, 
                        gridlines: { count:0}, 
                        textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
                    },
                    vAxis: {
                        minValue: 0, 
                        gridlines: {color:'#37474f', count:4}, 
                        baselineColor: 'white'
                    },
                    legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
                    colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
                    areaOpacity: 0.24,
                    lineWidth: 1,
                    backgroundColor: 'white',
                    chartArea: {
                        backgroundColor: "white",
                        width: '100%',
                        height: '80%'
                    },

                        pieSliceBorderColor: '#263238',
                        pieSliceTextStyle:  {color:'#607d8b' },
                        pieHole: 0.8,
                        bar: {groupWidth: "40" },
                        colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
                        backgroundColor: 'white',
                        datalessRegionColor: '#37474f',
                        displayMode: 'regions'
                                    
                     }
        }
    },
    created(){
       
        this.getExercises(this.$store.getters.userId)
        this.getWorkouts(this.$store.getters.userId)
        this.getWeights(this.$store.getters.userId)
        this.searchFoods()
        
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
                    console.log("workouts broke " + err)
                }
            },

            exerciseRedirect(){
                this.$router.push({name: 'newExercise'})
            },
           openExercise(exercise){
                console.log('value ' + exercise.id)
                this.$store.dispatch('setCurrentExercise',exercise.id)
                this.$router.push({name: 'viewExercise'})
            },

            async getWeights(id){
                try{
                    const response = await weightService.getAllEntries({
                        UserId: id
                    })
                    for(let item in response.data){
                        this.weightData.push([response.data[item].date, response.data[item].value])
                    }
                    
                }
                catch(err){
                    console.log('weight broke ' + err)
                }
            },
            async updateWeight(){
                try{
                    const today = new Date();
                    console.log(this.$store.getters.userId)
                    this.weightData.push([today, this.weightValue])
                    console.log(this.weightData)
                    await weightService.newEntry({
                        UserId: this.$store.getters.userId,
                        date: today,
                        value: this.weightValue
                    })

             
                }
                catch(err){
                    console.log('weight update failed' + err)
                }
            },

            async searchFoods(){
                try{
                     const {NutritionAnalysisClient} = require('edamam-api')
                     const client = new NutritionAnalysisClient({
                            appId: '0986c293',
                            appKey: '01416fb3d526f651aa99316ea70b7ff7'
                        })

                     const results = await client.getNutritionData({ ingredient: 'Apple' });
                     console.log(results)
                }
                catch(err){
                    console.log('error looking up foods ' + err)
                }
            },

            updateCalories(){
                console.log('data ' + this.calorieData[2][1])
                this.calorieData[2][1] = Number(this.calorieValue)
                this.calorieData[1][1] = 2100 -  Number(this.calorieValue)

                console.log('data ' + this.calorieData[2][1])
                this.calorieData.push(['',0])
            }

    }

  }
</script>
<style scoped>
    #main{
        width: 80%;
        margin: auto
    }
</style>


 
