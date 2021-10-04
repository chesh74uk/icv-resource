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
          loadedResource: res.data
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmit (editedResource) {
      axios.put('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/' +
        this.$route.params.resourceId +
        '.json', editedResource)
        // eslint-disable-next-line no-console
        .then((res) => {
          this.$router.push('/admin')
        })
        // eslint-disable-next-line no-console
        .catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>

</style>
