<template>
  <div>
    <v-card
      class="mx-auto"
    >
      <v-container>
        <v-row dense>
          <v-col
            cols="12"
          >
            <v-card
              :color="loadedResource.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-chip
                    class="ma-2"
                    color="primary"
                    hover="false"
                  >
                    {{ loadedResource.category }}
                  </v-chip>
                  <v-chip
                    class="ma-2"
                  >
                    {{ loadedResource.type }}
                  </v-chip>
                  <v-divider />
                  <v-card-title
                    class="text-h5"
                    v-text="loadedResource.title"
                  />

                  <v-card-subtitle v-text="loadedResource.summary" />
                  <v-divider />
                  <v-card-actions>
                    <v-row>
                      <v-col>
                        <v-btn
                          :href="loadedResource.link"
                          target="_blank"
                          class="ml-2 mt-5"
                          rounded
                          color="purple darken-2"
                        >
                          View
                        </v-btn>
                      </v-col>
                      <v-col v-if="isAdmin">
                        <v-btn
                          :href="loadedResource.resourceLink"
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
                  <v-img :src="loadedResource.img" />
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ResourceIdPage',
  asyncData (context, callback) {
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        loadedResource: {
          id: '1',
          color: '#1F7087',
          img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          link: 'https://www.theguardian.com/uk-news/2021/jul/30/the-links-between-welsh-slate-and-slavery?CMP=Share_iOSApp_Other',
          title: 'Links between Welsh slate and slavery',
          summary: 'Steve Cushion on the Pennant family',
          category: 'Secondary',
          type: 'Article'
        }
      })
    }, 1000)
  }
}
</script>

<style scoped>

</style>
