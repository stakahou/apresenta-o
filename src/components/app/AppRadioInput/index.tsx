import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import type { FC } from "react";

export interface AppRadioInputProps {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export const AppRadioInput: FC<AppRadioInputProps> = ({
  id,
  value,
  label,
  description,
}) => {
  return (
    <FieldLabel htmlFor={id} className="rounded-[10px]!">
      <Field orientation="horizontal">
        <RadioGroupItem value={value} id={id} />
        <FieldContent className={cn({ "gap-1.5": !!description }, "gap-0")}>
          <FieldTitle className="text-sm font-normal">{label}</FieldTitle>
          <FieldDescription className="text-xs text-gray-500">
            {description}
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  );
};
