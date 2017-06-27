import DS from 'ember-data';

export default DS.Model.extend({
  senderName: DS.attr('string'),
  body: DS.attr('string'),
  conversationId: DS.attr('number'),
  createdAt: DS.attr('date')
});
