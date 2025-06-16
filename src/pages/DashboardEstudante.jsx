import React from "react";
import { useAuth } from '@/context/AuthContext';
import { Link } from "react-router-dom";
import usePerfilGitHub from '@/hooks/usePerfilGitHub';
import SidebarEstudante from '@/components/estudamais/SidebarEstudante';
import Gauge from '@/components/estudamais/Gauge';
import GaugeChart from 'react-gauge-chart';

export default function DashboardEstudante() {
  const { user: perfil, beneficios, loading, atualizarBeneficios } = usePerfilGitHub();
  const { user, logout } = useAuth();

  // Exemplo de benefícios reais vindos do backend (mock ou API)
  const perks = [
    { nome: 'Microsoft Azure for Students', valor: 200, status: 'ativo', descricao: 'Créditos em serviços de nuvem Microsoft' },
    { nome: 'Codecov', valor: 249, status: 'ativo', descricao: 'Ferramenta de code coverage' },
    { nome: 'CodeScene', valor: 399, status: 'ativo', descricao: 'Plataforma de análise de código' },
    { nome: 'Namecheap', valor: 0, status: 'inativo', descricao: 'Domínio .me grátis' },
    // ... outros benefícios ...
  ];

  // Se vier do hook, use: const perks = beneficios?.lista || [];
  const perksAtivos = perks.filter(p => p.status === 'ativo');
  const valorTotal = perksAtivos.reduce((acc, p) => acc + (p.valor || 0), 0);
  const totalPerks = perks.length;
  const ativos = perksAtivos.length;

  // Use beneficios do hook
  const lista = Array.isArray(beneficios) ? beneficios : (beneficios?.lista || []);
  const desbloqueados = lista.filter(b => b.status === 'ativo');
  const total = desbloqueados.reduce((sum, b) => sum + (b.valor || 0), 0);
  const meta = 82584;
  const percent = Math.min(1, total / meta);

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
    <div className="min-h-screen bg-[#ecf6f5] flex">
      <SidebarEstudante />
      <main className="flex-1 ml-64 flex flex-col items-center justify-start py-12 px-4">
        {/* GaugeChart centralizado */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center text-[#1c4145] mb-8 w-full max-w-xl mx-auto">
          <h2 className="text-xl font-semibold mb-2">
            ${total} desbloqueados – {desbloqueados.length} de {lista.length} benefícios
          </h2>
          <p className="text-sm text-[#5c8b83] mb-4">Progresso até ${meta.toLocaleString()}</p>
          <div className="flex justify-center">
            <GaugeChart
              id="estudamais-gauge"
              nrOfLevels={30}
              colors={['#e39523', '#fbdd41', '#7a9a72']}
              arcWidth={0.2}
              percent={percent}
              textColor="#1c4145"
              formatTextValue={() => `$${total}`}
              style={{ width: '100%', maxWidth: 320 }}
            />
          </div>
        </div>
        {/* Top: Gauge + resumo */}
        <section className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center mb-10">
          <Gauge
            value={valorTotal}
            max={82584}
            label={`$${valorTotal} desbloqueados – ${ativos} de ${totalPerks} benefícios`}
            goal="$82,584"
            currency="$"
            colorFrom="#fbdd41"
            colorTo="#e39523"
          />
        </section>
        {/* Cards de benefícios desbloqueados */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1c4145] mb-6">Meus Benefícios Desbloqueados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perksAtivos.map((perk, idx) => (
              <div key={perk.nome} className="rounded-xl border-2 border-[#7a9a72] bg-white p-6 flex flex-col shadow-md hover:shadow-lg transition-all">
                <div className="text-lg font-bold text-[#1c4145] mb-1">{perk.nome}</div>
                <div className="text-sm text-[#1c4145] opacity-80 mb-2">{perk.descricao}</div>
                <div className="text-base font-semibold text-[#7a9a72] mb-4">${perk.valor} valor</div>
                <button className="mt-auto px-4 py-2 rounded-lg border border-[#e39523] text-[#e39523] font-semibold hover:bg-[#fbdd41] hover:text-[#1c4145] transition">Reverter</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
