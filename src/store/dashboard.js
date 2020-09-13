import shortid from 'shortid'
const dashboard = {
  namespaced: true,
  state: () => ({
    viewList: [],
    setting: {
    }
  }),
  mutations: {
    ADD_ITEM (state, payload) {
      const { type } = payload
      const id =  type + '_' + shortid.generate()

      state.setting[id] = {
        ...payload
      }
      state.viewList.push({
        id,
        type
      })
    },
    DEL_ITEM () {

    },
    UPDATE_ITEM () {

    },
    GET_ITEM () {

    },
  },
  actions: {}
}

export default dashboard