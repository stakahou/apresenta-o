import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ProductSelect = () => {
  return (
    <Field>
      <FieldLabel htmlFor="product-select">Selecione o Produto</FieldLabel>

      <Select>
        <SelectTrigger id="product-select" className="w-full max-w-48">
          <SelectValue placeholder="Escolha o produto" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="1">DDR5</SelectItem>
            <SelectItem value="2">FLASH 1</SelectItem>
            <SelectItem value="3">FLASH 2</SelectItem>
            <SelectItem value="4">LPDRAM</SelectItem>
            <SelectItem value="5">eMMC</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
};
