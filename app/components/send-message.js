import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  newConversation: {
    lunch_request: null,
    recruiter_name: null,
    engineer_name: null,
    engineer_id: null
  },
  credentials: storageFor('auth'),
  actions: {
    createConversation() {
      console.log(this.get('engineer.id'));
      this.set('newConversation.recruiter_name', this.get('credentials.email'));
      this.set('newConversation.engineer_name', this.get('engineer.name'));
      this.set('newConversation.engineer_id', this.get('engineer.id'));
      this.sendAction('createConversation', this.get('newConversation'));
      this.set('newConversation.lunch_request', null);
      }
  }
});
