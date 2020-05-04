// @flow
import { createStore } from "redux";
import reducer from "./reducer";
import type { State } from "./types";
import type { Dispatch } from "redux";
import type { Action } from "./actions";

const defaultState = {
  array: [],
  rows: {},
  cells: {},
  params: {},
};

export default function configureStore(initialState = defaultState) {
  return createStore<State, Action, Dispatch<Action>>(reducer, initialState);
}
