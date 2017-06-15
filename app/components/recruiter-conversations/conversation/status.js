import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',
  classNames: ['grey'],
  classNameBindings: ['respondedTo'],
  respondedTo: Ember.computed.alias('conversation.isCompleted')
});
