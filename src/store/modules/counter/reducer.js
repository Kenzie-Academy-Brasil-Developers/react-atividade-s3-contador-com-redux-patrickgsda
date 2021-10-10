import { ADD_COUNT } from "./actionTypes";
import { REDUCE_COUNT } from "./actionTypes";
const initialState = {
  count: 0,
};

const reducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 };

    case REDUCE_COUNT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default reducerCounter;
