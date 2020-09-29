<template>
  <div>
    <el-button @click="getDeepObj">deepObj</el-button>
    <el-form ref="form" size="small">
      <el-form-item v-for="key in Object.keys(formJson)"
                    label-width="100px"
                    :key=key
                    :label="formJson[key].label"
      >
        <component v-model="formValue[key]" :is="formJson[key].type">
          <div v-if="formJson[key].type === 'el-select'">
            <el-option
                v-for="item in formJson[key].enum"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </div>
          <div v-if="formJson[key].type === 'el-checkbox-group'">
            <el-checkbox
                v-for="item in formJson[key].enum"
                :key="item.label"
                :name="key"
                :label="item.value"
            >
              {{ item.label }}
            </el-checkbox>
          </div>
          <div v-if="formJson[key].type === 'el-radio-group'">
            <el-radio
                v-for="item in formJson[key].enum"
                :key="item.label"
                :name="key"
                :label="item.value"
            >
              {{ item.label }}
            </el-radio>
          </div>


        </component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { set, cloneDeep } from 'lodash'
export default {
  name: "FormCont",
  data() {
    return {
      formJson: {
        'bind.title': {
          group: '基础配置',
          type: 'el-input',
          label: '标题',
          value: '卡片列表',
        },
        'bind.title2': {
          group: '基础配置',
          type: 'el-select',
          label: '标题',
          value: 'web',
          enum: [
            {label: 'Web 端', value: 'web'},
            {label: '手机端', value: 'mobile'}
          ],
        },
        'bind.title3': {
          group: '基础配置',
          type: 'el-radio-group',
          label: '标题',
          value: 'web',
          enum: [
            {label: 'Web 端', value: 'web'},
            {label: '手机端', value: 'mobile'}
          ],
        },
        'bind.title4': {
          group: '基础配置',
          type: 'el-checkbox-group',
          label: '标题',
          value: [],
          enum: [
            {label: 'Web 端', value: 'web'},
            {label: '手机端', value: 'mobile'}
          ],
        },
      },
      formValue: {},
      deepObj: {}
    }
  },
  created() {
    this.initFormValue()
  },
  methods: {
    initFormValue () {
      let formValue = {}
      Object.keys(this.formJson).forEach((key) => {
        formValue[key] = this.formJson[key].value
      })
      this.formValue = formValue
    },
    getDeepObj () {
      let deepObj = {}
      let formValue = cloneDeep(this.formValue)
      Object.keys(formValue).forEach((key) => {
        set(deepObj, key, formValue[key])
      })
      this.deepObj = deepObj
    }
  }
}
</script>

<style scoped>

</style>
