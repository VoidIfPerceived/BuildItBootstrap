import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [newComponent, setNewComponent] = useState(null);

    return (
        <AppContext.Provider value={{ newComponent, setNewComponent}}>
            {children}
        </AppContext.Provider>
    )
}