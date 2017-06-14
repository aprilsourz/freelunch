import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  isEngineer: Ember.computed.alias('auth.isEngineer'),
  isRecruiter: Ember.computed.alias('auth.isRecruiter'),
  beforeModel(){
    if (!this.get('isAuthenticated')) {
      this.transitionTo('application');
    }
    if(this.get('isEngineer')) {
      this.transitionTo('engineer');
    }
  },
});
