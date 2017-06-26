import Ember from 'ember';

export default Ember.Route.extend({

actions: {
  createMessage(messageParams) {
    this.get('store')
      .createRecord('message', messageParams).save();
  }
},
  model(params) {

  return Ember.RSVP.hash({
    messages: this.get('store').query('message', { id: params.conversation_id  }),
    conversation: this.get('store').find('conversation', params.conversation_id)
  });
  }
});
