<template>
    <v-layout >
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="indigo" dark>
            <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <form autocomplete="off">
                <v-text-field type="email" v-model="email" name="email" placeholder="name@example.com" label="Email Adresss" />
                <br>
                <v-text-field type="password" v-model="password" name="password" label="Password"/>
                <br>
                <div class="error" v-html="error"/>
                <v-btn dark class="indigo" @click="register">Register</v-btn>
              </form> 
            </div> 
        </div>
      </v-flex>
    </v-layout>

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


</style>
