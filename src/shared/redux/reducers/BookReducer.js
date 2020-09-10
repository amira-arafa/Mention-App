import {SEARCH_RESULT_SAGA
    ,SEARCH_RESULT} from '../types';
export const BookReducer =(state={},action)=>{
    // console.log("action from reducer",action)
        switch(action.type){
        case SEARCH_RESULT:
            //3mlna key gded esmo books gwa el state object
            return {...state,books:action.payload};
        default:
            return state;
    }
}