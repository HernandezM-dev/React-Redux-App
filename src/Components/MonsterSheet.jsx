import React from 'react'
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import MonsterCard from './MonsterCard'

const useStyles = makeStyles({
    monsterSheet:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
})
const MonsterSheet = props => {
    const classes = useStyles(props);
    return (
        <div className={classes.monsterSheet}>
            {
                props.details.details.map(monster =>
                    <MonsterCard key={monster._id} monster={monster} />
                )
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        // random: state.random,
        // monsters: {
        //     monsters: state.monsters.monsters,
        //     isLoading: state.monsters.isLoading,
        // },
        details: {
            details: state.details.details,
        }
    }
}

export default connect(mapStateToProps, {})(MonsterSheet);