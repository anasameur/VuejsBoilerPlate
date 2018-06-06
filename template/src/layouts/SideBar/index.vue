<template>
    <v-navigation-drawer id="appDrawer"
                         :clipped="$vuetify.breakpoint.lgAndUp"
                         v-model="isCollapse"
                         fixed
                         :width="285"
                         app>
        <vue-perfect-scrollbar class="drawer-menu--scroll"
                               :settings="scrollSettings">
            <v-list dense
                    expand>
                <template v-for="(item, i) in routes">
                    <!--group with subitems-->
                    <v-list-group v-if="item.children"
                                  :key="i"
                                  :group="item.meta.group"
                                  :prepend-icon="item.meta.icon"
                                  no-action="no-action">
                        <v-list-tile slot="activator"
                                     ripple="ripple">
                            <v-list-tile-content>
                                <v-list-tile-title>{{ generateRouteTitle(item.meta.title) }}
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                        <template v-for="(subItem, j) in item.children">
                            <!--sub group-->
                            <v-list-group v-if="subItem.children"
                                          :key="j"
                                          :group="subItem.meta.group"
                                          no-action="no-action">
                                <v-list-tile slot="activator"
                                             ripple="ripple">
                                    <v-list-tile-action>
                                        <v-icon>{{ subItem.meta.icon }}</v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            {{ generateRouteTitle(subItem.meta.title) }}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                                <v-list-tile v-for="(grand, k) in subItem.children"
                                             :key="k"
                                             :to="{name: grand.name}"
                                             ripple="ripple">
                                    <v-list-tile-action>
                                        <v-icon></v-icon>
                                    </v-list-tile-action>
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            {{ generateRouteTitle(grand.meta.title) }}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list-group>
                            <!--child item-->
                            <v-list-tile v-else
                                         :key="j"
                                         :to="{name : subItem.name}"
                                         ripple="ripple">
                                <v-list-tile-action>
                                    <v-icon>{{ subItem.meta.icon }}</v-icon>
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <span>{{ generateRouteTitle(subItem.meta.title) }}
                                        </span>
                                    </v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list-group>
                    <!--List headers-->
                    <v-subheader v-else-if="item.header"
                                 :key="i">{{ item.header }}</v-subheader>
                    <!--List divider-->
                    <v-divider v-else-if="item.divider"
                               :key="i"></v-divider>
                    <!--top-level link-->
                    <v-list-tile v-else
                                 :to="{name : item.name}"
                                 ripple="ripple"
                                 :key="i">
                        <v-list-tile-action>
                            <v-icon>{{ item.meta.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ generateRouteTitle(item.meta.title) }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </vue-perfect-scrollbar>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { generateRouteTitle } from '@/utils/i18n';

export default {
  name: 'c-navigation-drawer',
  components: {
    VuePerfectScrollbar,
  },
  data: () => ({
    scrollSettings: {
      maxScrollbarLength: 160,
    },
  }),
  computed: {
    routes() {
      const routes = this.$router.options.routes.find(
        // eslint-disable-next-line
        (element) => element.name === 'Root'
      );
      return routes.children;
    },
    ...mapGetters({ sidebar: 'app/sidebar' }),
    isCollapse: {
      get() {
        return this.sidebar.opened;
      },
      set() {
        // this.$store.dispatch('app/toggleSideBar');
        // this.$store.commit('setNotification');
      },
    },
  },
  methods: {
    genChildTarget(item, subItem) {
      if (subItem.component) {
        return { name: subItem.component };
      }
      return `${item.group}/${subItem.name}`;
    },
    generateRouteTitle,
  },
};
</script>

<style lang="stylus">
// @import '../../../node_modules/vuetify/src/stylus/settings/_elevations.styl';
#appDrawer {
    overflow: hidden;

    .drawer-menu--scroll {
        height: calc(100vh - 48px);
        overflow: auto;
    }
}
</style>
