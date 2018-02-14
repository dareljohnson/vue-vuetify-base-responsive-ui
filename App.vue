<template>
  <v-app>
      <!-- Hamburger menu -->
      <v-navigation-drawer app 
                           temporary
                           enable-resize-watcher
                           fixed
                           v-cloak
                           v-model="sideNav"
                           class="grey lighten-3">
           <v-list class="pa-1" v-if="loggedIn" v-cloak>
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/3/000/0e1/058/3a56394.jpg" >
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>Darel Johnson</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
           </v-list> 
           <v-list v-else>   
               <v-list-tile>
                  <v-list-tile-action v-cloak>
                    <v-icon>home</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
                  </v-list-tile-content>
               </v-list-tile>
           </v-list>           
           <v-list v-cloak>
              <v-divider></v-divider>
              <v-list-tile 
                v-for="item in menuItems" :key="item.title"
                router :to="item.link">
                 <v-list-tile-action v-cloak>
                    <v-icon>{{ item.icon }}</v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content v-cloak>{{ item.title }}</v-list-tile-content>
              </v-list-tile>
           </v-list>                
      </v-navigation-drawer>
      <!-- Toolbar -->
      <v-toolbar app fixed class="toolbar" v-cloak>
      <v-toolbar-side-icon 
        v-on:click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title v-cloak>
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-cloak>
        <v-btn flat 
          v-for="item in menuItems" :key="item.title"
          router :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>{{ item.title }}
        </v-btn>
      </v-toolbar-items>
      </v-toolbar>
      <!-- Main Content -->
      <v-content>
          <v-container fluid v-cloak>
             <router-view></router-view>
          </v-container>
      </v-content>
      <!-- Footer -->
      <v-footer app fixed v-cloak>
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
          loggedIn: true,
          appTitle: 'HomePage',
          menuItems: [
            { icon: 'supervisor_account', title: 'View Content', link: '/viewcontent'},
            { icon: 'room', title: 'Create Content', link: '/createcontent'},
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
