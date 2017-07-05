import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    deleteConvo() {
      this.sendAction('deleteConvo', this.get('conversation'));
    }
  }
});
