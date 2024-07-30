import { createContext, useState } from "react";

export const SampleContext = createContext()

export const SampleProvider = ({ children }) => {
    const [number, setNumber] = useState(0)

    const saludar = (name) => {
        console.log(`Hola, ${name}! Hoy tienes cara de patata`)
    }

    return <SampleContext.Provider value={{number, setNumber, saludar}}>
        {children}
    </SampleContext.Provider>
}

// const contextData = useContext(SampleContext)