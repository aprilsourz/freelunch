import Ember from 'ember';

export default Ember.Route.extend({

  flashMessages: Ember.inject.service(),

  model(params) {
  return Ember.RSVP.hash({
    messages: this.get('store').query('message', { id: params.conversation_id  }),
    conversation: this.get('store').find('conversation', params.conversation_id)
  });
},
afterModel(model, transition) {

model.messages.forEach((e)=> {
  e.set('read', true);
  e.save();
});
},
actions: {
  createMessage(messageParams) {

    return this.get('store')
        .createRecord('message', messageParams).save()
        .then(() => this.refresh())
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.');
        });
  }
},
});
