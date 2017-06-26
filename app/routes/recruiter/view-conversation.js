import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

 this.get('store').queryRecord('message',{id: params.conversation_id})

}
});
