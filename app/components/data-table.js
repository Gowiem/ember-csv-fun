import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

// Attrs
// data <String> - The unaltered csv data
export default Component.extend({
  classNames: ['data-table'],
  tableState: inject(),

  allRows: computed('data', function() {
    return this.get('data').split('\n');
  }),
  headers: computed('allRows', function() {
    return this.get('allRows.firstObject').split(',');
  }),
  dataRows: computed('allRows', function() {
    const allRows = this.get('allRows');
    // Slice off our header row
    // return allRows.slice(1, allRows.get('length'));
    // Smaller data set for testing (better render performance)
    return allRows.slice(1, 5);
  }),

  actions: {
    columnClicked(columnNumber) {
      this.set('tableState.highlightedColumn', columnNumber);
    }
  }
});
