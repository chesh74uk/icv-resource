<template>
  <div>
    <v-form>
      <!--      <v-select-->
      <!--        v-model="type"-->
      <!--        :items="types"-->
      <!--        label="Select type"-->
      <!--        filled-->
      <!--      />-->
      <v-select
        v-model="stage"
        :items="stages"
        label="Select stage"
        filled
      />
    </v-form>
    <resource-list :resources="filterResources" />
  </div>
</template>

<script>

import ResourceList from '@/components/Resources/ResourceList'
export default {
  name: 'Index',
  components: { ResourceList },
  data () {
    return {
      type: '',
      stage: '',
      types: ['Audio', 'Video', 'Text'],
      stages: ['Key Stage 1', 'Key Stage 2', 'Secondary', 'Parents', 'Teachers']
    }
  },
  computed: {
    loadedResources () {
      return this.$store.getters.loadedResources
    },
    filterResources () {
      return this.filterResourcesByStage()
    }
  },
  methods: {
    // filterResourcesByType () {
    //   return this.$store.getters.loadedResources.filter(loadedResources => !loadedResources.type.indexOf(this.type))
    // },
    filterResourcesByStage () {
      return this.$store.getters.loadedResources.filter(loadedResources => !loadedResources.category.indexOf(this.stage))
    }
  }
}

</script>

<style scoped>

</style>
