import Ember from 'ember';

export default Ember.Route.extend({
  profiles: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.get('store').find('engineer', params.engineer_id);
  },
  actions: {
    updateUrl(newUrl, id) {
      this.get('store').findRecord('engineer', id).then(function(engineer) {
          engineer.set('website', newUrl);
          return engineer.save();
        }).then(() => {
          this.transitionTo('engineer');
        }).then(() => {
          this.get('flashMessages')
            .success('You changed your website URL!', {timeout: 2000});
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem, please try again.', {timeout: 2000});
        });
    }
  }
});
