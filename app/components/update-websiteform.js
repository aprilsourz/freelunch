import Ember from 'ember';

export default Ember.Component.extend({
url: null,
actions:{ updateUrl() {
  const id = this.get('model.id');
  const newUrl = this.get('url');
  this.sendAction('updateUrl', newUrl, id);
  }
}
});
