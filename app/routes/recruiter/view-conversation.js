import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {

    return this.get('store').query('message', { id: params.conversation_id  });

  }
});
