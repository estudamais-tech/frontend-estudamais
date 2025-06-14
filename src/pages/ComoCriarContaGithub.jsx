import React from "react";
import { Link } from "react-router-dom";

export default function ComoCriarContaGithub() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Como criar uma conta no GitHub</h1>
        <ol className="list-decimal pl-5 mb-4 text-gray-700">
          <li>Acesse o site <a href="https://github.com/join" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">github.com/join</a></li>
          <li>Preencha seu e-mail, crie um nome de usuário e senha.</li>
          <li>Siga as instruções para verificar seu e-mail.</li>
          <li>Pronto! Sua conta GitHub estará criada.</li>
        </ol>
        <Link to="/login" className="text-blue-600 hover:underline text-sm block text-center">Voltar para o login</Link>
      </div>
    </div>
  );
}
