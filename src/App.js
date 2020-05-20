import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from './context/auth';
import AppRouter from './routes';

const App = (props) => {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <div className="container">
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <AppRouter />
      </AuthContext.Provider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
