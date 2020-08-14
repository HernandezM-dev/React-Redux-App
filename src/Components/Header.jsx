import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchMonsters} from '../Actions'
import {makeStyles} from '@material-ui/core/styles'

// moved to reducer
// var randomProperty = function (arr) {
//     // console.log(arr)
//     let object = arr[Math.floor(Math.random()*arr.length)]
//     if(object !== undefined){
//         // console.log(Object.entries(object))
//         return Object.entries(object)[1][1];
//     }
//     return
// };
const useStyles = makeStyles({
    header: {
        display: 'flex',
        flexDirection: 'row',
        flex: 'wrap',
        justifyContent: 'space-between',
        marginLeft: '4%',
        marginRight: '2%'
    },
   
  });
const Header = props => {
const classes = useStyles(props)
    useEffect(() => {
        // call an action creator that will be in charge of fetching data
        props.fetchMonsters();
        // console.log()
      },[]);
    
    return (
        <div className={classes.header}>
            <h1>D&D Monster List</h1>
            {props.monsters.isLoading ? <h3>Loading...</h3> : <h3>Random Monster: {props.random}</h3>}
        </div>
    )
}

const mapStateToProps =(state) =>{
    return{
        random: state.random,
        monsters: {
            monsters: state.monsters.monsters,
            isLoading: state.monsters.isLoading,
        },
        // details:{
        //     details: state.details.details,
        // }        
    }
}

export default connect(mapStateToProps, {fetchMonsters})(Header);