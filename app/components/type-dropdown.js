import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['form-group'],
  selectedOption: null,
  actions: {
   setSelection: function(selected) {
      this.set('selectedOption', selected);

    },
  }
});
