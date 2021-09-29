<template>
  <v-card
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col
          cols="12"
        >
          <v-card
            :color="color"
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

                <v-card-subtitle v-text="summary" />

                <v-card-actions>
                  <v-row>
                    <v-col>
                      <v-btn
                        :href="link"
                        target="_blank"
                        class="ml-2 mt-5"
                        outlined
                        rounded
                        small
                      >
                        View
                      </v-btn>
                    </v-col>
                    <v-col v-if="isAdmin">
                      <v-btn
                        :href="resourceLink"
                        tile
                        color="success"
                        class="ml-2 mt-5"
                        rounded
                        small
                      >
                        <v-icon left>
                          mdi-pencil
                        </v-icon>
                        Edit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                color="grey"
                tile
              >
                <v-img :src="img" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
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
    color: {
      type: String,
      required: false,
      default: '#1F7087'
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
      return '/admin/' + this.id
    }
  }
}
</script>

<style scoped>

</style>
