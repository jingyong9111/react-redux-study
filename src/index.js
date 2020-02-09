import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './moudules';

//store를 파일로 만들어 줘도 되지만 여기다 만들어 줘서 사용했군..
const store = createStore(rootReducer, composeWithDevTools());

//store의 상태변화를 사용하기 위해  리덕스에서 제공하는 프로바이더 테그를 사용하여 프롭스로 넘겨준다.
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
