<template>
  <div>
    <GridLayout
        :layout.sync="viewList"
        :col-num="24"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[0, 0]"
        :use-css-transforms="true"
    >
      <GridItem
          v-for="item in viewList"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
      >
        <chartCont :item="item"></chartCont>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script>
import dashboardMixin from "@/mixins/dashboardMixin";
import chartCont from "@/views/design/dashboard/chartCont";
import VueGridLayout from 'vue-grid-layout';

export default {
  mixins: [dashboardMixin],
  name: "index",
  components: {
    chartCont,
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>
