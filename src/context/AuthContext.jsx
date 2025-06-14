import React, { createContext, useContext, useState, useEffect } from "react";

// Dados simulados de usuário
const mockUser = {
  id: 1,
  name: "Usuário Demo",
  email: "demo@email.com",
  avatar: "https://i.pravatar.cc/150?img=3",
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("auth_token"));
  const [user, setUser] = useState(() =>
    token ? mockUser : null
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem("auth_token", token);
      setUser(mockUser);
    } else {
      localStorage.removeItem("auth_token");
      setUser(null);
    }
  }, [token]);

  // Permite login com token externo (mock OAuth)
  const login = async (externalToken) => {
    const fakeToken = externalToken || "fake-token-123";
    setToken(fakeToken);
    setUser(mockUser);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth_token");
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}