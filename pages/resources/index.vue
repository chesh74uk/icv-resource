<template>
  <div>
    <v-form>
      <v-row>
        <v-col cols="6">
          <v-select
            v-model="stage"
            :items="stages"
            label="Select stage"
            filled
            @click="reset = false"
          />
        </v-col>
        <v-col>
          <v-btn
            large
            outlined
            @click="reset = true"
          >
            Reset
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <resource-list :resources="reset ? loadedResources : filterResources" />
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
      stages: ['Key Stage 1', 'Key Stage 2', 'Secondary', 'Parents', 'Teachers'],
      reset: false
    }
  },
  computed: {
    loadedResources () {
      return this.allResources()
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
    },
    allResources () {
      return this.$store.getters.loadedResources
    }
  }
}

</script>

<style scoped>

</style>
