import { CHANGE_USERNAME, CHANGE_SCORE } from "./actionTypes";

const initialState = {
  username: '',
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
      case CHANGE_USERNAME: 
      return{
          ...state,
          username:action.payload
      };
      case CHANGE_SCORE: 
      return{
          ...state,
          score:action.payload
      };
      default:
          return state;
  }
};

export default reducer;