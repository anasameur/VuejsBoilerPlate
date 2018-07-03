<template>
    <v-app v-if="error">
        <v-container fluid
                     fill-height>
            <v-layout align-center
                      justify-center>
                <div class="text-md-center">
                    <h1>{{error_message.errorCode}}</h1>
                    <h3 class="my-3 headline ">{{error_message.message}}</h3>
                </div>
            </v-layout>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'ImplicitCallback',
  data: () => ({
    error_message: '',
    error: false,
  }),
  async beforeMount() {
    try {
      await this.$auth.handleAuthentication();
      this.$router.replace({
        path: this.$auth.getFromUri(),
      });
    } catch (e) {
      // handle error
      this.error_message = e;
      this.error = true;
    }
  },
};
</script>
<style scoped lang="css">
h1 {
  font-size: 70px;
  line-height: 150px;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}
</style>
