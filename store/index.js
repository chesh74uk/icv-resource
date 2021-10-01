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
      nuxtServerInit (vuexContext, context) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setResources',
              [
                {
                  id: '1',
                  color: '#1F7087',
                  img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                  link: 'https://www.theguardian.com/uk-news/2021/jul/30/the-links-between-welsh-slate-and-slavery?CMP=Share_iOSApp_Other',
                  title: 'Links between Welsh slate and slavery',
                  summary: 'Steve Cushion on the Pennant family',
                  category: 'Secondary',
                  type: 'Article'
                },
                {
                  id: '2',
                  color: '#1F7087',
                  img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
                  link: 'https://www.bbc.co.uk/sounds/play/p01w66tg',
                  title: 'Famous Victorians',
                  summary: 'Three stories focusing on the life of Mary Seacole',
                  category: 'Key Stage 2',
                  type: 'Audio'
                }
              ])
            resolve()
          }, 1000)
        })
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
