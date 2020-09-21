import React, {useState} from 'react';
import SetupGame from "./components/SetupGame";
import Game from './components/Game';
import './App.css';

function App() {
    const [gameStarted, setGameStarted] = useState(false);
    const [timeToGoal, setTimeToGoal] = useState(120);
    const [uncertainty, setUncertainty] = useState(45);

    if (gameStarted === false) {
        return (
            <div className="App">
                <SetupGame
                    timeToGoal={timeToGoal} setTimeToGoal={setTimeToGoal}
                    uncertainty={uncertainty} setUncertainty={setUncertainty}
                    startGame={() => setGameStarted(true)}
                />
            </div>
        );
    }

    return (
        <div className="App">
            <Game
                timeToGoal={timeToGoal}
                initialUncertainty={uncertainty}
            />
        </div>
    );
}

export default App;
