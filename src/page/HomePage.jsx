import { useContext } from "react";
import Counter from "../components/Counter";
import { CounterContext, CounterContextProvider } from "../context/MyContext";

const HomePage = () => {
    const count = useContext(CounterContext);
return ( <>
        <h2>Home: {count}</h2>
            <Counter/>
    </>);
}
 
export default HomePage;