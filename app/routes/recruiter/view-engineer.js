import Ember from 'ember';
import {
  storageFor
} from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),
  profiles: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  model(params) {
    return this.get('store').find('engineer', params.engineer_id);
  },
  actions: {
    createConversation(messageParams, engineerId) {
      this.get('profiles').postConversation(engineerId)
        .then((conversation) => {
            const store = this.get('store');
            const newMessage = store.createRecord('message', messageParams);
            newMessage.set('conversationId', conversation.conversation.id);
            newMessage.save();
          })
          .then(() => this.transitionTo('recruiter.engineers'))
          .then(() => {
            this.get('flashMessages', {timeout: 2000})
              .success('Lunch invite sent!');
          })
          .catch((error) => {
            if (error.errors[0].status === '422') {
              this.get('flashMessages')
                .danger('You already started a conversation with them! Look in your inbox for the conversation.', {
                  timeout: 2000
                });
            } else {
              this.get('flashMessages')
                .danger('There was a problem. Please try again.', {timeout: 2000});
            }
            this.transitionTo('recruiter.engineers');
          });
          }
        }
  });
