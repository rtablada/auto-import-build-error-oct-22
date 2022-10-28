import Application from 'auto-import-build-error-oct-22/app';
import config from 'auto-import-build-error-oct-22/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
