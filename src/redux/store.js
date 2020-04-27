// @flow
import { createStore } from "redux";
import reducer from "./reducer";
import type { State } from "./types";
import type { Dispatch } from "redux";
import type { Action } from "./actions";

const store = createStore<State, Action, Dispatch<Action>>(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
