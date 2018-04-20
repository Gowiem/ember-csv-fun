import Component from '@ember/component';

// Attrs
// data <String> - The text to display for this column
// columnNumber <Integer> - The index of this column in the parent row
// Actions:
// headerColumnClicked
export default Component.extend({
  tagName: 'th',

  click() {
    const columnNumber = this.get('columnNumber');
    this.get('headerColumnClicked')(columnNumber);
  }
});
