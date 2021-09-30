<template>
  <admin-resource-form
    title="Update resource"
    :resource="loadedResource"
  />
</template>

<script>
import AdminResourceForm from '@/components/Admin/AdminResourceForm'
export default {
  name: 'AdminResourceId',
  components: { AdminResourceForm },
  data () {
    return {
      loadedResource: {
        title: 'This is the Title',
        summary: 'A Summary of things',
        type: 'Audio',
        category: 'Secondary',
        link: 'https://bbc.com/'
      }
    }
  }
}
</script>

<style scoped>

</style>
