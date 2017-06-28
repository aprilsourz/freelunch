import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  newMessage: {
    body: null,
    senderName: null,
    conversationId: null,
  },
  credentials: storageFor('auth'),
  actions: {
    createMessage() {
      // if (this.get('newMessage.body') === null){
      //   return;
      // }
      this.set('newMessage.senderName', this.get('credentials.email'));
      this.set('newMessage.conversationId', this.get('conversation.id'));
      const newMessage = this.get('newMessage');
      this.sendAction('createMessage', newMessage);
      this.set('newMessage.body', null);
    }
  },
  onInit: function() {
  let objDiv = document.getElementById("message-container");
  objDiv.scrollTop = objDiv.scrollHeight;
}.on('init')
});
