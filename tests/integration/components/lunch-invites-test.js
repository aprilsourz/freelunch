import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lunch-invites', 'Integration | Component | lunch invites', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lunch-invites}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lunch-invites}}
      template block text
    {{/lunch-invites}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
