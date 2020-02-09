import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//리듀서를 하나로 합쳐주기 위해 combineReducers함수를 사용한다.
//스토어 파라미터에 하나의 리듀서만 넣어주기 위해
const rootReducer = combineReducers({ counter, todos });

export default rootReducer;
