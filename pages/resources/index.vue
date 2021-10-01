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
  computed: {
    loadedResources () {
      return this.$store.getters.loadedResources
    }
  }
}

</script>

<style scoped>

</style>
