<template>
  <nuxt-link :to="resourceLink">
    <v-card
      class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col
            cols="12"
          >
            <v-card
              color="indigo lighten-1"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
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
                  <v-card-title
                    class="text-h5"
                    v-text="title"
                  />
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    id: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true
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
  },
  computed: {
    resourceLink () {
      return this.isAdmin
        ? '/admin/' + this.id
        : '/resources/' + this.id
    }
  }
}
</script>

<style scoped>

</style>
