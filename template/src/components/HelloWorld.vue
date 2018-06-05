<template>
  <v-container fluid
               fill-height>
    <v-layout justify-center
              align-center>
      HelloWorld component
      <v-tooltip right>
        <v-btn slot="activator"
               icon
               large
               href="https://codepen.io/johnjleider/pen/EQOYVV"
               target="_blank">
          <v-icon large>code</v-icon>
        </v-btn>
        <span>Codepen</span>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
