import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { type FC } from "react";
import { useFormContext } from "./formContext";

interface SlideInputProps {
  label: string;
  name: string;
}

export const SlideInput: FC<SlideInputProps> = ({ label, name }) => {
  const form = useFormContext();

  return (
    <Field className="gap-2">
      <FieldTitle>{label}</FieldTitle>

      <form.Field
        name={name}
        children={(field) => (
          <>
            <FieldGroup className="grid grid-cols-[minmax(0,min-content)_auto_minmax(0,min-content)] items-end justify-start gap-1">
              <Field className="w-24">
                <FieldLabel className="text-xs" htmlFor="min">
                  Mínima
                </FieldLabel>
                <Input
                  id="min"
                  placeholder="0.20"
                  value={field.state.value?.[0]}
                  onChange={(e) => {
                    const value = e.target.value;
                    const [min, max] = field.state.value;
                    field.handleChange([value, max]);
                  }}
                />
              </Field>
              <span className="text-center">-</span>
              <Field className="w-24">
                <FieldLabel className="text-xs" htmlFor="max">
                  Máxima
                </FieldLabel>
                <Input
                  id="max"
                  placeholder="0.20"
                  value={field.state.value?.[1]}
                  onChange={(e) => {
                    const value = e.target.value;
                    const [min, max] = field.state.value;
                    field.handleChange([min, value]);
                  }}
                />
              </Field>
            </FieldGroup>

            <Slider
              value={field.state.value}
              onValueChange={field.handleChange}
              min={0}
              max={2}
              step={0.1}
              className="mt-2 w-full"
              aria-label="Price Range"
            />
          </>
        )}
      />
    </Field>
  );
};
