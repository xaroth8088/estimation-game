import React from 'react';
import PropTypes from 'prop-types';

function SetupGame({timeToGoal, setTimeToGoal, startGame, uncertainty, setUncertainty}) {
    return (
        <div>
            <div>
                Days until the big release:
                <input type="number" value={timeToGoal} onChange={(e) => setTimeToGoal(parseInt(e.target.value, 10))}/>
            </div>
            <div>
                How defined is your goal?
                <select value={uncertainty} onChange={(e) => setUncertainty(parseInt(e.target.value, 10))}>
                    <option value={30}>Very well-defined (Easy)</option>
                    <option value={45}>Reasonably well-defined (Medium)</option>
                    <option value={60}>Poorly-defined (Hard)</option>
                    <option value={90}>Who could even tell?  (Very hard)</option>
                </select>
            </div>
            <div>
                <button type="button" onClick={startGame}>Start!</button>
            </div>
        </div>
    );
}

SetupGame.propTypes = {
    timeToGoal: PropTypes.number.isRequired,
    setTimeToGoal: PropTypes.func.isRequired,
    uncertainty: PropTypes.number.isRequired,
    setUncertainty: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired
};

export default SetupGame;
