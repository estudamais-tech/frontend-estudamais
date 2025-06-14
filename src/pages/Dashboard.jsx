import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo, {user?.name}!</h1>
        {user?.avatar && (
          <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
        )}
        <p className="mb-4">Email: {user?.email}</p>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={logout}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
