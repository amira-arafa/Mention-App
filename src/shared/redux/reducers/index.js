import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import {BookReducer} from '../reducers/BookReducer';

export default combineReducers({
    anyThing : () => { return null } ,
    books:BookReducer,
    form:formReducer
});