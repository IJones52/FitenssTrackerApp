<template>
    <v-flex md6 class="center">
            <div class="white elevation-2">
                <v-toolbar flat dense class="indigo" dark>
                    <v-toolbar-title>Create an Exercise</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <v-text-field type='text' v-model="name" label="Exercise Name" placeholder="Legs Workout"/>
                    <br>
                    <v-text-field type='text' v-model="focus" label="Exercise Focus" placeholder="Legs, Abs, Cardio..."/>
                    <br>
                    <v-text-field type='link' v-model="link" label="Youtube Link" placeholder='youtube.com/watchv?...'/>
                    <br>
                    <v-btn dark class="indigo" @click="submit">Submit</v-btn>
                </div>

            </div>
        </v-flex>
</template>

<script>
import exercisesService from '@/services/exercisesService'
export default {
    
  data () {
      return{
          name:'',
          focus:'',
          link:''

      }
  },

  methods:{
      async submit(){
         try{

              const response = await exercisesService.newExercise({
                 name: this.name,
                 focus: this.focus,
                 link: this.link,
                 UserId: this.$store.getters.userId
                })
            //On success navigate home
            this.$router.push({name: 'dashboard'})
         }
         catch(err){
            //Display the error
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
