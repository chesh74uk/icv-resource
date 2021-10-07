<template>
  <div>
    <section>
      <v-btn
        elevation="2"
        to="/admin/new-resource"
      >
        Create new resource
      </v-btn>
    </section>
    <section>
      <h1>Existing posts</h1>
      <resource-list :resources="loadedResources" />
    </section>
  </div>
</template>

<script>
import ResourceList from '@/components/Resources/ResourceList'
export default {
  name: 'Admin',
  components: { ResourceList },
  middleware: 'auth',
  computed: {
    loadedResources () {
      return this.$store.getters.loadedResources
    }
  }
}
</script>

<style scoped>

</style>
