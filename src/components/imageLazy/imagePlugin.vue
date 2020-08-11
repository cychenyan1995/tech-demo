<template>
  <!-- 使用vue-lazyload实现懒加载 -->
  <div class="page">
    <!-- 懒加载 -->
    <img v-for="(img, index) in urls" :key="index" v-lazy="img" alt />
    <!-- require请求本地图片 -->
    <!-- <img :src="imgUrl" alt="" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('./../../assets/logo.png'), // 使用require将图片作为模块引入
      urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
      ],
    };
  },
  mounted() {
    // 监听窗口变化
    window.addEventListener('resize', this.handleResize);
    // vue通过hook监听组件的beforeDestroy生命周期函数 this.$on/$once('hook:生命周期',callback)
    this.$on('hook:beforeDestroy', () => {
      console.log('beforeDestroy...');
      window.removeEventListener('resize', this.handleResize);
    });
  },
  methods: {
    handleResize() {},
  },
};
</script>
<style lang="scss" scoped>
.page {
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
