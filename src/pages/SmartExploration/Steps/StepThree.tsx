import { AppStepBadge } from "@/components/app/AppStepBadge";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FieldGroup } from "@/components/ui/field";
import type { ComponentProps, FC } from "react";
import { ProductSelect } from "../forms/ProductSelect";
import { SlideInput } from "../forms/SlideInput";

export const StepThree: FC<ComponentProps<typeof AccordionItem>> = ({
  ...props
}) => {
  return (
    <AccordionItem
      {...props}
      value="params"
      className="group flex flex-col gap-4 border-gray-200 border p-6 rounded-[14px] data-closed:bg-gray-200"
    >
      <AccordionTrigger className="p-0 decoration-transparent cursor-pointer pointer-events-none">
        <div className="flex flex-col select-none">
          <span className="text-black text-xl font-normal leading-7">
            Defina os parâmetros
          </span>
          <span className="text-gray-500 text-sm font-normal leading-6">
            Solicitaremos parâmetros com base no cenário de simulação escolhido.
          </span>
        </div>
        <AppStepBadge>Passo 3</AppStepBadge>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col gap-8">
        <FieldGroup className="grid grid-cols-2">
          <ProductSelect />
          <SlideInput label="Espessura do Die" name="die" />
        </FieldGroup>

        <FieldGroup className="grid grid-cols-2">
          <SlideInput label="Espessura do Encapsulante" name="enca" />
          <SlideInput label="Espessura do Substrato" name="sub" />
        </FieldGroup>
      </AccordionContent>
    </AccordionItem>
  );
};
