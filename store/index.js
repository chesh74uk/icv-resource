import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
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
      nuxtServerInit (vuexContext, context) {
        return axios.get('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources.json')
          .then((res) => {
            const resourceArray = []
            for (const key in res.data) {
              // noinspection JSUnfilteredForInLoop
              resourceArray.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setResources', resourceArray)
          })
          .catch(e => context.error(e))
      },
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
