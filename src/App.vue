
<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item :to="{name: 'Dashboard'}">
          <v-list-item-action> 
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Links'}">
          <v-list-item-action>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Enlaces Interés</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name: 'Contacts'}">
          <v-list-item-action>
            <v-icon>mdi-contacts</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contactos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="bigpyx" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Control de clientes</v-toolbar-title>
    </v-app-bar>
    <v-content>
    <router-view/>
    </v-content>
    <v-footer class="bigpyx" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from "vue";
import VueQrcode from "@chenfengyuan/vue-qrcode";

Vue.component(VueQrcode.name, VueQrcode);
export default {
  name: "App",
  components: {
    
  },
  data: () => ({
    drawer: null
  }),

  methods: {
    navigate() {

    }
  }
};
</script>

 
<style scoped>
.bigpyx{
  background:linear-gradient(to right,#a6e72a 0%,#53ba00 100%);
}
</style>