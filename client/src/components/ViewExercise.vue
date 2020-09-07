<template>
  <v-flex >
        <div class="white elevation-2">
            <v-toolbar flat dense class="indigo" dark>
                 <v-toolbar-title >{{exercise.name}}</v-toolbar-title>
            </v-toolbar>
            <iframe width="800" height="600" :src=exercise.link frameborder="3" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            onerror="$(this).attr('srcdoc','<p>The specified media does not support embedding. <a :href=exercise.link>Here</a> is this link</p>');">
                
            </iframe>
            <br>
        </div>
 </v-flex>

</template>

<script lang="js">
import exercisesService from '@/services/exercisesService'
export default {
  
    data(){
        return{
            exercise: {
                name: "buh duh",
                link: "https://www.youtube.com/embed/UItWltVZZmE"
            }
        }
    },
    props:{
        ExerciseId: Number
    },
    created(){
        this.getExercise()
    },
    methods:{
        async getExercise(){
            try{
                console.log('exercise id ' +  this.$store.getters.currentExercise)
                await exercisesService.getExercise({
                    UserId: this.$store.getters.userId,
                    ExerciseId: this.ExerciseId || this.$store.getters.currentExercise
                })
                .then(exercise => {
                    console.log(exercise.data)
                    if(exercise.data.link.includes("youtube") && !exercise.data.link.includes("embed")){
                        exercise.data.link = 'https://youtube.com/embed/'+ exercise.data.link.slice(exercise.data.link.indexOf('=')+1)
                    }
                    console.log('link '+ exercise.data.link)
                    this.exercise = exercise.data
                })
            }
            catch(err){

            }
        }
    }
}
</script>

<style>

</style>
