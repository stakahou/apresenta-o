import { AppHeader } from "@/components/app/AppHeader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Simulations } from "./Simulations";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-white">
      <AppHeader>
        <span className="text-2xl font-semibold leading-8 tracking-[-0.144px]">
          Bem-vindo ao AI Advanced
        </span>
        <span className="font-normal leading-6">
          Seu agente autônomo para execução e análise de simulações em massa na
          fabricação de semicondutores.
        </span>
      </AppHeader>

      <div className="flex flex-col flex-1 gap-4 p-6">
        <div>
          <h2 className="text-black text-3xl font-semibold leading-9 tracking-[-0.75%] max-w-md whitespace-break-spaces">
            Inicie sua Análise de Simulações em Massa
          </h2>

          <ul className="text-gray-500 leading-6 tracking-normal font-normal mt-2">
            <li>
              Escolha como quer fazer sua análise de simulações em massa antes
              de simular usando o Ansys.
            </li>
            <li>
              Escolha <strong>Exploração Inteligente</strong> para explorar
              múltiplos cenários de simulação.
            </li>
            <li>
              Escolha <strong>Simulação Individual</strong> para explorar apenas
              um cenário de simulação.
            </li>
          </ul>

          <div className="flex gap-2 self-end-safe mt-4">
            <Link to="/smart-exploration">
              <Button>Exploração Inteligente</Button>
            </Link>
            <Button variant="link">Simulação Individual</Button>
          </div>
        </div>

        <Separator className="my-4" />

        <Simulations />
      </div>
    </div>
  );
};

export default HomePage;
