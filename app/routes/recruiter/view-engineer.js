import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),
  profiles: Ember.inject.service(),
  model(params) {
  return this.get('store').find('engineer', params.engineer_id);
},
actions:{
  createConversation(newConvo) {
    console.log(newConvo)
  }

}
});
