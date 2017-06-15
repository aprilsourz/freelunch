import Ember from 'ember';

export default Ember.Route.extend({
  profiles: Ember.inject.service(),
  model(params) {
    return this.get('store').find('engineer', params.engineer_id);
  },
  actions: {
    updateUrl(newUrl, id) {
        this.get('store').findRecord('engineer', id).then(function(engineer) {
        engineer.set('website', newUrl);
        engineer.save();
      }).then(() => {
        this.transitionTo('engineer');
      });
    }
  }
});
