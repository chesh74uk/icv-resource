<template>
  <div>
    <section>
      <v-row justify="center">
        <v-col lg="2">
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            to="/admin/new-resource"
          >
            Create new resource
          </v-btn>
        </v-col>
        <v-col lg="2">
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            @click="onLogout"
          >
            Logout
          </v-btn>
        </v-col>
      </v-row>
      <p />
      <v-divider />
      <p />
    </section>
    <section>
      <h1>Edit Existing posts</h1>
      <p />
      <resource-list :resources="loadedResources" is-admin />
    </section>
  </div>
</template>

<script>
import ResourceList from '@/components/Resources/ResourceList'
export default {
  name: 'Admin',
  components: { ResourceList },
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    loadedResources () {
      return this.$store.getters.loadedResources
    },
    isAdmin () {
      return this.$store.getters.isAuthenticated
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
