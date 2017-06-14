import Ember from 'ember';

export default Ember.Component.extend({
  text: null,
  actions: {
  reply() {
    const text = this.get('text');
    this.sendAction('reply', text);

  }
}
});
