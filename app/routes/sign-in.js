import Ember from 'ember';
import RSVP from 'rsvp';
import {
  storageFor
} from 'ember-local-storage';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  profiles: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),

  model() {
    return RSVP.Promise.resolve({});
  },

  actions: {
    signIn(credentials) {
      return this.get('auth').signIn(credentials)
        .then(() => this.get('profiles').showProfile())
        .then((profile) => this.transitionTo(profile))
        .then(() => this.get('flashMessages').success('Thanks for signing in!', {sticky: true}))
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem, Please try again. Make sure you entered your user name and password correctly', {
              sticky: true
            });
        });
    },
  },
});
