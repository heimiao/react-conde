import { createStore, combineReducers, applyMiddleware } from 'redux';

import reducer from '../Reducer/Index';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
var store = createStore(
	//合并reducer分发处理不同的业务
    combineReducers(reducer),
    //注入中间件，使得reducer可以返回函数
    applyMiddleware(thunk)
);


export default store;