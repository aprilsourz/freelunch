import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  credentials: storageFor('auth'),
  flashMessages: Ember.inject.service(),
  sAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isEngineer: Ember.computed.alias('auth.isEngineer'),
  isRecruiter: Ember.computed.alias('auth.isRecruiter'),
  beforeModel(){
    if (this.get('isEngineer')) {
      this.transitionTo('engineer');
    }
    if (this.get('isRecruiter')) {
      this.transitionTo('recruiter');
    }
  },
  actions: {
    signOut () {
      console.log('inside of applicaiton.js');
      this.get('auth').signOut()
        .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },

    error (reason) {
      let unauthorized = reason.errors && reason.errors.some((error) =>
        error.status === '401'
      );

      if (unauthorized) {
        this.get('flashMessages')
        .danger('You must be authenticated to access this page.');
        this.transitionTo('/sign-in');
      } else {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      }

      return false;
    },
  },
});
