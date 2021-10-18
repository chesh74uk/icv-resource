<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
    color="indigo lighten-1"
    dark
  >
    <v-img
      :src="img"
      height="125"
    />
    <v-card-title
      class="text-h5"
      v-text="title"
    />
    <v-card-text>{{ summary }}</v-card-text>
    <v-divider class="mx-4" />
    <v-card-text>
      <v-chip-group column>
        <v-row justify="center" class="mx-0">
          <v-chip
            class="ma-2"
            color="primary"
          >
            {{ category }}
          </v-chip>
          <v-chip
            class="ma-2"
          >
            {{ type }}
          </v-chip>
        </v-row>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    id: {
      type: String,
      required: false,
      default: ''
    },
    isAdmin: {
      type: Boolean,
      required: false
    },
    img: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: false,
      default: ''
    },
    category: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
