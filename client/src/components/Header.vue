<template>
    <v-card
        rounded="0">
      <v-toolbar dark dense fixed class="indigo">
            <v-toolbar-title class="mr-4" >
                <span class="home" @click="navigateTo({name: 'root'})">Fitness Tracker</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items >
                    <v-btn text dark @click="navigateTo({name: 'login'})">Log In</v-btn> 
                    <v-btn text dark @click="navigateTo({name: 'register'})">Sign Up</v-btn> 
            </v-toolbar-items>
      </v-toolbar>
    </v-card>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  methods:{
      navigateTo(route){
          this.$router.push(route)
      }
  }




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        cursor: pointer;
    }
    .home:hover{
        color: #E9E;
    }
</style>
