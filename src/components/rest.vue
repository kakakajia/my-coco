<template>
  <div>
    <div style="height:138px;"></div>
    <div class="onmap">
      <div class="city">
        当前城市：
        <span>北京</span>
        <a href="#">切换城市</a>
      </div>
      <div class="city">
        餐厅关键字：
        <input type="text" class="findbox" placeholder="输入餐厅地址或名称" v-model="info">
        <button class="sub" @click="search">查询</button>
      </div>
      <div class="aaaaa">
        <a href="#" v-on:click='serinfo("旅游购物游乐场")'>旅游购物游乐场</a>
        <a href="#" v-on:click='serinfo("支付宝")'>支付宝</a>
        <a href="#" v-on:click='serinfo("交通枢纽")'>交通枢纽</a>
        <a href="#" v-on:click='serinfo("早餐")'>早餐</a>
        <a href="#" v-on:click='serinfo("礼品卡")'>礼品卡</a>
      </div>
    </div>
    <div class="map">
      <div class="mapword">
        <p class="pword">查询结果如下：</p>
        <div class="poster" >
           热门活动：
          <transition name="fade">
            <span :key="text1.id" class="span1">{{text1.say}}</span>
          </transition>
          <transition name="fade1">
            <span :key="text2.id" class="span2">{{text2.say}}</span>
          </transition>
        </div>
      </div>
      <div class="leftmap" id="panel"></div>
      <div id="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: "",
      placeSearch: "",
      array1: [
        { id: 1, say: "pizza免费吃" },
        { id: 2, say: "吃pizza,免费喝茅台" }
      ],
      array2: [
        { id: 3, say: "买pizza,送手机" },
        { id: 4, say: "买pizza,送游艇" }
      ]
    };
  },
  mounted() {
    this.run();
    this.runmap();
  },
  methods: {
    run() {
      var t3 = setInterval(() => {
        let arr = this.array1[0];
        this.array1.splice(0, 1);
        this.array1.push(arr);
        let brr = this.array2[0];
        this.array2.splice(0, 1);
        this.array2.push(brr);
      }, 2500);
    },
    runmap() {
      var that=this;
      var map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      });
    
      //实时路况图层
      var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 10
      });
      map.add(trafficLayer); //添加图层到地图
      AMap.service(["AMap.PlaceSearch"], function() {
        //构造地点查询类
        that.placeSearch = new AMap.PlaceSearch({
          pageSize: 4, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: "010", // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: map, // 展现结果的地图实例
          panel: "panel", // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //关键字查询
        that.placeSearch.search("pizza");
      });
    },
    search() {
      this.placeSearch.search(this.info);
    },
    serinfo(value){
      this.placeSearch.search(value);
    }
  },
  computed: {
    text1() {
      return this.array1[0];
    },
    text2() {
      return this.array2[0];
    }
  }
};
</script>

<style  scoped>
#container {
  width: 800px;
  height: 420px;
  float: right;
}
.onmap {
  height: 150px;
  width: 1110px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2px;
  padding: 20px 30px 0;
}
.map {
  height: 420px;
  width: 1110px;
  margin: 0 auto;
}
.mapword {
  height: 50px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-bottom: 2px;
  line-height: 50px;
  /* padding: 0 30px; */
  box-sizing: border-box;
}
.leftmap {
  width: 308px;
  float: left;
  background-color: rgba(255, 255, 255, 0.4);
  height: 420px;
  overflow: scroll;
}
.city {
  height: 35px;
  line-height: 35px;
  margin-bottom: 10px;
}
.city a {
  margin: 0 10px;
  color: rgb(44, 9, 9);
  font-size: 14px;
}
.findbox {
  width: 250px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  padding-left:10px;
  box-sizing: border-box;
}
.sub {
  width: 150px;
  height: 36px;
  border-radius: 18px;
  border: none;
  background-color: orangered;
  text-align: center;
  line-height: 36px;
}
.aaaaa {
  margin-left: 90px;
}
.aaaaa a {
  color: rgb(44, 9, 9);
  margin: 0 5px;
  font-size: 14px;
  line-height: 35px;
}
.poster {
  float: left;
  position: relative;
  text-indent: 1em;
}
.poster span {
  display: block;
  width: 200px;
  position: absolute;
  font-size: 14px;
  color: rgb(5, 5, 5);
}
.span1 {
  left: 92px;
  top: 0;
}
.span2 {
  left: 292px;
  top: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s linear;
}

.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.fade1-enter-active,
.fade1-leave-active {
  transition: all 0.5s linear;
}

.fade1-enter {
  opacity: 0;
  transform: translateY(20px);
}
.fade1-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.mapword p {
  float: left;
  margin: 0;
}
input:focus,button:focus{
        /* border:none; */
        outline:none;
       
    } 
.pword{
  width:309px;
  background:white;
  padding-left:30px;
  box-sizing: border-box; 
}  
 
</style>