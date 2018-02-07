<template>
  <v-app>
      <!-- Hamburger menu -->
      <v-navigation-drawer app fixed
                           v-model="sideNav"
                           class="grey lighten-3">
           <v-list>
              <v-list-tile>
                 <v-list-tile-action>
                    <v-icon>supervisor_account</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>View Meetups</v-list-tile-content>
              </v-list-tile>
           </v-list>                
      </v-navigation-drawer>
      <!-- Toolbar -->
      <v-toolbar app fixed dark class="primary">
      <v-toolbar-side-icon 
        v-on:click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>DevMeetup</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat><v-icon left>supervisor_account</v-icon>View Meetups</v-btn>
      </v-toolbar-items>
      </v-toolbar>
      <!-- Main Content -->
      <v-content>
          <v-container fluid>
             <router-view class="topleft"></router-view>
          </v-container>
      </v-content>
      <!-- Footer -->
      <v-footer app fixed>
          <span>&copy; 2017</span>
      </v-footer>
  </v-app>
</template>
<script>
// imports go here

export default {
    data (){ 
      return {
          sideNav: false,
          menuItems: [
            { icon: 'supervisor_account', title: 'View Meetups'},
            { icon: 'room', title: 'Organize Meetup'},
            { icon: 'person', title: 'Profile'},
            { icon: 'face', title: 'Sign up'},
            { icon: 'lock_open', title: 'Sign in'}
          ]
      }
    },
    components: {
    
    }
};
</script>

<style>
.topleft {
    position: absolute;
    top: 8px;
    left: 16px;
}
</style>
