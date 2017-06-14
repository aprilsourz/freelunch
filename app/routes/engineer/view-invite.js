import Ember from 'ember';

export default Ember.Route.extend({
  profiles: Ember.inject.service(),
  model(params){
    return this.get('store').find('conversation', params.conversation_id);
  },
  actions: {
    reply(text, convoId) {
      this.get('profiles').patchConversation(text, convoId)
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    }
  }
});
