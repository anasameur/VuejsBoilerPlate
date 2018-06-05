<template>
  <v-container fluid
               fill-height>
    <v-layout justify-center
              align-center>
      Template Documentation &amp; GuideLine
      <v-tooltip right>
        <v-btn slot="activator"
               icon
               large
               href=""
               target="_blank">
          <v-icon large>code</v-icon>
        </v-btn>
        <span>Boilerplate Documentation</span>
      </v-tooltip>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  computed: {
    path() {
      return this.$route.path; // parent route are just a layouts
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
