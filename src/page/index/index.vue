<template>
  <div>
    <Test @hook:updated="handleTestUpdate" />
    <router-link to="/imageLoad" style="margin-right: 20px;">跳转</router-link>
    <router-link to="/imageLazy">跳转插件</router-link>
  </div>
</template>
<script>
import Test from '@/components/test';
import Axios from 'axios';
export default {
  components: {
    Test,
  },
  created() {
    // 请求本地文件
    Axios.get('./js/data.json').then((rsp) => {
      console.log(rsp);
    });
  },
  methods: {
    // hook
    handleTestUpdate() {
      console.log('vue hook....');
    },
  },
};
</script>
