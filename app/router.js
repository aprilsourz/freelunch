import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('recruiter', function() {
    this.route('conversations');
    this.route('engineers');
    this.route('view-engineer', { path: '/engineers/:engineer_id'});
    this.route('view-conversation', {path: 'conversations/:conversation_id'});
  });
  this.route('engineer', function() {
    this.route('view-invite', {path: 'conversations/:conversation_id'});
  });

});

export default Router;
