import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  engineer: DS.belongsTo('engineer'),
  recruiter: DS.belongsTo('recruiter')
});
