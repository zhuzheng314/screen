<template>
  <div class="materials">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </template>
        <div class="itemGroup">
          <div class="item" v-for="(item, i) in arr" :key="item.type + i">
            <i class="icon" :class="item.icon"></i>
            <p>{{item.name}}</p>
          </div>
        </div>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      arr: [
        { name: '折线图', type: 'line', icon: 'el-icon-truck' },
        { name: '折线图', type: 'line', icon: 'el-icon-truck' },
        { name: '折线图', type: 'line', icon: 'el-icon-truck' },
        { name: '折线图', type: 'line', icon: 'el-icon-truck' },
        { name: '折线图', type: 'line', icon: 'el-icon-truck' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.materials{
  box-sizing: border-box;
  background: #1d1e23;
}
.itemGroup {
  padding: 0 20px;
  .item {
    width: 33%;
    float: left;
    text-align: center;
    .icon{
      font-size: 20px;
    }
  }
}
</style>