import { useEffect, useState } from "react";

// Recebe um token de acesso do GitHub
export default function useGithubApi(token) {
  const [userProfile, setUserProfile] = useState(null);
  const [isGithubPro, setIsGithubPro] = useState(false);
  const [isCopilotActive, setIsCopilotActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    setLoading(true);

    // Função para buscar dados do usuário
    const fetchUserProfile = async () => {
      try {
        const res = await fetch("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        });
        if (!res.ok) throw new Error("Erro ao buscar perfil do usuário");
        const data = await res.json();
        setUserProfile({
          login: data.login,
          avatar_url: data.avatar_url,
          email: data.email,
          type: data.type,
        });
      } catch (err) {
        console.error("Erro ao buscar perfil do GitHub:", err);
      }
    };

    // Função para buscar marketplace_purchases
    const fetchMarketplace = async () => {
      try {
        const res = await fetch("https://api.github.com/user/marketplace_purchases", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json",
          },
        });
        if (!res.ok) throw new Error("Erro ao buscar marketplace");
        const purchases = await res.json();
        // Lógica simples: se algum plano tem "Pro" no nome, é Pro
        const isPro = purchases.some((p) =>
          p.plan && p.plan.name && p.plan.name.toLowerCase().includes("pro")
        );
        setIsGithubPro(isPro);
        // Simulação: se algum plano tem "Copilot" no nome, está ativo
        const hasCopilot = purchases.some((p) =>
          p.plan && p.plan.name && p.plan.name.toLowerCase().includes("copilot")
        );
        setIsCopilotActive(hasCopilot);
      } catch (err) {
        // Se der erro, simula Copilot como false
        setIsCopilotActive(false);
        setIsGithubPro(false);
        console.error("Erro ao buscar marketplace do GitHub:", err);
      }
    };

    Promise.all([fetchUserProfile(), fetchMarketplace()]).finally(() => {
      setLoading(false);
    });
  }, [token]);

  return { userProfile, isGithubPro, isCopilotActive, loading };
}
