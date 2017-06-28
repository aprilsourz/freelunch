import Ember from 'ember';

export default Ember.Component.extend({

onInit: function() {
console.log(this.get('conversation'));
}.on('init'),
actions: {
  deleteConvo() {
    this.sendAction('deleteConvo', this.get('conversation'));
  }
}
});
