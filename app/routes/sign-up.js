import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  profiles: Ember.inject.service(),

  actions: {
    signUp (credentials) {
      this.get('auth').signUp(credentials)
      .then(() => {
        if (credentials.accountType === 'engineer') {
          this.get('profiles').createEngineer(credentials);

        } else if (credentials.accountType === 'recruiter') {
          this.get('profiles').createRecruiter(credentials);
        }
      })
      .then(() => this.get('auth').signIn(credentials))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully signed-up! You have also been signed-in.');
      })
      .catch(() => {
      this.get('flashMessages')
      .danger('There was a problem. Please try again.');
      });
    },
  },
});
