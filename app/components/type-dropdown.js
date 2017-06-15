import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  selectedOption: null,
  actions: {
   setSelection: function(selected) {
      this.set('selectedOption', selected);

    },
  }
});
