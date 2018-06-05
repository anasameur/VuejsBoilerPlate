<template>
  <v-app id="inspire">
    <c-navigation-drawer></c-navigation-drawer>
    <c-toolbar></c-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import CNavigationDrawer from './SideBar';
import CToolbar from './NavBar';

export default {
  components: { CNavigationDrawer, CToolbar },
  data: () => ({}),
  methods: {},
};
</script>
