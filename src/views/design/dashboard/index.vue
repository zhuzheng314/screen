<template>
  <div>
    <div v-for="item in viewList" :key="item.id">
      <chartCont :item="item"></chartCont>
    </div>
  </div>
</template>

<script>
import dashboardMixin from "@/mixins/dashboardMixin";
import chartCont from "@/views/design/dashboard/chartCont";
export default {
  mixins: [dashboardMixin],
  name: "index",
  components: {
    chartCont
  },
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style scoped>

</style>