import Service from '@ember/service';

export default Service.extend({
  highlightedColumn: null,
  init() {
    this._super(...arguments);
    this.set('highlightedColumn', -1);
  }
});
