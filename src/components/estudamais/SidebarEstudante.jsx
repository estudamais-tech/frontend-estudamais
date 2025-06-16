import React from "react";
import { Link, useLocation } from "react-router-dom";
import usePerfilGitHub from "@/hooks/usePerfilGitHub";
import { useAuth } from '@/context/AuthContext';

const navItems = [
  { icon: "🏠", label: "Dashboard", to: "/dashboard" },
  { icon: "🔍", label: "Explore", to: "/explore" },
  { icon: "🎓", label: "Aprender", to: "/aprenda" },
  { icon: "💼", label: "Vagas", to: "/vagas" },
  { icon: "🧪", label: "Testes", to: "/testes" },
  { icon: "⚙️", label: "Configurações", to: "/config" },
];

export default function SidebarEstudante() {
  const { user: perfil, loading } = usePerfilGitHub();
  const { logout } = useAuth();
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-30 h-screen w-64 bg-[#1c4145] flex flex-col justify-between shadow-lg border-r border-[#e39523]">
      <div>
        <div className="flex flex-col items-center py-8">
          {loading ? (
            <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse mb-3" />
          ) : (
            <img
              src={perfil?.avatar_url || perfil?.avatar || "/images/luiza2.jpeg"}
              alt="Avatar do GitHub"
              className="w-20 h-20 rounded-full border-4 border-white shadow-md mb-3 object-cover bg-gray-100"
            />
          )}
          <div className="text-lg font-bold text-[#ecf6f5] text-center">
            {perfil?.name || perfil?.login || "Usuário"}
          </div>
          <div className="text-xs text-[#ecf6f5] opacity-80 text-center break-all">
            {perfil?.email || ""}
          </div>
        </div>
        <nav className="flex flex-col gap-1 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg text-[#ecf6f5] font-medium transition hover:bg-[#457a8e] text-base ${location.pathname === item.to ? 'bg-[#457a8e] font-bold' : ''}`}
            >
              <span className="text-xl w-7 text-left">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="px-6 py-6">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-4 py-2 rounded-lg bg-[#e39523] text-[#1c4145] font-semibold hover:bg-[#ecb95c] transition text-base justify-center"
        >
          <span className="text-xl">🚪</span> Sair
        </button>
      </div>
    </aside>
  );
}
