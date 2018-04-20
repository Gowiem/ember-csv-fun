import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['data-table'],
  allRows: computed('data', function() {
    return this.get('data').split('\n');
  }),
  headers: computed('allRows', function() {
    return this.get('allRows.firstObject').split(',');
  }),
  dataRows: computed('allRows', function() {
    const allRows = this.get('allRows');
    // Slice off our header row
    return allRows.slice(1, allRows.get('length'));
  })
});
