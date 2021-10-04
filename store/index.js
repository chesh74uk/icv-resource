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
      },
      addResource (state, resource) {
        state.loadedResources.push(resource)
      },
      editResource (state, editedResource) {
        const resourceIndex = state.loadedResources.findIndex(
          resource => resource.id === editedResource.id)
        state.loadedResources[resourceIndex] = editedResource
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
      addResource (vuexContext, resource) {
        const createdResource = {
          ...resource,
          updatedDate: new Date()
        }
        return axios.post('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources.json',
          createdResource
        )
          // eslint-disable-next-line no-console
          .then((result) => {
            vuexContext.commit('addResource', { ...createdResource, id: result.data.name })
            this.$router.push('/admin')
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      },
      editedResource (vuexContext, editedResource) {
        return axios.put('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/' +
          editedResource.id +
          '.json', editedResource)
          // eslint-disable-next-line no-console
          .then((res) => {
            vuexContext.commit('editResource', editedResource)
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
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
