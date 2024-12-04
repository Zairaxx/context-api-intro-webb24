import { useContext, createContext} from "react";

//Skapa ett Context och döp det
export const TestContext = createContext();

//Returnera Context.Provider i en komponent

export function TestContextProvider ({children}) {

    return(<TestContext.Provider value="Hej från Context">
        {children}
    </TestContext.Provider>)
}