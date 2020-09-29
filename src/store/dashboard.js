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
        type,
        x: 0,
        y: 0,
        w: 6,
        h: 10,
        i: id,
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
