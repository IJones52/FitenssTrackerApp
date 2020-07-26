<template>
  <v-app>
    <v-layout >
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="indigo" dark>
            <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <input type="email" v-model="email" name="email" placeholder="name@example.com">
              <br>
              <input type="password" v-model="password" name="password" placeholder="">
              <br>
              <div class="error" v-html="error"/>
              <v-btn class="indigo" @click="register">Register</v-btn>
            </div> 
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data(){
    return{
        email: '',
        password: '',
        error: null
    }
  },

  methods: {
    async register(){
    try{
       await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
    catch(error){
      this.error = error.response.data.error
    }
    
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    color: red;
  }

  input{
    border:2px black;
  }
</style>
