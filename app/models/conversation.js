import DS from 'ember-data';

export default DS.Model.extend({
  recruiterId: DS.attr('number'),
  engineerId: DS.attr('number'),
  showToEngineer: DS.attr('boolean'),
  showToRecruiter: DS.attr('boolean'),
  recruiter: DS.belongsTo('recruiter'),
  engineer: DS.belongsTo('engineer')
});
