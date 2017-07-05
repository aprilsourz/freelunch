import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['view-engineers-container'],
  actions: {
    deleteConvo(conversation) {
      this.sendAction('deleteConvo', conversation);
    }
  }
});
