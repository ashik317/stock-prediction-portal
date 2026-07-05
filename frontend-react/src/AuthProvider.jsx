import {useState, useContext, createContext} from 'react'

// Create a context for authentication
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
      localStorage.getItem('access_token') ? true : false
    );
    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthProvider, AuthContext }
