import { IAPPState, IAction } from '../types';
import actions from './action';

const reducer = (state: IAPPState, action: IAction): IAPPState => {
  const { type, payload } = action;
  console.log(type, payload);
  return actions[type] ? actions[type](state, payload) : state;
};

export default reducer;
