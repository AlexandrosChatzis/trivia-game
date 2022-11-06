import { CHANGE_USERNAME, CHANGE_SCORE, CHANGE_CORRECT_ANSWERS, CHANGE_TOPSCORERS } from "./actionTypes";

const initialState = {
  username: '',
  score: 0,
  correctAnswers : [],
  topscorers: [{'username':'George','points':100},{'username':'Tomas','points':50},{'username':'Maria','points':500}],
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
      case CHANGE_TOPSCORERS: 
      return{
          ...state,
          topscorers:action.payload
      };
      default:
          return state;
  }
};

export default reducer;