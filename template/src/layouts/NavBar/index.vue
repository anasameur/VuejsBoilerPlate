<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp"
             color="primary"
             dark
             app
             fixed>
    <v-toolbar-title style="width: 285px"
                     class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleSideBar"></v-toolbar-side-icon>
      <v-btn icon
             large>
        <v-avatar tile>
          <img src="@/assets/logo.png"
               alt="Engie Cofely">
        </v-avatar>
      </v-btn>
    </v-toolbar-title>
    <v-text-field flat
                  solo-inverted
                  prepend-icon="search"
                  label="Search"
                  class="hidden-sm-and-down">
    </v-text-field>
    <v-spacer></v-spacer>
    <span class="hidden-sm-and-down">Nom Prénom</span>
    <v-menu offset-y
            origin="center center"
            class="elelvation-1"
            :nudge-bottom="14"
            transition="scale-transition">
      <v-btn icon
             flat
             slot="activator">
        <v-icon medium>language</v-icon>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in lang"
                     @click="item.click"
                     ripple="ripple"
                     :key="index">
          <v-list-tile-action>
            <v-icon>language</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.label }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
      </v-list>
    </v-menu>
    <v-menu offset-y
            origin="center center"
            class="elelvation-1"
            :nudge-bottom="14"
            transition="scale-transition">
      <v-btn icon
             flat
             slot="activator">
        <v-badge color="red"
                 overlap>
          <span slot="badge">3</span>
          <v-icon medium>notifications</v-icon>
        </v-badge>
      </v-btn>
      <c-notification-list></c-notification-list>
    </v-menu>
    <v-menu offset-y
            origin="center center"
            :nudge-bottom="10"
            transition="scale-transition">
      <v-btn icon
             large
             flat
             slot="activator">
        <v-avatar size="30px"
                  color="grey lighten-4">
          <img src="@/assets/avatar.png"
               alt="Profil Setting" />
        </v-avatar>
      </v-btn>
      <v-list class="pa-0">
        <v-list-tile v-for="(item,index) in items"
                     :to="!item.href ? { name: item.name } : null"
                     :href="item.href"
                     @click="item.click"
                     ripple="ripple"
                     :disabled="item.disabled"
                     :target="item.target"
                     rel="noopener"
                     :key="index">
          <v-list-tile-action v-if="item.icon">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import CNotificationList from '@/components/widgets/NotificationList';

export default {
  name: 'c-toolbar',
  components: {
    CNotificationList,
  },
  data: () => ({
    lang: [
      {
        value: 'en',
        label: 'English',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        },
      },
      {
        value: 'fr',
        label: 'Français',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        },
      },
    ],
    items: [
      {
        icon: 'account_circle',
        href: '#',
        title: 'Profile',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        },
      },
      {
        icon: 'settings',
        href: '#',
        title: 'Settings',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        },
      },
      {
        icon: 'fullscreen_exit',
        href: '#',
        title: 'Logout',
        click: (e) => {
          // eslint-disable-next-line
          console.log(e);
        },
      },
    ],
  }),
  computed: {},
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
    },
  },
};
</script>
<style scoped>
.c-img {
  width: initial !important;
  padding-left: 55%;
}
</style>
