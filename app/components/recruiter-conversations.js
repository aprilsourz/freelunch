import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteConvo(conversation) {
      this.sendAction('deleteConvo', conversation);
    }
  }
});
