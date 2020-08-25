<template>
    <v-layout >
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="indigo" dark>
            <v-toolbar-title>Log In</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
              <v-text-field type="email" v-model="email" name="email" placeholder="name@example.com" label="Email Adresss" />
              <br>
              <v-text-field type="password" v-model="password" name="password" label="Password"/>
              <br>
              <div class="error" v-html="error"/>
              <v-btn dark class="indigo" @click="login">Log In</v-btn>
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
    async login(){
    try{
      const response = await authenticationService.login({
        email: this.email,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({name: 'dashboard'})
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
