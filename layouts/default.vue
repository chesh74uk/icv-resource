<template>
  <v-app>
    <v-app-bar
      dense
      :clipped-left="clipped"
      fixed
      app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
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
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
          v-for="(item,i) in items"
          :key="i"
          :to="item.to"
          router
          exact>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; Inclusive Colne Valley {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      fixed: false,
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
