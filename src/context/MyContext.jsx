import { createContext, useState } from "react";

export const CounterContext = createContext();

//CounterContext.Provider

export function CounterContextProvider ({children}){
    const [count,setCount] = useState(10);
    
    return(<CounterContext.Provider value={count}>
            {children}
    </CounterContext.Provider>);
}