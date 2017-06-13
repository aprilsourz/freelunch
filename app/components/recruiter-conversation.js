import Ember from 'ember';
import { storageFor } from 'ember-local-storage';
export default Ember.Component.extend({
  profiles: Ember.inject.service(),
  newConversation: {
    engineer_id: null,
    lunchRequest: null,
    recruiterName: null,
    engineerName: null
  },
  credentials: storageFor('auth'),
  actions: {
    createConversation() {
      const newConvo = this.get('newConversation');
      this.get('profiles').getMyRecruiter()
      .then((data) => {

        const usersRecruiter = data.recruiters.filter((r) => {
          return r.user_id === this.get('credentials.id');
        });
        console.log(usersRecruiter)
      });

    }
  }
});
