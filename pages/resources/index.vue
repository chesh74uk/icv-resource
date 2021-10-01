<template>
  <div>
    <resource-list :resources="loadedResources" />
  </div>
</template>

<script>

import ResourceList from '@/components/Resources/ResourceList'
export default {
  name: 'Index',
  components: { ResourceList },
  asyncData (context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          loadedResources: [
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
          ]
        })
      }, 1000)
    })
      .then((data) => {
        return data
      })
      .catch((e) => {
        context.error(new Error('error'))
      })
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  },
  // data () {
  //   return {
  //     loadedResources: []
  //   }
  // },
  created () {
    this.$store.dispatch('setResources', this.loadedResources)
  }
}

</script>

<style scoped>

</style>
