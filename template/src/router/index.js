import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layouts/default';
import handleCallback from '@/components/ImplicitCallBack';

// import Okta Vue SDK
import Auth from '@okta/okta-vue';

// set Okta Configuration
Vue.use(Auth, {
  issuer: process.env.OKTA_ISSUER,
  client_id: process.env.OKTA_CLIENT_ID,
  redirect_uri: `${location.origin}/implicit/callback`,
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
      component: handleCallback,
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

      /* meta: {
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
          path: 'network',
          name: 'network',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Network',
            icon: 'perm_data_setting',
          },
        },
        {
          path: 'indicator',
          name: 'indicator',
          component: () => import('@/pages/Page.vue'),
          meta: {
            title: 'Indicator',
            icon: 'assessment',
            group: 'indicator',
          },
          children: [
            {
              path: 'setting',
              name: 'setting',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Setting',
                icon: 'settings_applications',
              },
            },
            {
              path: 'synthesis',
              name: 'synthesis',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Synthesis',
                icon: 'vertical_align_bottom',
              },
            },
            {
              path: 'calculations',
              name: 'calculations',
              component: () => import('@/pages/Page.vue'),
              meta: {
                title: 'Calculations',
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
                  path: 'theoretical',
                  name: 'theoretical',
                  component: () => import('@/pages/Page.vue'),
                  meta: {
                    title: 'Theoretical',
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
