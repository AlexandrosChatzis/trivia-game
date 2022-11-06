import { CHANGE_USERNAME, CHANGE_SCORE, CHANGE_CORRECT_ANSWERS } from "./actionTypes";

const initialState = {
  username: '',
  score: 0,
  correctAnswers : []
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
      case CHANGE_CORRECT_ANSWERS: 
      return{
          ...state,
          correctAnswers:action.payload
      };
      default:
          return state;
  }
};

export default reducer;