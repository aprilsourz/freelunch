import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  website: DS.attr('string'),
  user: DS.belongsTo('user'),
  userId: DS.attr('number'),
  conversation: DS.hasMany('conversation')
});
