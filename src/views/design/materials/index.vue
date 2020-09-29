<template>
  <div class="materials">
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </template>
        <div class="itemGroup">
          <div @click="handleAddItem(item)" class="item" v-for="(item, i) in arr" :key="item.type + i">
            <i class="icon" :class="item.icon"></i>
            <p>{{item.name}}</p>
          </div>
        </div>

      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import dashboardMixin from "@/mixins/dashboardMixin";
export default {
  name: "index",
  mixins: [dashboardMixin],
  data () {
    return {
      arr: [
        { name: '折线图', type: 'VeLine', icon: 'el-icon-truck' },
        { name: '折线图', type: 'VePie', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-1', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-2', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-3', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-4', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-5', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-6', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-7', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-8', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-9', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-10', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-11', icon: 'el-icon-truck' },
        { name: '边框', type: 'dv-border-box-12', icon: 'el-icon-truck' },
      ]
    }
  },
  methods: {
    handleAddItem (item) {
      this.$store.commit('dashboard/ADD_ITEM', item)
      console.log(this.$store)
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
    font-size: 12px;
    margin: 10px 0;
    .icon{
      font-size: 20px;
    }
  }
}
</style>
