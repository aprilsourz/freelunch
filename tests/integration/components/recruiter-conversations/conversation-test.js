import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recruiter-conversations/conversation', 'Integration | Component | recruiter conversations/conversation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recruiter-conversations/conversation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recruiter-conversations/conversation}}
      template block text
    {{/recruiter-conversations/conversation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
