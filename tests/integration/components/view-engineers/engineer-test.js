import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('view-engineers/engineer', 'Integration | Component | view engineers/engineer', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{view-engineers/engineer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#view-engineers/engineer}}
      template block text
    {{/view-engineers/engineer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
