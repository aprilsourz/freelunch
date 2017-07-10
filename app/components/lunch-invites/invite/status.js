import Ember from 'ember';

export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  tagName: '',
  unreadMessages: null,

  onInit: function() {
    const id = this.get('conversation.id');
    return this.get('profiles').getMessagesForConversation(id)
      .then((messages) => {
        const unreadMessages = messages.filter((e) => e.read === false);
        if (unreadMessages.length !== 0) {
          return true;
        } else {
          return false;
        }
      })
      .then((bool) => {
        this.set('unreadMessages', bool);
      });
  }.on('init'),
});
