

const search = (state = {text: ''}, action) => {
  switch(action.type){
    case 'UPDATE_SEARCH':
      return {...state, text: action.payload};
    
    default:
      return state;
  }
}

export default search;