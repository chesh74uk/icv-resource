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
      <resource-list is-admin />
    </section>
  </div>
</template>

<script>
import ResourceList from '@/components/Resources/ResourceList'
export default {
  name: 'Admin',
  components: { ResourceList }
}
</script>

<style scoped>

</style>
