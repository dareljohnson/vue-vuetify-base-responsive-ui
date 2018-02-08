<template>
  <v-app>
      <!-- Hamburger menu -->
      <v-navigation-drawer app 
                           temporary
                           fixed
                           v-model="sideNav"
                           class="grey lighten-3">
           <v-list>
              <v-list-tile 
                v-for="item in menuItems" :key="item.title"
                router :to="item.link">
                 <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>{{ item.title }}</v-list-tile-content>
              </v-list-tile>
           </v-list>                
      </v-navigation-drawer>
      <!-- Toolbar -->
      <v-toolbar app fixed dark class="primary toolbar">
      <v-toolbar-side-icon 
        v-on:click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat 
          v-for="item in menuItems" :key="item.title"
          router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
      </v-toolbar-items>
      </v-toolbar>
      <!-- Main Content -->
      <v-content>
          <v-container fluid>
             <router-view></router-view>
          </v-container>
      </v-content>
      <!-- Footer -->
      <v-footer app fixed>
          <span>&copy; 2018</span>
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
            { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
            { icon: 'room', title: 'Organize Meetup', link: '/createmeetup'},
            { icon: 'person', title: 'Profile', link: '/profile'},
            { icon: 'face', title: 'Sign up', link: '/signup'},
            { icon: 'lock_open', title: 'Sign in', link: '/signin'}
          ]
      }
    },
    components: {
    
    }
};
</script>

<style>
.toolbar {
  padding-bottom: 2px;
}

[v-cloak] {display: none}
</style>
