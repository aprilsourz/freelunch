import Ember from 'ember';

export default Ember.Component.extend({
  engineer: null,
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),
  onInit: function() {
    const array = this.get('model');
    const engineer = array.filter((e) => {
    return e.get('userId') === this.get('userId');
  });
  this.set('engineer', engineer[0]);
  }.on('init')
});
