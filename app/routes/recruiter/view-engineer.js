import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

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
        .success('Lunch invite sent! Fingers crossed!');
      })
      .catch((error) => {
        console.error(error);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }
  }
});
