import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      // Simula troca do code por token (mock)
      setTimeout(async () => {
        await login("github-oauth-mock-token");
        navigate("/dashboard", { replace: true });
      }, 1000);
    } else {
      navigate("/login", { replace: true });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-xl font-bold mb-4">Processando login...</h1>
        <p>Aguarde enquanto finalizamos seu login com o GitHub.</p>
      </div>
    </div>
  );
}
