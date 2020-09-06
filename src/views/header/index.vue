<template>
  <div class="header">
    <router-link
        v-for="item in headerList"
       :key="item.name"
       class="header-item"
       :to="item.path">
      <i class="el-icon-monitor"></i>
      {{item.name}}
    </router-link>
  </div>
</template>

<script>
import menu from "@/config/menu";
export default {
  name: "index",
  data () {
    return {
      headerList: menu
    }
  }
}
</script>

<style lang="less" scoped>
.header{
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 200px;
  box-sizing: border-box;
  .header-item{
    border-bottom: 2px solid transparent;
    color: rgba(246,202,157,.7);
    margin: 0 10px;
    text-decoration:none;
    font-size: 14px;
  }
  .header-item:hover{
    color: #f6ca9d;
    border-bottom-color: #f6ca9d;
  }
  .router-link-exact-active{
    color: #f6ca9d;
    border-bottom-color: #f6ca9d;
  }
}
</style>
