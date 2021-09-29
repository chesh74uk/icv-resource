<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheFooter from '@/components/Navigation/TheFooter'
export default {
  components: { TheFooter, TheHeader }
}
</script>
