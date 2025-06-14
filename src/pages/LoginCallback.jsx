import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function LoginCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      navigate("/login", { replace: true });
      return;
    }
    setTimeout(() => {
      const fakeToken = "fake-oauth-token";
      login(fakeToken);
      navigate("/dashboard", { replace: true });
    }, 1000);
  }, [searchParams, login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ecf6f5]">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <span className="text-lg text-[#1c4145] font-semibold">Processando login...</span>
      </div>
    </div>
  );
}
