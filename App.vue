<template>
  <v-app dark>
      <v-navigation-drawer app></v-navigation-drawer>
      <v-toolbar app fixed>App</v-toolbar>
      <v-content>
          <v-container fluid fill-height>
              <v-layout>
                  <router-view></router-view>
              </v-layout>
          </v-container>
      </v-content>
      <v-footer app fixed>
          <span>&copy; 2017</span>
      </v-footer>
  </v-app>
</template>
<script>
// imports go here

export default {
    components: {
    
    }
};
</script>
