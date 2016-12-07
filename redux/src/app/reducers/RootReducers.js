import {combineReducers} from 'redux';
import page from './page';
import listReducers from './listReducers';

export  default  combineReducers({listReducers, page});