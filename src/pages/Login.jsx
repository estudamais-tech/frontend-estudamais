import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const handleGithubLogin = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = "http://localhost:5173/login/callback";
    const scope = "read:user user:email";
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#ecf6f5] px-4">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1c4145] mb-4">
          Acesse a plataforma com seu GitHub
        </h1>
        <p className="text-center text-[#3a5c60] mb-6 text-base">
          Para utilizar os benefícios como GitHub Pro e Copilot, é necessário
          entrar com sua conta do GitHub.
        </p>
        <Link
          to="/como-criar-conta-github"
          className="text-[#e39523] hover:underline text-sm font-medium mb-8"
        >
          Não tem GitHub? Veja como criar uma conta.
        </Link>
        <button
          onClick={handleGithubLogin}
          className="flex items-center justify-center w-full py-3 px-6 rounded-xl text-lg font-bold text-[#1c4145] bg-gradient-to-r from-[#fbdd41] to-[#e39523] hover:from-[#ffe066] hover:to-[#e39523] transition mb-2 shadow-md gap-3"
        >
          <span className="inline-block w-6 h-6 mr-2">
            {/* GitHub SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </span>
          Entrar com GitHub
        </button>
      </div>
    </div>
  );
}
