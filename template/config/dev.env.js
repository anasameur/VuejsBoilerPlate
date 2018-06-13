'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL_EXT: '"https://{host}:{port}"',
  BASE_URL_INT: '"https://es2-rec1.cofely.com:443"',
  OKTA_ISSUER: '"{OKTA-Issuer}"',
  OKTA_CLIENT_ID: '"{OKTA-Client-Id}"',
  OKTA_REDIRECT_URL: '"{Application-Redirect-Url}"',
});
