import { createContext, useContext} from "react";
import { useAthorization } from "./AuthContext";

// creamos el contexto que luego usaremos
const AuthContext = createContext();

// creamos el proveedor del contexto (nuestro componente <ContextProvider> <ContextProvider/>)
export const AuthProvider = ({ children }) => {

// traemos la lógica que hemos generado en AuthContext.js a  través de nuestro hook useAuthorization()
    const auth = useAthorization()

  // devolvemos el Context.Provider y le pasamos como value la información que deba ser accesible
  return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>;
};

// consumimos nuestro context. El hook useAuth sólo sirve para no tener que escribir todo el rato useContext(AuthContext)
// const {token, isLoggedIn} = useContext(AuthContext)
// const {token, isLoggedIn} = useAuth()

export const useAuth = () => {
    return useContext(AuthContext)
}