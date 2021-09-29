<template>
  <div>
    <v-app-bar
      dense
      fixed
      app
    >
      <v-app-bar-nav-icon
        class="hidden-xs-and-up"
        @click="drawer = true"
      />
      <v-row
        class="hidden-sm-and-down"
        justify="space-around"
      >
        <v-btn
          v-for="(item,i) in items"
          :key="i"
          elevation="2"
          :to="item.to"
          router
          exact
        >
          <v-icon left dark>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(item,i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-tree',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-wan',
          title: 'Resources',
          to: '/resources'
        },
        {
          icon: 'mdi-pen',
          title: 'Admin',
          to: '/admin'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Inclusive Colne Valley'
    }
  }
}
</script>

<style scoped>

</style>
