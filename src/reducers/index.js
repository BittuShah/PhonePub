import {combineReducers} from 'redux';

import * as styleReducer from './styleReducer';

export default combineReducers(Object.assign(styleReducer));
