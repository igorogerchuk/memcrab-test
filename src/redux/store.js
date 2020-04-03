// @flow
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducer";
import type { State } from "./types";
import type { Dispatch } from "redux";
import type { Action } from "./actions";

const store = createStore<State, Action, Dispatch<Action>>(
  reducer,
  devToolsEnhancer()
);

export default store;
