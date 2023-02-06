const arrayToDo =[ <li key = {0} > item </li> ]

function counterReducer(state = arrayToDo, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'todos/todoAdded') {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      value: [...state , <li key={state.length}> new item</li>,]
    }
  }
  // otherwise return the existing state unchanged
  return state
}