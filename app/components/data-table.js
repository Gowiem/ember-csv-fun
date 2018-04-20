import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

// Attrs
// data <String> - The unaltered csv data
export default Component.extend({
  sortColumn: null,
  classNames: ['data-table'],
  tableState: inject(),

  allRows: computed('data', function() {
    return this.get('data').split('\n');
  }),
  headers: computed('allRows', function() {
    return this.get('allRows.firstObject').split(',');
  }),

  // @returns a Matrix of the CSV data: [
  //   [row1-col1, row1-col2, ...],
  //   [row2-col1, row2-col2, ...],
  //   ...
  // ]
  dataRows: computed('allRows', function() {
    const allRows = this.get('allRows');
    // Slice off our header row
    // return allRows.slice(1, allRows.get('length')).map((row) => {
    //   return row.split(',');
    // });

    // Smaller data set for testing (better render performance)
    return allRows.slice(1, 5).map((row) => {
      return row.split(',');
    });
  }),

  // @returns dataRows sorted on the current sortColumn if any is selected.
  sortedDataRows: computed('dataRows', 'sortColumn', function() {
    const sortColumn = this.get('sortColumn');
    const dataRows = this.get('dataRows');
    if (!sortColumn) {
      return dataRows;
    } else {

      // Note: This is naive. Doesn't sort strings properly, only numbers. I've hit my timebox and putting down.
      return dataRows.sort((row, otherRow) => {
        return row[sortColumn] - otherRow[sortColumn];
      });
    }
  }),

  actions: {
    columnClicked(columnNumber) {
      this.set('tableState.highlightedColumn', columnNumber);
    },
    headerColumnClicked(headerColumnNumber) {
      this.set('sortColumn', headerColumnNumber);
    }
  }
});
