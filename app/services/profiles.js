import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  // stores credentials
  credentials: storageFor('auth'),
  // if there is a token this is true
  isAuthenticated: Ember.computed.bool('credentials.token'),

  // createEngineer

  createEngineer(credentials) {
    return this.get('ajax').post('/engineers' , {
      data: {
        engineer: {
          name: credentials.email,
          website: credentials.website
        },
      },
    });
  },
  createRecruiter(credentials) {
    return this.get('ajax').post('/recruiters', {
      data: {
        recruiter: {
          name: credentials.email,
          website: credentials.website
        }
      }
    })
  }
});
