<template>
  <v-app>
    <the-header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter'
export default {
  components: { TheFooter, TheHeader }
}
</script>
