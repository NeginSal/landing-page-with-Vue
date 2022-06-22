<template>
<Navbar/>
 <router-view />
 <Footer/>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>
<style>
body {
  background-color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>