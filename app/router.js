import EmberRouter from '@ember/routing/router';
import config from 'auto-import-build-error-oct-22/config/environment';
import moment from 'moment';

console.log(moment())

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
});
