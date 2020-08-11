<template>
  <div>
    <Test @hook:updated="handleTestUpdate" />
    <router-link to="/imageLoad" style="margin-right: 20px;">跳转</router-link>
    <router-link to="/imageLazy">跳转插件</router-link>
  </div>
</template>
<script>
import Test from '@/components/test';
export default {
  components: {
    Test,
  },
  methods: {
    // hook
    handleTestUpdate() {
      console.log('vue hook....');
    },
  },
};
</script>
