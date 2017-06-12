import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Component.extend({
  credentials: storageFor('auth'),

});
