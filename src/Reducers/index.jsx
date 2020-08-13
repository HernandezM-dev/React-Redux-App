// import {actions} from actions //create actions file and import
import {FETCH_MONSTER_DATA, FETCH_MONSTER_DATA_SUCCESS, FETCH_MONSTER_DATA_FAILURE, FETCH_MONSTER_DETAILS_SUCCESS} from '../Actions'
// import { bindActionCreators } from 'redux';

const initialState = {
    random: '',
    monsters:{
        monsters: '',
        isLoading: false,
        error: ''
    },
    details:{
        details: [],
        isLoading: false,
        error: ''
    },
    //look through API and find out what data you are pulling out
}

export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_MONSTER_DATA:
            return{
                ...state,
                monsters:{
                    ...state.monsters,
                    isLoading: true,
                    error: ''
                } 
            };
        case FETCH_MONSTER_DATA_SUCCESS:
            let arr = action.payload
            let object = arr[Math.floor(Math.random()*arr.length)]
            let name = Object.entries(object)[1][1]
            return{
                ...state,
                random: name,
                monsters:{
                    ...state.monsters,
                    monsters: action.payload,
                    isLoading: false,
                    
                } 
            };
        case FETCH_MONSTER_DATA_FAILURE:
            return{
                ...state,
                monsters:{
                    ...state.monsters,
                    isLoading: false,
                    error: action.payload
                } 
            };
        case FETCH_MONSTER_DETAILS_SUCCESS:
            return{
                ...state,
                
                // random: name,
                details:{
                    ...state.details,
                    details: [...state.details.details, action.payload],
                    isLoading: false,
                    
                } 
            }
        default:
            return state
    }
}