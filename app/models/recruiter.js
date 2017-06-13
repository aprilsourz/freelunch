import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  website: DS.attr('string'),
  user: DS.belongsTo('user', { async: true }),
  user_id: DS.attr('number'),
  conversations: DS.hasMany('conversation', { async: true })
});
