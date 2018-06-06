<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp"
             color="primary"
             dark
             app
             height="58"
             fixed>
    <v-toolbar-title class="ml-0 pl-3 c-toolbar"
                     color="red">
      <v-toolbar-side-icon @click.stop="toggleSideBar"></v-toolbar-side-icon>
      <v-avatar tile>
        <img src="@/assets/logo.png"
             alt="Engie Cofely"
             class="c-img">
      </v-avatar>
      <span class="ml-2 hidden-sm-and-down">Engie Cofely</span>
    </v-toolbar-title>
    <v-text-field flat
                  solo-inverted
                  prepend-icon="search"
                  label="Search"
                  class="hidden-sm-and-down">
    </v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items class="mr-0">
      <v-menu offset-y
              origin="center center"
              class="elelvation-1"
              :nudge-bottom="14"
              transition="scale-transition">
        <v-btn flat
               slot="activator">
          <span>\{{lang}}</span>
          <v-icon medium
                  right>language</v-icon>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile v-for="(item,index) in languages"
                       @click="setLanguage(item.value)"
                       :ripple="false"
                       :key="index">
            <v-list-tile-action>
              <v-icon>language</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>\{{ item.label }}</v-list-tile-title>
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
        <v-btn flat
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
        <v-btn large
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
                       @click="item.click"
                       ripple="ripple"
                       rel="noopener"
                       :key="index">
            <v-list-tile-action v-if="item.icon">
              <v-icon>\{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>\{{ generateMessage(item.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';
import CNotificationList from '@/components/widgets/NotificationList';
import { generateMessage } from '@/utils/i18n';

export default {
  name: 'c-toolbar',
  components: {
    CNotificationList,
  },
  data: () => ({
    languages: [
      {
        value: 'en',
        label: 'English',
      },
      {
        value: 'fr',
        label: 'Français',
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
  computed: {
    ...mapGetters({ language: 'app/language' }),
    lang() {
      return this.language;
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar');
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
  width: 285px;
  font-size: 16px;
  height: 100%;
  padding: 6px;
  /* background-color: #0184a9; */
}
.c-img {
  height: 40px;
}
</style>
