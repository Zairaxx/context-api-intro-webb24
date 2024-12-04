import { createContext, useState } from "react";

// Döper vårt nya Context
export const CounterContext = createContext();

// Returnera en CounterContext.Provider

export function CounterContextProvider ({children}){

    const [count,setCount] = useState(10);

    const increment = () => {
        setCount(count+1);
    }
    
    return(<div className="Hej"><CounterContext.Provider value={{count,increment}}>
            {children}
    </CounterContext.Provider>
    </div>);
}