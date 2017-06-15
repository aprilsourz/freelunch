import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').find('recruiter', params.recruiter_id);
  },
  actions: {
    updateUrl(newUrl, id) {
        this.get('store').findRecord('recruiter', id).then(function(recruiter) {
        recruiter.set('website', newUrl);
        recruiter.save();
      }).then(() => {
        this.transitionTo('recruiter');
      });
    }
  }
});
