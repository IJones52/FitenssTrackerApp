<template>
  <div>
    <h1>Register</h1>

    <input type="email" v-model="email" name="email" placeholder="name@example.com">
    <br>
    <input type="password" v-model="password" name="password" placeholder="">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import authenticationService from '@/services/authenticationService'
export default {
  data(){
    return{
        email: '',
        password: ''
    }
  },

  methods: {
    async register(){
     const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
