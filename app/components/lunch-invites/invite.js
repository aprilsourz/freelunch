import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  actions: {
    deleteConvo() {
      this.sendAction('deleteConvo', this.get('conversation'));
    }
  }
});
