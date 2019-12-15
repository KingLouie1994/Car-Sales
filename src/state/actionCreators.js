import * as types from "./actionTypes";

export function addItem(feature) {
  return { type: types.ADD_ITEM, payload: feature };
}

export function removeItem(feature) {
  return { type: types.REMOVE_ITEM, payload: feature };
}
