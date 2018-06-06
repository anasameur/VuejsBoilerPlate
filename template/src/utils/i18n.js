const generateRouteTitle = function generateRouteTitle(title) {
  return this.$t(`route.${title}`); // $t :this method from vue-i18n ,inject in @/lang/index.js
};
const generateMessage = function generateMessage(message) {
  return this.$t(`message.${message}`); // $t :this method from vue-i18n ,inject in @/lang/index.js
};
export { generateRouteTitle, generateMessage };
