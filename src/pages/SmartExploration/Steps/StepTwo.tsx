import { AppRadioInput } from "@/components/app/AppRadioInput";
import { AppStepBadge } from "@/components/app/AppStepBadge";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup } from "@/components/ui/radio-group";
import type { ComponentProps, FC } from "react";

export const StepTwo: FC<ComponentProps<typeof AccordionItem>> = ({
  ...props
}) => {
  const options = [
    {
      id: "op1",
      label: "Delaminação",
      description: "Simulação mecânica",
      value: "op1",
    },
    {
      id: "op2",
      label: "Warpage (pós-cura)",
      description: "Simulação mecânica",
      value: "op2",
    },
    {
      id: "op3",
      label: "Void formation",
      description: "Simulação mecânica",
      value: "op3",
    },
    {
      id: "op4",
      label: "Wire sweep",
      description: "Simulação mecânica",
      value: "op4",
    },
  ];

  return (
    <AccordionItem
      {...props}
      value="scenario"
      className="group flex flex-col gap-4 border-gray-200 border p-6 rounded-[14px] data-closed:bg-gray-200"
    >
      <AccordionTrigger className="p-0 decoration-transparent cursor-pointer pointer-events-none">
        <div className="flex flex-col select-none">
          <span className="text-black text-xl font-normal leading-7">
            Escolha o cenário de simulação
          </span>
          <span className="text-gray-500 text-sm font-normal leading-6">
            Defina o processo de encapsulamento para visualizar os cenários
            disponíveis.
          </span>
        </div>
        <AppStepBadge>Passo 2</AppStepBadge>
      </AccordionTrigger>

      <AccordionContent>
        <RadioGroup
          defaultValue="plus"
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {options.map((option) => (
            <AppRadioInput key={option.id} {...option} />
          ))}
        </RadioGroup>
      </AccordionContent>
    </AccordionItem>
  );
};
