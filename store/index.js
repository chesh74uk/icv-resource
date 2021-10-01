import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedResources: []
    },
    mutations: {
      setResources (state, resources) {
        state.loadedResources = resources
      }
    },
    actions: {
      setResources (vuexContext, resources) {
        vuexContext.commit('setResources', resources)
      }
    },
    getters: {
      loadedResources (state) {
        return state.loadedResources
      }
    }
  })
}

export default createStore
