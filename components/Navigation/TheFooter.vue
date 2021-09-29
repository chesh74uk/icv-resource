<template>
  <v-footer
    :absolute="!fixed"
    app
  >
    <span>&copy; Inclusive Colne Valley {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      fixed: false
    }
  }
}
</script>
