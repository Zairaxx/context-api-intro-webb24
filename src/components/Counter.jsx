import { useContext } from "react";
import { CounterContext } from "../context/MyContext";

const Counter = () => {
    //Value som finns i CounterContext.Provider
    const {count,increment} = useContext(CounterContext);

    return (<>
    <h2>Current count: {count}</h2>
    <button onClick={increment}>+</button>
    </>);
}
 
export default Counter;