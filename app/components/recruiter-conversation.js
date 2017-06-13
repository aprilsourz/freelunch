import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  newConversation: {
    lunchRequest: null,
    recruiterName: null,
    engineerName: null,
    engineerId: null
  },
  credentials: storageFor('auth'),
  actions: {
    createConversation() {
      this.set('newConversation.recruiterName', this.get('credentials.email'));
      this.set('newConversation.engineerName', this.get('engineer.name'));
      this.set('newConversation.engineerId', this.get('engineer.id'));
      this.sendAction('createConversation', this.get('newConversation'));
      }
  }
});
