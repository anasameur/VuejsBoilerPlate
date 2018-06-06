import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/default';

// import Okta Vue SDK
import Auth from '@okta/okta-vue';

// set Okta Configuration
Vue.use(Auth, {
  issuer: 'https://engie.okta-emea.com',
  client_id: '{client_id}',
  redirect_uri: 'http://{host}:{port}/implicit/callback',
  scope: 'openid profile email',
});

Vue.use(Router);

/*
                  (!!!!!!!!!!!!!!!!!! must set !!!!!!!!!!!!!!!!!!!!!)
* name:'router-name'             the name is used by <router-link> ':to' directive
                                 the value of the 'to' prop will be passed to router.push()
                                 us name route not specific path for handling nested route
                                 (!!!!!!!!!!!!!!!!!! must set !!!!!!!!!!!!!!!!!!!!!)
* meta : {
    title: 'title'               the name show in submenu (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
*/

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/implicit/callback',
      component: Auth.handleCallback(),
    },
    {
      path: '*',
      name: 'AllPath',
      redirect: {
        path: '/404',
      },
    },
    {
      path: '/404',
      name: 'NotFound',
      component: () => import('@/pages/NotFound.vue'),
    },
    {
      path: '/',
      name: 'Root',
      component: Layout,
      redirect: {
        name: 'home',
      },

      // Activate Protected Route
      // Routes are protected by the authRedirectGuard, which verifies
      // there is a valid accessToken or idToken stored.
      // To ensure the user has been authenticated before accessing your route,
      // activate the requiresAuth metadata:

      /*
      * meta: {
        requiresAuth: true,
      }, */
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Home',
            icon: 'home',
          },
        },
        {
          path: 'site',
          name: 'site',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Site',
            icon: 'location_on',
          },
        },
        {
          path: 'reseau',
          name: 'reseau',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Réseau',
            icon: 'perm_data_setting',
          },
        },
        {
          path: 'indicateur',
          name: 'indicateur',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Indicateur',
            icon: 'assessment',
            group: 'indicateur',
          },
          children: [
            {
              path: 'parametrage',
              name: 'parametrage',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Paramétrage',
                icon: 'settings_applications',
              },
            },
            {
              path: 'synthese',
              name: 'synthese',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Synthèse',
                icon: 'vertical_align_bottom',
              },
            },
            {
              path: 'calculs',
              name: 'calculs',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Calculs',
                icon: 'sync',
                group: 'indicateur/calculs',
              },
              children: [
                {
                  path: 'calculs_site',
                  name: 'Site',
                  component: () => import('@/pages/Page.vue'),
                  meta: {
                    title: 'Site',
                    icon: 'location_on',
                  },
                },
                {
                  path: 'projection',
                  name: 'projection',
                  component: () => import('@/pages/Page.vue'),
                  meta: {
                    title: 'Projection',
                    icon: 'report_problem',
                  },
                },
                {
                  path: 'theorique',
                  name: 'Théorique',
                  component: () => import('@/pages/Page.vue'),
                  meta: {
                    title: 'Site',
                    icon: 'location_on',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
