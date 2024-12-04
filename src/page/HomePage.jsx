import { useContext } from "react";
import Counter from "../components/Counter";
import { CounterContext } from "../context/MyContext";
import { TestContext } from "../context/TestContext";

const HomePage = () => {
    const {count} = useContext(CounterContext);
    const greeting = useContext(TestContext)
return ( <>
        <h2>Home: {count}</h2>
        <h3>{greeting}</h3>
            <Counter/>
    </>);
}
 
export default HomePage;