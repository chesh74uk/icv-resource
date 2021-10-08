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
        v-if="!isAdmin"
        class="hidden-sm-and-down"
        justify="center"
      >
        <v-col cols="2" />
        <v-col
          v-for="(item,i) in userItems"
          :key="'A' + i"
        >
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            :to="item.to"
            router
            exact
          >
            <v-icon left dark>
              {{ item.icon }}
            </v-icon>
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        v-if="isAdmin"
        class="hidden-sm-and-down"
        justify="center"
      >
        <v-col cols="2" />
        <v-col
          v-for="(item,i) in adminItems"
          :key="'B' + i"
        >
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            :to="item.to"
            router
            exact
          >
            <v-icon left dark>
              {{ item.icon }}
            </v-icon>
            {{ item.title }}
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        v-if="!isAdmin"
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item
            v-for="(item,j) in userItems"
            :key="'A'+ j"
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
      <v-list v-if="isAdmin">
        <v-list-item-group>
          <v-list-item
            v-for="(item,j) in adminItems"
            :key="'B' + j"
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
      userItems: [
        { icon: 'mdi-tree', title: 'Welcome', to: '/' },
        { icon: 'mdi-information', title: 'About', to: '/about' },
        { icon: 'mdi-wan', title: 'Resources', to: '/resources' }
      ],
      adminItems: [
        { icon: 'mdi-wan', title: 'Login', to: '/admin/auth' },
        { icon: 'mdi-pen', title: 'Admin', to: '/admin' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Inclusive Colne Valley'
    }
  },
  computed: {
    isAdmin () {
      return this.$store.getters.isAuthenticated
    }
  }
}
</script>

<style scoped>

</style>
