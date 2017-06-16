import Ember from 'ember';
import {
  storageFor
} from 'ember-local-storage';
export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  credentials: storageFor('auth'),
  profiles: Ember.inject.service(),

  actions: {
    changePassword(passwords) {
      this.get('auth').changePassword(passwords)
        .then(() => {
          const typeOfUser = this.get('profiles').showProfile();
          this.transitionTo(typeOfUser);
        })
        .then(() => {
          this.get('flashMessages')
            .success('Successfully changed your password!');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem, Please try again. Make sure you entered your current password correctly.');
        });
    },
  },
});
