import Ember from 'ember';

export default Ember.Component.extend({

onInit: function() {
}.on('init'),
actions: {
  deleteConvo() {
    this.sendAction('deleteConvo', this.get('conversation'));
  }
}
});
