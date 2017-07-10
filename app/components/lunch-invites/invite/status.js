import Ember from 'ember';

export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  tagName: '',
  unreadMessages: null,

  onInit: function() {
    const id = this.get('conversation.id');
    return this.get('profiles').getMessagesForConversation(id)
      .then((messages) => {
        const unreadMessages = messages.filter((message) => !message.read );
        if (unreadMessages.length) {
          this.set('unreadMessages', true);
        } else {
          this.set('unreadMessages', false);
        }
      });
  }.on('init'),
});
