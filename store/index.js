import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      loadedResources: [],
      token: null
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
      },
      setToken (state, token) {
        state.token = token
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
        const postUrl = 'https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources.json'
        return axios.post(postUrl + '?auth=' + vuexContext.state.token, createdResource)
          // eslint-disable-next-line no-console
          .then((result) => {
            vuexContext.commit('addResource', { ...createdResource, id: result.data.name })
            this.$router.push('/admin')
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      },
      editedResource (vuexContext, editedResource) {
        const putUrl = 'https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/'
        return axios.put(putUrl + editedResource.id + '.json?auth=' + vuexContext.state.token, editedResource)
          // eslint-disable-next-line no-console
          .then((res) => {
            vuexContext.commit('editResource', editedResource)
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      },
      setResources (vuexContext, resources) {
        vuexContext.commit('setResources', resources)
      },
      authenticateUser (vuexContext, authData) {
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
        }
        return this.$axios.$post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
        ).then((result) => {
          vuexContext.commit('setToken', result.idToken)
          // eslint-disable-next-line no-console
        }).catch(e => console.log(e))
      }
    },
    getters: {
      loadedResources (state) {
        return state.loadedResources
      },
      isAuthenticated (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
