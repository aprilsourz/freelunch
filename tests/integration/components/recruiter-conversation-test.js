import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recruiter-conversation', 'Integration | Component | recruiter conversation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recruiter-conversation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recruiter-conversation}}
      template block text
    {{/recruiter-conversation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
