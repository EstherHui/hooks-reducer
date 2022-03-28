import React , {useReducer} from 'react'
import './App.css';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';
import CounterThree from './component/CounterThree';
import ComponentA from './component/ComponentA';
import ComponentD from './component/ComponentB';
import ComponentF from './component/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {//define reducer function
	//return 1 value which is newState
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialState
        default :
            return state
    }
}

function App() {

  const [count, dispatch] =  useReducer(reducer, initialState)

  return (
    <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
     <div className="App">
       Count - {count} <br />
       <ComponentA />
       <ComponentD />
       <ComponentF />
     </div>
    </CountContext.Provider>
  );
}

export default App;
