import {SEARCH_RESULT_SAGA} from '../types';
//action creator for search results 
export const searchResult=(formValues)=>{
    //returns action object
    return{
        type:SEARCH_RESULT_SAGA,
        formValues
    }
}