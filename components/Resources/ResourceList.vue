<template>
  <div>
    <resource-card
      v-for="resource in resources"
      :id="resource.id"
      :key="resource.id"
      :is-admin="isAdmin"
      :color="resource.color"
      :img="resource.img"
      :link="resource.link"
      :title="resource.title"
      :summary="resource.summary"
      :category="resource.category"
      :type="resource.type"
    />
  </div>
</template>

<script>
import ResourceCard from '@/components/Resources/ResourceCard'
export default {
  name: 'ResourceList',
  components: { ResourceCard },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    resources: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
