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
            <SelectItem value="DDR5">DDR5</SelectItem>
            <SelectItem value="FLASH 1">FLASH 1</SelectItem>
            <SelectItem value="FLASH 2">FLASH 2</SelectItem>
            <SelectItem value="LPDRAM">LPDRAM</SelectItem>
            <SelectItem value="eMMC">eMMC</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
};
