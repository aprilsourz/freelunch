import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  profiles: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => this.get('auth').signIn(credentials))
      .then(() => {
        this.get('profiles').createEngineer(credentials);
      })
      .then((data) => console.log(data))
      .then(() => this.transitionTo('application'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .catch((error) => {
        console.error(error);
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
