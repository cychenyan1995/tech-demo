<template>
  <h3 @click="changeTest">vue hook监听{{ tetsMsg }}</h3>
</template>
<script>
export default {
  data() {
    return {
      tetsMsg: '',
    };
  },
  updated() {
    console.log('Test组件update..');
  },
  methods: {
    changeTest() {
      this.tetsMsg = 'hhhhh';
    },
  },
};
</script>
