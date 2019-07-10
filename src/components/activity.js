import React from 'react';

import { connect } from 'react-redux';
import { eat, nap, play, blep } from '../redux/actions/activity';

const Activity = ({ name, activity, eat, nap, play, blep }) => {
    return (
        <div>
            <h2> {name.name} is: {activity.activity}</h2>
            <button onClick={() => eat()}>Eating</button>
            <button onClick={() => nap()}>Naping</button>
            <button onClick={() => play()}>Playing</button>
            <button onClick={() => blep()}>Blep</button>
        </div>
    )
}

const mapStateToProps = state => ({
    activity: state.activity,
    name: state.name
})

const mapDispatchToProps = dispatch => {
    return {
        eat: () => dispatch(eat()),
        nap: () => dispatch(nap()),
        play: () => dispatch(play()),
        blep: () => dispatch(blep())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Activity);