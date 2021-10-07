<template>
  <admin-resource-form
    title="New resource"
    @submit="onSubmitted"
  />
</template>

<script>
import AdminResourceForm from '@/components/Admin/AdminResourceForm'
export default {
  name: 'NewResource',
  components: { AdminResourceForm },
  middleware: ['check-auth', 'auth'],
  methods: {
    onSubmitted (resourceData) {
      this.$store.dispatch('addResource', resourceData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
