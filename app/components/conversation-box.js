import Ember from 'ember';

export default Ember.Component.extend({
  profiles: Ember.inject.service(),

  didRender() {
    let objDiv = document.getElementById("message-container");
    objDiv.scrollTop = objDiv.scrollHeight;
  }
});
