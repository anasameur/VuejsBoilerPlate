<template>
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
    <v-subheader>App language</v-subheader>
    <v-divider></v-divider>
    <v-list-tile v-for="(item) in languages"
                 :key="item.value"
                 @click="setLanguage(item.value)">
      <v-list-tile-content>
        <v-list-tile-title>\{{ item.label }}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-avatar :tile="true"
                  :size="24">
          <img :src="item.icon"
               alt="avatar">
        </v-avatar>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
import { generateMessage } from '@/utils/i18n';

export default {
  name: 'c-setting-list',
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
  methods: {
    generateMessage,
    setLanguage(language) {
      this.$store.dispatch('app/setLanguage', language);
    },
  },
};
</script>
