import React from "react";
import { useAuth } from "../context/AuthContext";
import useGithubApi from "@/hooks/useGithubApi";

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export default function Dashboard() {
  const { logout } = useAuth();
  const token = import.meta.env.VITE_GITHUB_TEST_TOKEN;
  const { userProfile, isGithubPro, isCopilotActive, loading } = useGithubApi(token);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#457a8e] to-[#7a9a72] px-2">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md flex flex-col items-center p-6 mx-auto">
        {loading ? (
          <p className="text-[#457a8e] text-lg my-20">Carregando dados do GitHub...</p>
        ) : userProfile ? (
          <>
            <img
              src={userProfile.avatar_url}
              alt="Avatar GitHub"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow object-cover bg-gray-100"
            />
            <div className="text-2xl font-semibold mb-1 text-[#1c4145] text-center">
              {userProfile.name || <span className="italic text-gray-400">Nome não disponível</span>}
            </div>
            <div className="text-base font-mono mb-2 text-[#5c8b83] text-center">
              {userProfile.login}
            </div>
            <div className="text-xs text-[#457a8e] mb-4 text-center">
              Membro desde: {formatDate(userProfile.created_at)}
            </div>
            <div className="flex flex-row gap-3 mb-8">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center ${isGithubPro ? 'bg-[#7a9a72] text-white' : 'bg-[#e39523] text-white'}`}>
                GitHub Pro {isGithubPro ? '✅' : '❌'}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center ${isCopilotActive ? 'bg-[#7a9a72] text-white' : 'bg-[#e39523] text-white'}`}>
                Copilot {isCopilotActive ? '✅' : '❌'}
              </span>
            </div>
            <button
              className="bg-[#e39523] hover:bg-[#c97f1a] text-white font-semibold py-2 px-8 rounded-lg transition text-base shadow mt-2 w-full max-w-xs mx-auto"
              onClick={logout}
            >
              Sair
            </button>
          </>
        ) : (
          <p className="text-[#e39523] text-lg my-20">Não foi possível carregar dados do GitHub.</p>
        )}
      </div>
    </div>
  );
}
