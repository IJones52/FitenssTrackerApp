<template>
  <div id="app">
    <v-app>
     <page-header/> 
      <main>
        <v-container fluid>
            <router-view/>
        </v-container>
      </main>
    
    </v-app>
  </div>

</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*
  Really ugly. come up with something better
  background-image: url("assets/treadmill.jpg");
  background-repeat: no-repeat;*/
}

</style>
