import axios from 'axios';
import Axios from 'axios';

// get API data maybe display a loading img for when the data is loading
export const FETCH_MONSTER_DATA = 'FETCH_MONSTER_DATA';
//create a payload for when the api successfully grabs the data
export const FETCH_MONSTER_DATA_SUCCESS = 'FETCH_MONSTER_DATA_SUCCESS'
// create a action for if the API fails to grab data
export const FETCH_MONSTER_DATA_FAILURE = 'FETCH_MONSTER_DATA_FAILURE'

export const fetchMonsters = () => (dispatch) =>{
    dispatch({type: FETCH_MONSTER_DATA});

    axios.get("https://api.spacexdata.com/v3/missions")
    .then((res) =>{
        dispatch({type: FETCH_MONSTER_DATA_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        console.log(err));
        dispatch({type: FETCH_MONSTER_DATA_FAILURE, payload: err})
    }
}
