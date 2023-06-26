import './App.css';
import {useState} from "react";
import Count from "./components/count/count";
import IsFive from "./components/isFive/isFive";

function App() {

  const [fistsCount , setFirstCount] = useState(0)
  const [secondCount , setSecondCount] = useState(0)


    return (
        <div className="App">
            <div className='section firstCount'>
                <h5>First Count</h5>
                <button onClick={() => setFirstCount(fistsCount + 1)}>+</button>
                <Count id={1} value={fistsCount}/>
            </div>

            <div className='section secondCount'>
                <h5>Second Count</h5>
                <button onClick={() => setSecondCount(secondCount + 1)}>+</button>
                <Count id={2} value={secondCount}/>
                <IsFive value={secondCount}/>
            </div>

        </div>
  );
}

export default App;
