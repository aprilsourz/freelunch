import Ember from 'ember';

export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  tagName: 'td',
  classNames: ['grey'],
  classNameBindings: ['unreadMessages'],
  unreadMessages: 'loloololol',


  onInit: function() {
    const id = this.get('conversation.id');
    return this.get('profiles').getMessages(id)
      .then((bool) => {
        this.set('unreadMessages', bool);
      });
  }.on('init'),


});
