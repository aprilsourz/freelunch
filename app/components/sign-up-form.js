import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},
  clear: function(){
    this.set('credentials', {});
  }.on('init'),
  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
