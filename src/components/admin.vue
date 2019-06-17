<template>
  <div class='container'>
    <div style='height:220px;'></div>
    <div class='row'>
      <div class='col-7 ' style='background-color:orange'>
        <Addpizza></Addpizza>
      </div>
      <div class='col-5 ' style='background-color:#f26522'>
        <Delpizza></Delpizza>
      </div>
    </div>



  </div>
</template>

<script>
import Addpizza from './admin/addpizza'
import Delpizza from './admin/delpizza'
export default {
  data() {
    return {
      msg: "管理页面"
    };
  },
  components:{
    Addpizza,
    Delpizza
  }
};
</script>

<style scoped>
</style>