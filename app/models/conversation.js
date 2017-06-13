import DS from 'ember-data';

export default DS.Model.extend({
  recruiter_id: DS.attr('number'),
  recruiter_name: DS.attr('string'),
  engineer_id: DS.attr('number'),
  engineer_name: DS.attr('string'),
  show_to_engineer: DS.attr('boolean'),
  show_to_recruiter: DS.attr('boolean'),
  response: DS.attr('string'),
  lunch_request: DS.attr('string'),
  is_completed: DS.attr('boolean'),
  recruiter: DS.belongsTo('recruiter', { async: true }),
  engineer: DS.belongsTo('engineer', { async: true })
});
