import React from "react";
import { Link } from "react-router-dom";

const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = "http://localhost:5173/login/callback";
const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=read:user%20user:email`;

export default function Login() {
  const handleGithubLogin = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <button
          className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 mb-4"
          onClick={handleGithubLogin}
        >
          Login com GitHub
        </button>
        <Link
          to="/como-criar-conta-github"
          className="text-blue-600 hover:underline text-sm block text-center"
        >
          Como criar conta no GitHub?
        </Link>
      </div>
    </div>
  );
}
