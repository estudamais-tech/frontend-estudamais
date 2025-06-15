import React from "react";
import { Link } from "react-router-dom";

export default function GithubProTutorial() {
  return (
    <div className="min-h-screen bg-[#ecf6f5] flex flex-col items-center justify-center py-8 px-2">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 text-center border border-[#e39523]">
        <h1 className="text-2xl font-bold text-[#1c4145] mb-4">Como ativar o GitHub Pro</h1>
        <ol className="text-left text-[#1c4145] font-medium mb-6 space-y-3">
          <li><span className="font-bold text-[#e39523]">1.</span> Acesse <a href="https://education.github.com/pack" target="_blank" rel="noopener noreferrer" className="text-[#457a8e] underline">education.github.com/pack</a></li>
          <li><span className="font-bold text-[#e39523]">2.</span> Faça login com sua conta GitHub</li>
          <li><span className="font-bold text-[#e39523]">3.</span> Preencha com seu <span className="text-[#457a8e]">e-mail institucional</span></li>
          <li><span className="font-bold text-[#e39523]">4.</span> Envie um comprovante acadêmico válido</li>
        </ol>
        <Link to="/dashboard" className="inline-block py-2 px-4 rounded-lg bg-[#457a8e] text-white font-semibold hover:bg-[#1c4145] transition">
          ← Voltar para o Dashboard
        </Link>
      </div>
    </div>
  );
}
