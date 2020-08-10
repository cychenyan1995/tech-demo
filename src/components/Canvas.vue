<template>
  <div>
    <canvas id="canvas"></canvas>
    <canvas id="hello" />
  </div>
</template>

<script>
import { fabric } from "fabric";
export default {
  name: "Canvas",
  data() {
    return {};
  },
  created() {},
  mounted() {
    // this.getCanvas();
    var canvas = new fabric.Canvas("canvas");
    this.getFabricCanvas(canvas, 20, 20);
    this.getFabricCanvas(canvas, 120, 20);
  },
  methods: {
    getFabricCanvas(canvas, left, top) {
      var rect = new fabric.Rect({
        left: left, //距离画布左侧的距离，单位是像素
        top: top, //距离画布上边的距离
        fill: "#42b983", //填充的颜色
        width: 100, //方形的宽度
        height: 100, //方形的高度
      });
      // 时间监听
      // rect.on("selected", function(options) {
      //   console.log(options);
      //   console.log(options.e.clientX, options.e.clientY);
      // });
      rect.on("scaled", function(options) {
        console.log(options);
        console.log(options.e.clientX, options.e.clientY);
      });
      canvas.add(rect);
    },
    getCanvas() {
      var el = document.getElementById("hello");
      var ctx = el.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(100, 100, 20, 20);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#canvas {
  height: 100% !important;
}
</style>
