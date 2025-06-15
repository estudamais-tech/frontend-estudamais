import { useState, useEffect, useCallback } from 'react';

// Hook para buscar perfil do GitHub e benefícios
export default function usePerfilGitHub() {
  const [user, setUser] = useState({});
  const [beneficios, setBeneficios] = useState({});
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  const token = localStorage.getItem('auth_token');

  // Busca dados do usuário e benefícios
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setErro(null);
      try {
        // Busca perfil do GitHub
        const userRes = await fetch('/api/user', {
          headers: { Authorization: token },
        });
        if (!userRes.ok) throw new Error('Erro ao buscar perfil GitHub');
        const userData = await userRes.json();

        // Busca benefícios
        const benRes = await fetch('/api/beneficios');
        if (!benRes.ok) throw new Error('Erro ao buscar benefícios');
        const benData = await benRes.json();

        setUser(userData || {});
        setBeneficios(benData || {});
      } catch (err) {
        setErro(err.message);
        setUser({});
        setBeneficios({});
      } finally {
        setLoading(false);
      }
    }
    if (token) fetchData();
    else {
      setUser({});
      setBeneficios({});
      setLoading(false);
    }
  }, [token]);

  // Função para atualizar benefícios
  const atualizarBeneficios = useCallback(async (data) => {
    setLoading(true);
    setErro(null);
    try {
      const res = await fetch('/api/beneficios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Erro ao atualizar benefícios');
      const benData = await res.json();
      setBeneficios(benData.beneficiosAtivos || {});
      return benData;
    } catch (err) {
      setErro(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user: user || {},
    beneficios: beneficios || {},
    loading,
    erro,
    atualizarBeneficios,
  };
}
