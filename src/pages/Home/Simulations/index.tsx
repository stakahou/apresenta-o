import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  FilePenLine,
  Heart,
  SquareArrowOutUpRight,
} from "lucide-react"; 
import type { FC } from "react";

export const Simulations: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h4 className="font-semibold text-[20px] leading-7 tracking-[-0.5%]">
          Simulações Anteriores
        </h4>
        <Button variant="secondary">
          Ver Todas <SquareArrowOutUpRight />
        </Button>
      </div>

      <div className="flex gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card
            key={i}
            className="gap-4 rounded-[14px] border-gray-200 max-w-3xs shadow-lg"
          >
            <CardHeader className="grid grid-cols-2 grid-rows-1 gap-0 items-center">
              <CardTitle>
                <Badge variant="secondary">Exploração Inteligente</Badge>
              </CardTitle>
              <CardAction>
                <Button variant="ghost" size="icon">
                  <Heart />
                </Button>
              </CardAction>
            </CardHeader>

            <CardContent className="flex flex-col gap-1">
              <div className="flex items-center gap-1 font-medium text-xs leading-5 tracking-normal">
                <CalendarDays size="16" />
                <span>01/01/2026 às 12h30</span>
              </div>
              <div className="flex items-center gap-1 font-medium text-sm leading-5 tracking-normal">
                <FilePenLine size="16" />
                <span>Térmica, Void Information</span>
              </div>
              <span className="font-normal text-sm leading-5 tracking-normal">
                WSI: 20%
              </span>
            </CardContent>

            <CardFooter className="flex justify-between border-0 pt-0">
              <Button size="sm" variant="ghost" className="p-0">
                Duplicar
              </Button>
              <Button size="sm" variant="ghost" className="p-0">
                Conferir
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
