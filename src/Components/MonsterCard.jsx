import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    cardheader:{
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '15%',
    },
    monsterCard: {
        display: 'flex',
        flexDirection: 'column',
        flex: 'wrap',
        width: '20%',
        height: '5%',
        margin: '2%',
    },
    stats: {
        display: 'flex',
        flexDirection:'column',
        // alignItems: 'flex-start'
    },
    statblocks:{
        display: 'flex',
        flexDirection: 'column',
    },
    statblock: {
        display: 'flex',
        justifyContent: 'space-around',
    }
});

const MonsterSheet = props => {
    const classes = useStyles(props);
    const { monster } = props
    return (
        <Card raised='true' className={classes.monsterCard}>
            <div className={classes.cardheader}>
                <img src='' />
                <h4>{monster.name}</h4>
                <h5>{monster.alignment}</h5>
            </div>
            <div className={classes.stats}>
                <h4>Stats</h4>
                <div className={classes.statblocks}>
                    <div className={classes.statblock}>
                        <p>AC: {monster.armor_class}</p>
                        <p>HP: {monster.hit_points}</p>
                        <p>HD: {monster.hit_dice}</p>
                        <p>SPD:{monster.speed.walk}</p>
                    </div>
                    <div className={classes.statblock}>
                        <p>STR: {monster.strength}</p>
                        <p>DEX: {monster.dexterity}</p>
                        <p>CON: {monster.constitution}</p>
                        <p>INT: {monster.intelligence}</p>
                        <p>WIS: {monster.wisdom}</p>
                        <p>CHA: {monster.charisma}</p>
                    </div>
                </div>
            </div>
        </Card>
    )

}

export default MonsterSheet