import DS from 'ember-data';

export default DS.Model.extend({
  recruiterId: DS.attr('number'),
  recruiterName: DS.attr('string'),
  engineerId: DS.attr('number'),
  engineerName: DS.attr('string'),
  showToEngineer: DS.attr('boolean'),
  showToRecruiter: DS.attr('boolean'),
  response: DS.attr('string'),
  lunchRequest: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  recruiter: DS.belongsTo('recruiter', { async: true }),
  engineer: DS.belongsTo('engineer', { async: true })
});
