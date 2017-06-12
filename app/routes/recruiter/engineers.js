import Ember from 'ember';

export default Ember.Route.extend({
  model () {
     return this.get('store').findAll('engineer');

  },
  actions: {
    openMessage(engineer) {
      console.log('inside of engineers.js route', engineer);
    }
  }
});
