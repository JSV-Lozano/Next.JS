import { useState, useContext, createContext } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/API/';
const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);

  const options = {
    headers: {
      accept: '*/*',
      'content-type': 'application/json',
    },
  };

  const singIn = async (email, password) => {
    //guradamos el token, usamos los endpoints que tenemos y le enviamos los parametros de email y pass.
    //tambien añadimos el header llamando a options.
    const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
    //validamos existencia del access_token y lo guradamos en las cookie
    if (access_token) {
      const Token = access_token.access_token;
      Cookies.set('token', Token, { expires: 7 });
      //enviamos el token por los headers. Obtenmos el usuario
      axios.defaults.headers.common['Authorization'] = `Bearer ${Token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
    }
  };
  return {
    user,
    singIn,
  };
}
