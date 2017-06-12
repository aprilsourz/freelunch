import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  // stores credentials
  credentials: storageFor('auth'),
  // if there is a token this is true
  isAuthenticated: Ember.computed.bool('credentials.token'),
  isEngineer: Ember.computed('credentials.type', function() {
    if (this.get('credentials.type') === 'engineer') {
      return true;
    } else {
      return false;
    }
  }),
  isRecruiter: Ember.computed('credentials.type', function() {
    if (this.get('credentials.type') === 'recruiter') {
      return true;
    } else {
      return false;
    }
  }),

// stores data in above credentials
  signUp (credentials) {
    return this.get('ajax').post('/sign-up', {
      data: {
        credentials: { // this gets stored in above credentials(service)
          email: credentials.email,
          password: credentials.password,
          password_confirmation: credentials.passwordConfirmation,
          account_type: credentials.accountType
        },
      },
    });
  },

  signIn (credentials) {
    return this.get('ajax').post('/sign-in', { // from ajax.js
      // this get sents to the api which expects a data object with credentials
      // with a key of credentials which has keys email and password
      data: {
        credentials: {
          email: credentials.email,
          password: credentials.password,
        },
      },
    }) // if sign in is sucessful this get crednetials from top of page
    // and set the sign in credentials (storagefor)
    .then((result) => {
      // get local storage credtials and set to signed in users credentials
      this.get('credentials').set('id', result.user.id);
      this.get('credentials').set('email', result.user.email);
      this.get('credentials').set('token', result.user.token);
      this.get('credentials').set('type', result.user.account_type);
    });
  },

  changePassword (passwords) {
    return this.get('ajax').patch(`/change-password/${this.get('credentials.id')}`, {
      data: {
        passwords: {
          old: passwords.previous,
          new: passwords.next,
        },
      },
    });
  },

  signOut () {
    return this.get('ajax').del(`/sign-out/${this.get('credentials.id')}`)
    .finally(() => this.get('credentials').reset());
  }
});
