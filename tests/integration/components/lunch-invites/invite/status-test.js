import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lunch-invites/invite/status', 'Integration | Component | lunch invites/invite/status', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lunch-invites/invite/status}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lunch-invites/invite/status}}
      template block text
    {{/lunch-invites/invite/status}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
