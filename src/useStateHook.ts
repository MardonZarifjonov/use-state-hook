import { useReducer, useState } from 'react';

const stateUpdater = (prevState: any, newState: any) =>
  typeof newState === 'function' ? newState(prevState) : newState;

const stateInitializer = (initialValue: any) =>
  typeof initialValue === 'function' ? initialValue() : initialValue;

export function useStateHook<S>(initialValue: S | (() => S)) {
  return useReducer(stateUpdater, initialValue, stateInitializer);
}
