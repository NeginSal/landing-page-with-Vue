<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
<style>
@import url(//db.onlinewebfonts.com/c/7296ae79f6faca68798b00fbbbee4c22?family=Yekan+Bakh);
body {
  background-color: white;
}
#app {
  font-family: Yekan Bakh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>