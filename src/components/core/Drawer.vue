<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-list-item
          :key="item.to"
          :to="item.to"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CoreDrawer',

  data() {
    return {
      items: [
        {
          text: 'ERP',
          icon: 'mdi-pokemon-go',
          to: '/PedidoProduto'
        }
      ]
    }
  },

  computed: {
    ...mapGetters('app', ['getDrawer']),

    drawer: {
      get()  { return this.getDrawer },
      set(v) { this.setDrawer(v) }
    }
  },

  methods: {
    ...mapActions('app', ['setDrawer'])
  }
}
</script>

<style>

</style>
