<template>
  <admin-resource-form
    title="Update resource"
    :resource="loadedResource"
  />
</template>

<script>
import AdminResourceForm from '@/components/Admin/AdminResourceForm'
export default {
  name: 'ResourceId',
  components: { AdminResourceForm },
  data () {
    return {
      loadedResource: {
        title: 'Title',
        summary: 'Summary',
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
