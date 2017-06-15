import Ember from 'ember';

export default Ember.Component.extend({
  recruiter: null,
  auth: Ember.inject.service(),
  userId: Ember.computed.alias('auth.credentials.id'),
  onInit: function() {
    const array = this.get('model');
    const recruiter = array.filter((e) => {
    return e.get('userId') === this.get('userId');
  });
  this.set('recruiter', recruiter[0]);
  }.on('init')
});
