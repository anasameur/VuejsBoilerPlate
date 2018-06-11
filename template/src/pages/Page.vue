<template>
  <v-container fluid
               fill-height>
    <v-layout justify-center
              align-center>
      \{{ generateMessage('main_message') }}
      <v-tooltip right>
        <v-btn slot="activator"
               icon
               large
               href=""
               target="_blank">
          <v-icon large>code</v-icon>
        </v-btn>
        <span>\{{ generateMessage('main_message') }}</span>
      </v-tooltip>
    </v-layout>
  </v-container>
</template>

<script>
import { generateMessage } from '@/utils/i18n';
import services from '@/service_api/ServiceApiExtern/testing';

export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  created() {
  },
  computed: {},
  methods: {
    generateMessage,
    api_call: services.getDataFromServer,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
