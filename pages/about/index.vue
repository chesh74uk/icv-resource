<template>
  <v-container fluid>
    <v-row justify="center" align="center" dense>
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">
            Welcome to Inclusive Colne Valley
          </v-card-title>
          <v-card-subtitle>
            A new local group of people working to make our valley a welcoming place for all.
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
      >
        <v-card>
          <v-card-title>
            {{ item.title }}
          </v-card-title>
          <v-card-text>
            {{ item.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      items: [
        {
          title: 'Diversity',
          text: 'The representation of different people including different ethnicities, religions, sexualities,genders and abilities'
        },
        {
          title: 'Inclusion',
          text: 'Ensuring that everyone has an equal opportunity to contribute and to influence'
        },
        {
          title: 'Belonging',
          text: 'Ensuring that everyone feels safe and at home'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
