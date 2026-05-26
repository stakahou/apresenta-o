import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useState, type FC } from "react";

interface SlideInputProps {
  label: string;
}

export const SlideInput: FC<SlideInputProps> = ({ label }) => {
  const [value, setValue] = useState([200, 800]);

  return (
    <Field className="gap-2">
      <FieldTitle>{label}</FieldTitle>

      <FieldGroup className="grid grid-cols-[minmax(0,min-content)_auto_minmax(0,min-content)] items-end justify-start gap-1">
        <Field className="w-24">
          <FieldLabel className="text-xs" htmlFor="min">
            Mínima
          </FieldLabel>
          <Input id="min" placeholder="0.20" />
        </Field>
        <span className="text-center">-</span>
        <Field className="w-24">
          <FieldLabel className="text-xs" htmlFor="max">
            Máxima
          </FieldLabel>
          <Input id="max" placeholder="0.20" />
        </Field>
      </FieldGroup>

      <Slider
        value={value}
        onValueChange={(value) => setValue(value as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="Price Range"
      />
    </Field>
  );
};
