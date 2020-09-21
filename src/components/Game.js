import React, {useState} from 'react';
import PropTypes from 'prop-types';

function degToRad(angle) {
    return angle * Math.PI / 180.0;
}

function getInitialGoalPosition(timeToGoal, uncertainty) {
    // Pick a position that's the endpoint for a vector with length [timeToGoal] steps
    // and an angle off of vertical that's +/- [uncertainty] degrees
    const angle = degToRad(90 + (-uncertainty + Math.random() * (2 * uncertainty)));

    return [Math.round(timeToGoal * Math.cos(angle)), Math.round(timeToGoal * Math.sin(angle))];
}

function distanceRemaining(playerPos, goalPos) {
    return Math.floor(Math.sqrt(((playerPos[0] - goalPos[0]) ** 2) + ((playerPos[1] - goalPos[1]) ** 2)));
}

function Game({timeToGoal, initialUncertainty}) {
    const [daysRemaining, setDaysRemaining] = useState(timeToGoal);
    const [uncertainty, setUncertainty] = useState(initialUncertainty);
    const [playerPosition, setPlayerPosition] = useState([0, 0]);
    const [goalPosition, setGoalPosition] = useState(getInitialGoalPosition(timeToGoal, initialUncertainty));

    return (
        <div>
            Game
            <div>{daysRemaining} days remain</div>
            <div>{uncertainty} uncertainty</div>
            <div>{playerPosition.join(',')} playerPosition</div>
            <div>{goalPosition.join(',')} goalPosition</div>
            <div>{distanceRemaining(playerPosition, goalPosition)} days remain to goal</div>
        </div>
    );
}

Game.propTypes = {
    timeToGoal: PropTypes.number.isRequired,
    initialUncertainty: PropTypes.number.isRequired
}

export default Game;
