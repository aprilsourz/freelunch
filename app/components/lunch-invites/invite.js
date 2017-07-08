import Ember from 'ember';

export default Ember.Component.extend({
  url: null,
  actions: {
    deleteConvo() {
      this.sendAction('deleteConvo', this.get('conversation'));
    }
  }
});
