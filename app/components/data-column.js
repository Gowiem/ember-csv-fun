import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

// Attrs
// data <String> - The text to display for this column
// columnNumber <Integer> - The index of this column in the parent row
// Actions:
// columnClicked
export default Component.extend({
  tagName: 'td',
  tableState: inject(),
  classNameBindings: ['highlighted'],

  // TODO: Macro doesn't work, though not sure why.
  // highlighted: equal('tableState.highlightedColumn', 'columnNumber'),
  highlighted: computed('tableState.highlightedColumn', 'columnNumber', function() {
    const highlightedColumn = this.get('tableState.highlightedColumn');
    const columnNumber = this.get('columnNumber');
    return highlightedColumn === columnNumber;
  }),


  click() {
    const columnNumber = this.get('columnNumber');
    this.get('columnClicked')(columnNumber);
  }
});
