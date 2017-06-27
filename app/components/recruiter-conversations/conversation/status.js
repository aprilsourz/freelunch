import Ember from 'ember';

export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  tagName: 'td',
  classNames: ['grey'],
  classNameBindings: ['unreadMessages'],
  messages: null,
  onInit: function() {
    const id = this.get('conversation.id');
    this.get('profiles').getMessages(id);

  }.on('init')

});
