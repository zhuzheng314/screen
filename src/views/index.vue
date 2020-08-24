<template>
  <div class="index">
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <asideMenu />
        </el-aside>
        <el-main>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import aside from './aside/index'
export default {
  name: 'index',
  props: {
  },
  components: {
    asideMenu: aside
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
    text-align: center;
    line-height: 160px;
  }
}

</style>
