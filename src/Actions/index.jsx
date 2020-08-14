import axios from 'axios';

// get API data maybe display a loading img for when the data is loading
export const FETCH_MONSTER_DATA = 'FETCH_MONSTER_DATA';
//create a payload for when the api successfully grabs the data
export const FETCH_MONSTER_DATA_SUCCESS = 'FETCH_MONSTER_DATA_SUCCESS'
// create a action for if the API fails to grab data
export const FETCH_MONSTER_DATA_FAILURE = 'FETCH_MONSTER_DATA_FAILURE'

//get details using url data from monster data requests
export const FETCH_MONSTER_DETAILS = 'FETCH_MONSTER_DETAILS'
export const FETCH_MONSTER_DETAILS_SUCCESS = 'FETCH_MONSTER_DETAILS_SUCCESS'
export const FETCH_MONSTER_DETAILS_FAILURE = 'FETCH_MONSTER_DETAILS_FAILURE'

export const fetchMonsters = () => (dispatch) =>{
    // debugger
    dispatch({type: FETCH_MONSTER_DATA});
    dispatch({type: FETCH_MONSTER_DETAILS})

    axios.get("https://www.dnd5eapi.co/api/monsters")
    .then((res) =>{
        let monsterArr = res.data.results;
        // console.log(res.data.count)
        dispatch({type: FETCH_MONSTER_DATA_SUCCESS, payload: res.data.results});
        let urls = monsterArr.map(obj =>
            Object.entries(obj)[2][1]
        )
        // console.log(urls)
        urls.forEach(url =>{
            // console.log('test')
            axios.get(`https://www.dnd5eapi.co${url}`)
            .then((res)=>{
                // console.log(res.data)
                dispatch({type: FETCH_MONSTER_DETAILS_SUCCESS, payload:res.data});
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    })
    .catch((err) => {
        // console.log(err);
        dispatch({type: FETCH_MONSTER_DATA_FAILURE, payload: err})
    })
}

// export const fetchMonsterDetails = () => (dispatch) =>{
//     dispatch({type: FETCH_MONSTER_DETAILS});

//     axios.get({URL})
//     .then((res) =>{
//         console.log(res.data)
//         dispatch({type: FETCH_MONSTER_DATA_SUCCESS, payload: res.data})
//     })
//     .catch((err) =>{
//         console.log(err);
//         dispatch({type: FETCH_MONSTER_DETAILS_FAILURE, payload: err})
//     })
// }

const thunk = (store) =>(next) => (action) =>{
    if (typeof action === 'object'){
        next(action);
    }else if(typeof action === 'function'){
        action(store.dispatch)
    }
}
