import Reflux from 'Reflux';

var feedActions = Reflux.createActions(
  [
    'loadData',
    'toggleForm',
    'newItem',
    'vote',
    'toggleForm'
  ]
);

export default feedActions;