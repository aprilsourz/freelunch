import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['signup-form-container'],

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
