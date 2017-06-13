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
    });
  },
  showProfile() {
    const typeOfUser = this.get('credentials.content.type');
    if (typeOfUser === 'engineer'){
      return 'engineer';
    } else if (typeOfUser === 'recruiter') {
      return 'recruiter';
    }
  },
  postConversation(conversation) {
    return this.get('ajax').post('/conversations', {
      data: {
        conversation: {
          engineer_id: conversation.engineer_id,
          engineer_name: conversation.engineer_name,
          lunch_request: conversation.lunch_request,
          recruiter_name : conversation.recruiter_name
        }
      }
  });
}
});
