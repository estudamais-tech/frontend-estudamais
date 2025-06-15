import React from "react";
import { useAuth } from '@/context/AuthContext';
import { Link } from "react-router-dom";
import usePerfilGitHub from '@/hooks/usePerfilGitHub';

export default function DashboardEstudante() {
  const { user: perfil, beneficios, loading, atualizarBeneficios } = usePerfilGitHub();
  const { user, logout } = useAuth();

  // Defina benefits somente após beneficios estar disponível
  const benefits = [
    {
      name: "GitHub Pro",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
      ),
      active: beneficios?.githubPro || false,
      color: "#457a8e"
    },
    {
      name: "Copilot",
      icon: (
        <img src="/images/copilot-icon.png" alt="Copilot" className="w-7 h-7" />
      ),
      active: beneficios?.copilot || false,
      color: "#5c8b83"
    },
    {
      name: "Notion",
      icon: (
        <img src="/images/notion-icon.png" alt="Notion" className="w-7 h-7" />
      ),
      active: false,
      color: "#1c4145"
    },
    {
      name: "Adobe",
      icon: (
        <img src="/images/adobe-icon.png" alt="Adobe" className="w-7 h-7" />
      ),
      active: false,
      color: "#e39523"
    },
    {
      name: "Google Cloud",
      icon: (
        <img src="/images/googlecloud-icon.png" alt="Google Cloud" className="w-7 h-7" />
      ),
      active: false,
      color: "#fbdd41"
    },
    {
      name: "Figma",
      icon: (
        <img src="/images/figma-icon.png" alt="Figma" className="w-7 h-7" />
      ),
      active: true,
      color: "#7a9a72"
    }
  ];

  const activeCount = benefits.filter(b => b.active).length;
  const percent = Math.round((activeCount / benefits.length) * 100);

  // Proteja o acesso aos dados enquanto carrega
  if (loading) {
    return (
      <div className="min-h-screen bg-[#ecf6f5] flex flex-col items-center justify-center py-8 px-2">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 text-center">
          <span className="text-xl font-bold text-[#457a8e]">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#ecf6f5] flex flex-col items-center justify-start py-8 px-2">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 relative">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-[#457a8e]">EstudaMais.tech</span>
          <button onClick={logout} className="flex items-center gap-2 text-[#1c4145] hover:text-[#e39523] font-semibold text-base">
            Sair
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" /></svg>
          </button>
        </div>
        {/* Greeting */}
        <h2 className="text-2xl font-bold text-[#1c4145] mb-2">
          {`Olá, ${perfil?.name || 'Estudante'}! Vamos turbinar sua carreira?`}
        </h2>
        {/* Benefits grid */}
        <div className="grid grid-cols-2 gap-4 my-6">
          {benefits.map((b, i) => (
            <div key={b.name} className={`flex flex-col items-center justify-center rounded-xl p-4 shadow-sm border ${b.active ? 'bg-[#ecf6f5] border-[#5c8b83]' : 'bg-white border-[#e39523]'} transition-all`}>
              <div className="mb-2">{b.icon}</div>
              <span className="font-semibold text-[#1c4145] text-base mb-1">{b.name}</span>
              {b.active ? (
                <span className="text-xs text-[#5c8b83] font-bold flex items-center gap-1"><svg className="w-4 h-4" fill="#5c8b83" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg> Ativado</span>
              ) : (
                <span className="text-xs text-[#e39523] font-bold flex items-center gap-1"><svg className="w-4 h-4" fill="#e39523" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4a1 1 0 112 0 1 1 0 01-2 0zm.293-7.707a1 1 0 011.414 0l.293.293.293-.293a1 1 0 111.414 1.414L12.414 8l.293.293a1 1 0 01-1.414 1.414l-.293-.293-.293.293a1 1 0 01-1.414-1.414L9.586 8l-.293-.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg> Ainda não ativado</span>
              )}
            </div>
          ))}
        </div>
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[#1c4145] font-medium">{activeCount} de {benefits.length} benefícios ativados</span>
          <span className="text-sm text-[#1c4145] font-medium">({percent}%)</span>
        </div>
        <div className="w-full h-3 bg-[#ecf6f5] rounded-full mb-6">
          <div className="h-3 rounded-full bg-gradient-to-r from-[#fbdd41] to-[#e39523] transition-all" style={{ width: `${percent}%` }}></div>
        </div>
        {/* Action buttons */}
        <div className="flex gap-3">
          <Link to="/como-ativar-notion" className="flex-1 py-2 px-3 rounded-lg bg-white border border-[#e39523] text-[#e39523] font-semibold text-center hover:bg-[#fbdd41] hover:text-[#1c4145] transition">Como ativar o Notion</Link>
          <Link to="/como-ativar-github-pro" className="flex-1 py-2 px-3 rounded-lg bg-[#457a8e] text-white font-semibold text-center hover:bg-[#5c8b83] transition">Como ativar o GitHub Pro</Link>
        </div>
      </div>
    </div>
  );
}
