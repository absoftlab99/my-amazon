import React from 'react';

export const fsPassContext = createContext();

const UseContext = ({children}) => {

    const addToCart = () =>{
        
    }

    const fsPass = {}
    return (
        <AuthContext.Provider value={fsPass}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;