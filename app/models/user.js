import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  engineer: DS.belongsTo('engineer', { async: true }),
  recruiter: DS.belongsTo('recruiter', { async: true })
});
