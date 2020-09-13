<script>
export default {
  name: "dashboardMixin",
  computed: {
    viewList () {
      return this.$store.state.dashboard.viewList
    },
    setting () {
      return this.$store.state.dashboard.setting
    }
  }
}
</script>

<style scoped>

</style>