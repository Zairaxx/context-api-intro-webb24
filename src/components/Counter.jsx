import { useContext } from "react";
import { CounterContext } from "../context/MyContext";
CounterContext
const Counter = (props) => {
    //Value som finns i CounterContext.Provider
    const count = useContext(CounterContext);

    return (<>
    <h2>Current count: {count}</h2>
    <button>+</button>
    </>);
}
 
export default Counter;