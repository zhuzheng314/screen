<template>
  <div class="design">
    <materials class="materials"></materials>
    <dashboard class="dashboard"></dashboard>
    <settingForm class="settingForm"></settingForm>
  </div>
</template>

<script>
import dashboard from './dashboard'
import materials from './materials'
import settingForm from './form'

export default {
  name: "index",
  components: {
    dashboard,
    settingForm,
    materials
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less" scoped>
.design{
  width: 100%;
  height: 100%;
  display: flex;
  .materials{
    width: 200px;
    height: 100%;
  }
  .dashboard{
    height: 100%;
    background: #007c80;
    flex: 1;
  }
  .settingForm{
    width: 200px;
    height: 100%;
  }
}

</style>