import Vuex from 'vuex'
import axios from 'axios'
import Cookie from 'js-cookie'

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
      deleteResource (state, resource) {
        state.loadedResources.splice(state.loadedResources.indexOf(resource), 1)
        // state.loadedResources = deletedResource
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
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
      deleteResource (vuexContext, deleteResource) {
        const delUrl = 'https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/'
        return axios.post(delUrl + deleteResource.id + '.json?auth=' + vuexContext.state.token + '&x-http-method-override=DELETE')
          .then((res) => {
            vuexContext.commit('deleteResource', deleteResource)
            this.$router.push('/admin')
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
        // 'https://[PROJECT_ID].firebaseio.com/users/jack/name/last.json?x-http-method-override=DELETE'
      },
      setResources (vuexContext, resources) {
        vuexContext.commit('setResources', resources)
      },
      authenticateUser (vuexContext, authData) {
        let authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='" +
            process.env.fbAPIKey
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then((result) => {
            vuexContext.commit('setToken', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
            )
            Cookie.set('jwt', result.idToken, { sameSite: 'None', secure: true })
            Cookie.set(
              'expirationDate',
              new Date().getTime() + Number.parseInt(result.expiresIn) * 1000,
              { sameSite: 'None', secure: true }
            )
          })
          // eslint-disable-next-line no-console
          .catch(e => console.log(e))
      },
      initAuth (vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('expirationDate='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > +expirationDate || !token) {
          // eslint-disable-next-line no-console
          console.log('No token or invalid token')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      logout (vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt', { sameSite: 'None', secure: true })
        Cookie.remove('expirationDate', { sameSite: 'None', secure: true })
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
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
