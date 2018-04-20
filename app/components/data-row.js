import Component from '@ember/component';
import { computed } from '@ember/object';

// Attrs
// data <String> - The CSV row to display
// rowNumber <Integer> - The index of this row in the table
// Actions:
// columnClicked
export default Component.extend({
  tagName: 'tr',
  columns: computed('data', function() {
    return this.get('data').split(',');
  }),
  headColumn: computed('columns', function() {
    return this.get('columns.firstObject') || 'Missing columns.';
  }),

  // TODO: This could be abstracted to an Ember.computed macro for use with DataTable#dataRows
  // There is also likely a slice macro in Ember Awesome Macros.
  restColumns: computed('columns', function() {
    const columns = this.get('columns');
    // Slice off our header column
    return columns.slice(1, columns.get('length'));
  })
});
