import Ember from 'ember';

export default Ember.Component.extend({
  text: null,
  actions: {
  reply() {
    const text = this.get('text');
    const convoId = this.get('conversation.id');
    this.sendAction('reply', text, convoId);

  }
}
});
