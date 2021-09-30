<template>
  <div>
    <resource-card
      id="1"
      :is-admin="isAdmin"
      color="#1F7087"
      img="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      link="https://www.theguardian.com/uk-news/2021/jul/30/the-links-between-welsh-slate-and-slavery?CMP=Share_iOSApp_Other"
      title="Links between Welsh slate and slavery"
      summary="Steve Cushion on the Pennant family"
      category="Secondary"
      type="Article"
    />
    <resource-card
      id="2"
      :is-admin="isAdmin"
      color="#1F7087"
      img="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
      link="https://www.bbc.co.uk/sounds/play/p01w66tg"
      title="Famous Victorians"
      summary="Three stories focusing on the life of Mary Seacole"
      category="Key Stage 2"
      type="Audio"
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
    }
  }
}
</script>

<style scoped>

</style>
