'use strict';

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

var render = function render() {
  document.body.innerText = store.getState();
};

store.subscribe(render);

document.addEventListener('click', function () {
  store.dispatch({ type: 'INCREMENT' });
});

render();