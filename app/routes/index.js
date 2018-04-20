import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // TODO: Swap to backend API host via config var
    return fetch('http://localhost:4200/holding_report12.30.2016.csv')
      .then((response) => {
        return response.text();
      });
  }
});
