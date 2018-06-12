<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp"
             color="primary"
             dark
             app
             height="58"
             fixed>
    <!-- hamburger icon for activing sidebar drawer -->
    <v-toolbar-side-icon @click.stop="toggleSideBar"></v-toolbar-side-icon>
    <v-spacer v-if="$vuetify.breakpoint.xs"></v-spacer>
    <!-- Application logo -->
    <!-- Small screen -->
    <v-toolbar-title class="ml-0 c-toolbar">
      <v-layout row
                justify-center
                v-if="$vuetify.breakpoint.xs">
        <v-flex xs3>
          <v-avatar tile>
            <img src="@/assets/logo.png"
                 alt="Engie Cofely"
                 class="c-img">
          </v-avatar>
        </v-flex>
      </v-layout>
      <!-- Large screen -->
      <v-avatar tile
                v-else
                class="ml-2">
        <img src="@/assets/logo.png"
             alt="Engie Cofely"
             class="c-img">
      </v-avatar>
    </v-toolbar-title>
    <!-- Search Bar -->
    <v-text-field flat
                  solo-inverted
                  prepend-icon="search"
                  label="Search"
                  class="hidden-xs-only c-search">
    </v-text-field>
    <v-spacer></v-spacer>
    <!-- Rigth menu for small screen-->
    <v-menu offset-y
            origin="center center"
            :nudge-bottom="10"
            transition="scale-transition"
            :min-width="180"
            v-if="$vuetify.breakpoint.xs">
      <v-btn icon
             slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <c-setting-list></c-setting-list>
    </v-menu>
    <v-toolbar-items class="mr-0"
                     v-if="!$vuetify.breakpoint.xs">
      <!-- Custom Application menu -->
      <v-menu offset-y
              origin="center center"
              class="elelvation-1"
              :nudge-bottom="14"
              transition="scale-transition">
        <v-btn flat
               class="c-button-toolbar"
               slot="activator">
          <v-icon medium>apps</v-icon>
        </v-btn>
      </v-menu>
      <!-- Notifications menu -->
      <v-menu offset-y
              origin="center center"
              class="elelvation-1 c-button-menu"
              :nudge-bottom="14"
              transition="scale-transition">
        <v-btn flat
               class="c-button-toolbar"
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
              transition="scale-transition"
              :min-width="58">
        <v-btn flat
               small
               class="c-button-toolbar"
               slot="activator">
          <v-avatar size="30px"
                    color="grey lighten-4">
            <img src="@/assets/avatar.png"
                 alt="Profil Setting" />
          </v-avatar>
        </v-btn>
        <c-setting-list></c-setting-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import CNotificationList from '@/components/widgets/NotificationList';
import CSettingList from '@/components/widgets/SettingList';
import { generateMessage } from '@/utils/i18n';

export default {
  name: 'c-toolbar',
  components: {
    CNotificationList,
    CSettingList,
  },
  data: () => ({
    languages: [
      {
        value: 'en',
        label: 'English',
        icon: 'https://countryflags.io/us/flat/24.png',
      },
      {
        value: 'fr',
        label: 'Français',
        icon: 'https://countryflags.io/fr/flat/24.png',
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
      this.$store.dispatch('app/toggleSideBarButton');
    },
    setLanguage(language) {
      this.$store.dispatch('app/setLanguage', language);
    },
    generateMessage,
  },
};
</script>
<style scoped>
.c-toolbar {
  width: 233px; /* aside_width - toolbar_icon_width*/
  font-size: 16px;
  height: 100%;
  padding: 6px;
  /* background-color: #0184a9; */
}
.c-img {
  height: 40px;
  width: 58px !important;
}
.c-search {
  min-width: 350px;
}
.c-button-toolbar{
  min-width: 65px !important;
}
/* On screens that are between 720 and 600px  */
@media screen and (min-width: 600px) and (max-width: 720px) {
  .c-search {
    min-width: 280px;
  }
}
/* On screens that are between 900 and 600px  */
@media screen and (min-width: 600px) and (max-width: 850px) {
  .c-toolbar {
    width: 95px;
  }
}
</style>
