import { ADD_COUNT } from "./actionTypes";
import { REDUCE_COUNT } from "./actionTypes";

export const addCount = (count) => ({
  type: ADD_COUNT,
  count: count,
});

export const reduceCount = (count) => ({
  type: REDUCE_COUNT,
  count: count,
});
