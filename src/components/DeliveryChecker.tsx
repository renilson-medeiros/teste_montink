import { useState } from "react";
import { getWithTTL, setWithTTL } from "../utils/localStorageWithTTL";

interface ViaCEPResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export default function DeliveryChecker() {
  const [cep, setCep] = useState(getWithTTL<string>("cep") || "");
  const [address, setAddress] = useState<string | null>(getWithTTL("address"));

  const formatCep = (value: string) => {
    const numeric = value.replace(/\D/g, "").slice(0, 8); // apenas números
    if (numeric.length <= 5) return numeric;
    return `${numeric.slice(0, 5)}-${numeric.slice(5)}`;
  };

  const fetchCEP = async () => {
    const cleanedCep = cep.replace(/\D/g, "");
    if (cleanedCep.length !== 8) return;

    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);
      const data: ViaCEPResponse = await res.json();

      if (!data.erro) {
        const full = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setAddress(full);
        setWithTTL("cep", cep);
        setWithTTL("address", full);
      } else {
        setAddress("CEP não encontrado.");
      }
    } catch (error) {
      setAddress("Erro ao buscar o CEP.");
    }
  };

  return (
    <div className="mt-4">
      <label className="block mb-1 font-semibold">Calcular frete (CEP):</label>
      <input
        value={cep}
        onChange={(e) => setCep(formatCep(e.target.value))}
        onBlur={fetchCEP}
        maxLength={9}
        placeholder="00000-000"
        className="border p-2 rounded w-full"
      />
      {address && 
        <div className="flex flex-col bg-gray-200 p-2 my-2">
          <span className="text-base font-medium">Endereço:</span>
          <p className="mt-2 text-sm">{address}</p>
        </div>
      }
    </div>
  );
}
