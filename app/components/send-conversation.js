import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  newMessage: {
    body: null,
    senderName: null
  },
  credentials: storageFor('auth'),
  actions: {
    createConversation() {
      this.set('newMessage.senderName', this.get('credentials.email'));
      const engineerId = this.get('engineer.id');
      const newMessage = this.get('newMessage');
      this.sendAction('createConversation', newMessage, engineerId);
      // this.set('newMessage.body', null);
    },
    resetForm() {
      this.set('newMessage.body', null);
    }
  },
  onInit: function() {
    this.set('newMessage.body', null);
  }.on('init')

});
