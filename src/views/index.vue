<template>
  <div class="index">
    <el-container style="height: 100%">
      <el-header>
        <headerMenu></headerMenu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import aside from './aside/index'
import header from "@/views/header";
export default {
  name: 'index',
  props: {
  },
  components: {
    // asideMenu: aside,
    headerMenu: header
  }
}
</script>

<style lang="less" scoped>
.index{
  width: 100%;
  height: 100%;
  .el-header, .el-footer {
    background-color: rgb(29, 30, 35);
    color: #f6ca9d;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
  .el-aside {
    background-color: rgb(29, 30, 35);
    color: #333;
    text-align: center;
    line-height: 200px;
    border-top: 2px solid black;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    margin: 0;
    padding: 0;
  }
}

</style>
