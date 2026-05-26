import { AppRadioInput } from "@/components/app/AppRadioInput";
import { AppStepBadge } from "@/components/app/AppStepBadge";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup } from "@/components/ui/radio-group";
import type { ComponentProps, FC } from "react";
import { useFormContext } from "../forms/formContext";

export const StepOne: FC<ComponentProps<typeof AccordionItem>> = ({
  ...props
}) => {
  const form = useFormContext();

  console.log("form :>> ", form);

  const options = [
    { id: "op1", label: "Encapsulation/Molding", value: "op1" },
    { id: "op2", label: "Package Warpage", value: "op2" },
    { id: "op3", label: "Dicing/Singulation", value: "op3" },
    { id: "op4", label: "Curing", value: "op4" },
    { id: "op5", label: "Flip-Chip/Bumping", value: "op5" },
    { id: "op6", label: "Die Attach", value: "op6" },
    { id: "op7", label: "Wafer Backgrinding", value: "op7" },
    { id: "op8", label: "Wire Bonding (ball/wedge bond)", value: "op8" },
    { id: "op9", label: "Análise de Integridade de Sinal", value: "op9" },
  ];

  return (
    <AccordionItem
      {...props}
      value="type"
      className="group flex flex-col gap-4 border-gray-200 border p-6 rounded-[14px] data-closed:bg-gray-200"
    >
      <AccordionTrigger className="p-0 decoration-transparent cursor-pointer pointer-events-none">
        <div className="flex flex-col select-none">
          <span className="text-black text-xl font-normal leading-7">
            Escolha o processo do encapsulamento
          </span>
        </div>
        <AppStepBadge completed>Passo 1</AppStepBadge>
      </AccordionTrigger>

      <AccordionContent>
        <form.Field name="type">
          {(field) => (
            <RadioGroup
              value={field.state.value}
              onValueChange={field.handleChange}
              defaultValue="plus"
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {options.map((option) => (
                <AppRadioInput key={option.id} {...option} />
              ))}
            </RadioGroup>
          )}
        </form.Field>
      </AccordionContent>
    </AccordionItem>
  );
};
