import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'table',
  classNames: ['table table-hover'],
  actions: {
  openMessage(engineer) {
    this.sendAction('openMessage', engineer);
  }
}
});
