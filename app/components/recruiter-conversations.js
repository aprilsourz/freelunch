import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table'],
  actions: {
    deleteConvo(conversation) {
      this.sendAction('deleteConvo', conversation);
    }
  }
});