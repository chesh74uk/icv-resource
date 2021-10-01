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
              color="indigo lighten-1"
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
import axios from 'axios'
export default {
  name: 'ResourceIdPage',
  asyncData (context) {
    return axios.get('https://inclusive-colne-valley-default-rtdb.europe-west1.firebasedatabase.app/resources/' + context.params.id + '.json')
      .then((res) => {
        return {
          loadedResource: res.data
        }
      })
      .catch(e => context.error(e))
  }
}
</script>

<style scoped>

</style>
