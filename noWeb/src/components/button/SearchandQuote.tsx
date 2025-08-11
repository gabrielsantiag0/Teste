import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

export default function SearchandQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  function cleanCep(input: string) {
    return input.replace(/\D/g, "");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);

    const cepLimpo = cleanCep(cep);

    if (cepLimpo.length !== 8) {
      setError("CEP inválido. Deve conter 8 números.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      const data = await res.json();

      if (data.erro) {
        setError("CEP não encontrado.");
        setResult(null);
      } else {
        setResult(data);
      }
    } catch {
      setError("Erro ao buscar CEP.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-4 py-2 rounded flex items-center gap-2"
        >
          <span>Get a Quote</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50 px-2 sm:px-4">
          {/* Modal box */}
          <div
            className="border-black border rounded-md p-4 sm:p-6 w-full max-w-md mx-auto"
            style={{ backgroundColor: '#f8f8f8' }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-4 gap-2 text-center sm:text-left">
              <h2 className="text-lg text-black font-semibold mb-0">Pesquisar CEP</h2>
              <img className="w-16 sm:w-20 pb-2 sm:pb-4" src="/src/assets/logo.png" alt="" />
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 mb-4"
            >
              <input
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                placeholder="Digite o CEP"
                className="border border-black bg-white rounded px-3 py-2 flex-grow"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-lime-400 border border-lime-600 hover:bg-white hover:text-lime-400 text-black font-medium px-4 py-2 rounded disabled:opacity-50"
              >
                {loading ? "Buscando..." : "Buscar"}
              </button>
            </form>

            {error && <p className="text-red-600 mb-2">{error}</p>}

            {result && (
              <div className="bg-white p-3 border border-blue-400 rounded text-sm sm:text-base">
                <p><strong>CEP:</strong> {result.cep}</p>
                <p><strong>Logradouro:</strong> {result.logradouro || "-"}</p>
                <p><strong>Bairro:</strong> {result.bairro || "-"}</p>
                <p><strong>Cidade:</strong> {result.localidade || "-"}</p>
                <p><strong>Estado:</strong> {result.uf || "-"}</p>
              </div>
            )}

            <div className="mt-4 sm:mt-6 text-center sm:text-right">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setCep("");
                  setResult(null);
                  setError("");
                }}
                className="text-black bg-white border px-4 py-2 rounded border-black hover:text-white hover:bg-black"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
