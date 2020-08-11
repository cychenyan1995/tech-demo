<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Canvas msg="Welcome to Your Vue.js App" /> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',

  props: {
    imgDataUrl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    changeUrl(val) {
      this.$emit('changeUrl', val);
    },
    // hook
    handleTestUpdate() {
      console.log('vue hook....');
    },
  },
  computed: {
    getMsg() {
      return `${this.name}msg`;
    },
  },
  watch: {
    imgDataUrl(val) {
      if (val) {
        console.log(val);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
