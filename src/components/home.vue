<template>
  <div class="downn">
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../static/image/timg1.jpg" alt class="imagg">
        </div>
        <div class="swiper-slide">
          <img src="../../static/image/timg2.jpg" alt class="imagg">
        </div>
        <div class="swiper-slide">
          <img src="../../static/image/timg3.jpg" alt class="imagg">
        </div>
        <div class="swiper-slide">
          <img src="../../static/image/timg4.jpg" alt class="imagg">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="orderbox text-center">
      <img src="../../static/image/图片1.png" alt="" width='300px' style='margin-top:30px;'>
      <p class="h1 text-center  mt-1 pblue">你看这个哇!它又大又圆</p>
      <p class="h1 text-center pblue pblue1">
        这是你的专属
        <span style="font-size:40px">P</span>
        <span style="font-size:60px">i</span>
        <span style="font-size:80px">z</span>
        <span style="font-size:100px">z</span>
        <span style="font-size:110px">a!</span>
      </p>
      <button class="btn-lg btn-success" v-on:click='turn'>吃货专属按钮</button>
    </div>
    <div class="band2">
      <div class="row band21">
        <div class="col-5 bandswp" style="background-color:orange">
          <div class="swiper-container swiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../static/image/timg (1).jpg" alt class="imagg">
              </div>
              <div class="swiper-slide">
                <img src="../../static/image/timg (3).jpg" alt class="imagg">
              </div>
              <div class="swiper-slide">
                <img src="../../static/image/timg (4).jpg" alt class="imagg">
              </div>
              <div class="swiper-slide">
                <img src="../../static/image/timg (5).jpg" alt class="imagg">
              </div>
              <div class="swiper-slide">
                <img src="../../static/image/timg (6).jpg" alt class="imagg">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination doty"></div>
          </div>
        </div>

        <div class="col-7 bandnews" style="background-color:#f26522">
          <h3>
            这里的pizza，都是有故事的pizza。
          </h3>
          <ul>
            <li>
              01 <a href="#">这是一款上过太空的pizza</a>
              </li>
              <li>
                02
                <a href="#">这款奶奶做的pizza，有包子的味道</a> </li>
              <li>
                03
                <a href="#">这款限量版pizza，你再也吃不到了</a> </li>
              <li>
                03
                <a href="#">pizza里的奢侈品</a> </li>
              <li>
                05
                <a href="#">还有什么比吃一块pizza更重要？</a> </li>
              <li>
                06
                <a href="#">苹果发布会唯一指定pizza</a> </li>
              <li>
                07 
                <a href="#">可以和哈士奇硬碰硬的pizza</a> </li>
            
          </ul>



        </div>
      </div>
    </div>
    <div class='band3'>
      <div class="row band31">
        <h3 style='text-align:center;width:1110px;margin-bottom:30px;'>历史订单</h3>
        <History></History>

      </div>
    </div>
 <h3 style='text-align:center;width:1583px;margin:30px 0;'>快递查询</h3>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../assets/swiper.min.css";
import History from './about/history.vue'

export default {
  data() {
    return {
      msg: "主页首页"
    };
  },
  components:{
    History
  },
  mounted() {
    var mySwiper = new Swiper(".swiper1", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      effect: "fade",
      loop: true, // 循环模式选项
      // 如果需要分页器

      pagination: {
        el: ".swiper-pagination"
      }
    });
    var mySwiper1 = new Swiper(".swiper2", {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      direction: "vertical",

      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods:{
    turn(){
      this.$router.push('./menu')
    }
  }
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 775px;
}
.swiper2 {
  width: 462px;
  height: 600px;
  position: absolute;
  top:-50px;
  left:-50px;
  
}
.swiper2 img {
  width: 410px;
  height: 550px;
  
}
.bandswp {
  padding: 0;
  width:462px;
  height:550px;
 /*  position: absolute; */
  
}
.imagg {
  width: 100%;
}
.downn {
  width: 100%;
  position: relative;
  top: 0;

  z-index: -5;
}
.orderbox {
  width: 700px;
  height: 400px;
  background-color: rgba(205, 133, 63, 0.8);
  position: absolute;
  left: 450px;
  top: 260px;
  z-index: 1;
}
.pblue {
  font-weight: 1000;
  color:rgb(44, 9, 9);
}
.pblue1 {
  margin-top:-50px;
}
.band2 {
  /* position: absolute; */
  width: 1583px;
  height: 650px;
  background: url(../../static/image/timg5.jpg) repeat-y;
  padding-top:50px;
  
}
.band3 {
  /* position: absolute; */
  width: 1583px;
  height: 594px;
  background: url(../../static/image/timg5.jpg) repeat-y;
  padding-top:50px;
  
}
.band4 {
  /* position: absolute; */
  width: 1583px;
  height: 700px;
  background: url(../../static/image/timg5.jpg) repeat-y;
  padding-top:50px;
  
}
.band21 {
  width: 1110px;
  margin: 0 auto;
  position: relative;
  padding-top:50px;
  padding-left:50px;
  box-sizing: border-box;
}
.band31 {
  width: 1110px;
  margin: 0 auto;
}
.band41 {
  width: 1110px;
  margin: 0 auto;
}
.doty {
  z-index: 3;
  right: 21px;
  top: 440px;
}
.bandnews{
  padding-top:30px;
  position: absolute;
  top:0;
  right:0;
  height:600px;
  padding-left:40px;
}
.bandnews li{
  list-style: none;
  height:50px;
  line-height: 50px;
  color:rgb(44, 9, 9);
  font-weight: bold;

}
.bandnews ul{
  padding:0;
}
.bandnews a{
  color:black;
  
}
</style>