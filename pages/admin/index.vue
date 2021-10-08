<template>
  <div>
    <section>
      <v-row>
        <v-col>
          <v-btn
            elevation="2"
            to="/admin/new-resource"
          >
            Create new resource
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            elevation="2"
            @click="onLogout"
          >
            Logout
          </v-btn>
        </v-col>
      </v-row>
      <v-divider />
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
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedResources () {
      return this.$store.getters.loadedResources
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
