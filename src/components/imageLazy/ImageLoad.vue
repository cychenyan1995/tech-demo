<template>
  <!-- 原生js监听滚动条实现懒加载 -->
  <div class="content">
    <img v-for="(img, index) in imgs" :key="index" :data-src="img" alt="" />
  </div>
</template>
<script>
import { throttle } from 'lodash';
export default {
  data() {
    return {
      imgs: [
        require('./../../assets/logo.png'),
        require('./../../assets/test1.jpg'),
        require('./../../assets/test2.jpg'),
        require('./../../assets/test3.jpg'),
        require('./../../assets/test4.jpg'),
        require('./../../assets/test5.jpg'),
      ],
    };
  },
  mounted() {
    this.imags = document.getElementsByTagName('img');
    // 初始监听
    this.handleScroll();
    // window.addEventListener第三个参数表示是否捕获和冒泡
    window.addEventListener('scroll', throttle(this.handleScroll, 200), true);
  },
  methods: {
    handleScroll() {
      // 可视区域得高度
      let innerHeight = window.innerHeight;
      // 滚动得高度
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      this.imags.forEach((item, index) => {
        // 当滚动区域+可视区域>图片距离顶部的距离时加载图片
        if (scrollTop + innerHeight > this.getTop(item)) {
          this.imags[index].src = item.getAttribute('data-src'); //item.dataset.src === item.getAttribute("data-src")
        }
      });
    },
    getTop(e) {
      if (!e) return;
      // 图片距离顶部的距离
      return e.offsetTop;
    },
  },
  destroyed() {
    // 销毁
    window.removeEventListener('scroll', this.handleScroll, true);
  },
};
</script>
<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
