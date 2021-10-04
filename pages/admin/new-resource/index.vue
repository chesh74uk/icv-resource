<template>
  <admin-resource-form
    title="New resource"
    @submit="onSubmitted"
  />
</template>

<script>
import axios from 'axios'
import AdminResourceForm from '@/components/Admin/AdminResourceForm'
export default {
  name: 'NewResource',
  components: { AdminResourceForm },
  methods: {
    onSubmitted (resourceData) {
      axios.post('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources.json', {
        ...resourceData,
        updatedDate: new Date()
      })
        // eslint-disable-next-line no-console
        .then((result) => {
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
