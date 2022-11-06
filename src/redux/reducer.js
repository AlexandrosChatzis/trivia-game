import { CHANGE_USERNAME } from "./actionTypes";

const initialState = {
  username: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type){
      case CHANGE_USERNAME: 
      return{
          ...state,
          username:action.payload
      };
      default:
          return state;
  }
};

export default reducer;