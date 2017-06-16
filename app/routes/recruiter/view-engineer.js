import Ember from 'ember';
import {
  storageFor
} from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),
  profiles: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.get('store').find('engineer', params.engineer_id);
  },
  actions: {
    createConversation(newConvo) {
      this.get('profiles').postConversation(newConvo)
        .then(() => this.transitionTo('recruiter.engineers'))
        .then(() => {
          this.get('flashMessages')
            .success('Lunch invite sent!');
        })
        .catch((error) => {
          if (error.errors[0].status === '422') {
            this.get('flashMessages')
              .danger('You already sent that engineer a message! Only one message per engineer!');
          } else {
            this.get('flashMessages')
              .danger('There was a problem. Please try again.');
          }
        })
        .then(() => this.transitionTo('recruiter.engineers'));
    }
  }
});
