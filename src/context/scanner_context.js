import React, { useState, useContext } from "react";

const ScannerContext = React.createContext();
const ScannerProvider = ({ children }) => {
    const [detectedItems, setDetectedItems] = useState([]);

    return (
        <ScannerContext.Provider
            value={{
                detectedItems,
                setDetectedItems,
            }}
        >
            {children}
        </ScannerContext.Provider>
    );
};

// custom hook
export const useGlobalContext = () => {
    return useContext(ScannerContext);
};

export { ScannerContext, ScannerProvider };