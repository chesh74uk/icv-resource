<template>
  <admin-resource-form
    title="Update resource"
    :resource="loadedResource"
    @submit="onSubmit"
  />
</template>

<script>
import axios from 'axios'
import AdminResourceForm from '@/components/Admin/AdminResourceForm'
export default {
  name: 'AdminResourceId',
  components: { AdminResourceForm },
  asyncData (context) {
    return axios.get('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/' +
      context.params.resourceId +
    '.json')
      .then((res) => {
        return {
          loadedResource: { ...res.data, id: context.params.resourceId }
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmit (editedResource) {
      this.$store.dispatch('editedResource', editedResource)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
