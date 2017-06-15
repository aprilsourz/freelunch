import Ember from 'ember';

export default Ember.Route.extend({
  profiles: Ember.inject.service(),
  model(params) {
    return this.get('store').find('conversation', params.conversation_id);
  },
  actions: {
    reply(text, convoId) {
      this.get('profiles').patchConversation(text, convoId)
        .then(() => {
          this.transitionTo('engineer.conversations');
        })
        .then(() => {
          this.get('flashMessages')
            .success('You sent a response to the recruiter!');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There was a problem. Please try again.');
        });
    }
  }
});
