<template>
  <div id="app">
    <Header />
    <b-row class="justify-content-center">
      <b-col cols="4">
        <router-view />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { Header } from "@/components/BrowserComponent";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
