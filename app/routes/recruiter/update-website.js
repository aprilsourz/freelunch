import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.get('store').find('recruiter', params.recruiter_id);
  },
  actions: {
    updateUrl(newUrl, id) {
      return this.get('store').findRecord('recruiter', id)
        .then(function(recruiter) {
          recruiter.set('website', newUrl);
          return recruiter.save();
        }).then(() => {
          this.transitionTo('recruiter');
        })
        .then(() => {
          this.get('flashMessages').success('You changed your website URL!');
        })
        .catch(() => {
          this.get('flashMessages').danger('There was a problem, please try again');
        });
    }
  }
});
