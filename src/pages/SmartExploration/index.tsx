import { AppHeader } from "@/components/app/AppHeader";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAppForm } from "./forms/formContext";
import { schema } from "./forms/schema";
import { StepOne } from "./Steps/StepOne";
import { StepThree } from "./Steps/StepThree";
import { StepTwo } from "./Steps/StepTwo";

const STEPS = ["type", "scenario", "params"];

const SmartExploration = () => {
  const [step, setStep] = useState(STEPS[0]);

  const form = useAppForm({
    defaultValues: {
      type: "op1",
      scenario: "",
    },
    validators: { onSubmit: schema },
    onSubmit: ({ value }) => {
      console.log(value);
    },
  });

  const stepConductor = (direction: "prev" | "next") => () => {
    setStep((current) => {
      const index = STEPS.indexOf(current);
      if (index === -1) return current;

      const nextIndex = direction === "prev" ? index - 1 : index + 1;

      if (nextIndex < 0 || nextIndex >= STEPS.length) {
        return current;
      }

      return STEPS[nextIndex];
    });
  };

  console.log("state ", form.state, form.store);

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <AppHeader>
        <span className="text-2xl font-semibold leading-8 tracking-[-0.144px]">
          Exploração Inteligente
        </span>
        <span className="font-normal leading-6">
          Preencha todos os campos abaixo para realizar sua exploração
          inteligente.
        </span>
      </AppHeader>

      <form.AppForm>
        <div className="flex flex-col flex-1 gap-4 p-6 pb-0">
          <Accordion defaultValue={[step]} value={[step]} className="gap-4">
            <StepOne />
            <StepTwo />
            <StepThree />
          </Accordion>

          <div className="flex gap-2 justify-end p-6 mt-auto border-t border-slate-200 -mx-6">
            <Button
              size="sm"
              variant="ghost"
              className="border-black cursor-pointer"
              onClick={stepConductor("prev")}
            >
              <ArrowLeft /> Voltar
            </Button>
            <Button
              size="sm"
              className="bg-black cursor-pointer hover:bg-black/75"
              onClick={stepConductor("next")}
            >
              Próximo Passo <ArrowRight />
            </Button>
          </div>
        </div>
      </form.AppForm>
    </div>
  );
};

export default SmartExploration;
