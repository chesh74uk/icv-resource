<template>
  <v-card
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-chip
                  class="ma-2"
                  color="primary"
                >
                  {{ item.category }}
                </v-chip>
                <v-chip
                  class="ma-2"
                >
                  {{ item.type }}
                </v-chip>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                />

                <v-card-subtitle v-text="item.summary" />

                <v-card-actions>
                  <v-btn
                    :href="item.link"
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    View
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                color="grey"
                tile
              >
                <v-img :src="item.src" />
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
  name: 'Index',
  data: () => ({
    items: [
      {
        color: '#1F7087',
        img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        link: 'https://www.theguardian.com/uk-news/2021/jul/30/the-links-between-welsh-slate-and-slavery?CMP=Share_iOSApp_Other',
        title: 'Links between Welsh slate and slavery',
        summary: 'Steve Cushion on the Pennant family',
        category: 'Secondary',
        type: 'Article'
      },
      {
        color: '#1F7087',
        img: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        link: 'https://www.bbc.co.uk/sounds/play/p01w66tg',
        title: 'Famous Victorians',
        summary: 'Three stories focusing on the life of Mary Seacole',
        category: 'Key Stage 2',
        type: 'Audio'
      }
    ]
  })
}
</script>

<style scoped>

</style>
