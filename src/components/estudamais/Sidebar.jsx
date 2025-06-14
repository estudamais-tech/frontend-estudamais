import React from "react";
import { Link, useLocation } from "react-router-dom";
import useGithubApi from "@/hooks/useGithubApi";

const navItems = [
  { icon: "🏠", label: "Dashboard", to: "/dashboard" },
  { icon: "🎓", label: "Benefícios", to: "/beneficios" },
  { icon: "🧪", label: "Ativar Benefício", to: "/ativar-beneficio" },
  { icon: "📊", label: "Minha Progresso", to: "/minha-progresso" },
  { icon: "🧠", label: "GHSDP Explicado", to: "/ghsdp-explicado" },
  { icon: "🧾", label: "Ajuda", to: "/ajuda" },
];

export default function Sidebar({ onLogout }) {
  const token = import.meta.env.VITE_GITHUB_TEST_TOKEN;
  const { userProfile } = useGithubApi(token);
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col justify-between bg-white w-64 min-h-screen px-4 py-6 border-r border-[#e6eaea] fixed left-0 top-0 z-20">
      <div>
        <div className="flex flex-col items-center mb-8">
          <img
            src={userProfile?.avatar_url}
            alt="Avatar"
            className="w-16 h-16 rounded-full mb-2 border-2 border-[#ecf6f5] object-cover bg-gray-100"
          />
          <div className="text-base font-semibold text-[#1c4145] text-center">
            {userProfile?.name || userProfile?.login || "Usuário"}
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#1c4145] font-medium transition hover:bg-[#ecf6f5] ${location.pathname === item.to ? 'bg-[#ecf6f5] font-bold' : ''}`}
            >
              <span className="text-xl w-6 text-left">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center gap-2 mt-8">
        <button
          onClick={onLogout}
          className="w-full bg-[#e39523] hover:bg-[#c97f1a] text-white font-semibold py-2 px-4 rounded-lg transition text-sm"
        >
          Sair
        </button>
        <span className="text-xs text-gray-400 mt-2">v1.0.0</span>
      </div>
    </aside>
  );
}
