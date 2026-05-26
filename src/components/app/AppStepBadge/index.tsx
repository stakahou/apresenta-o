import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import type { FC, PropsWithChildren } from "react";

export interface AppStepBadgeProps {
  completed?: boolean;
}

export const AppStepBadge: FC<PropsWithChildren<AppStepBadgeProps>> = (
  props
) => {
  const { children, completed = false } = props;
  return (
    <div className="flex gap-2 items-center">
      {completed && <CheckCircle />}

      <Badge
        className={cn(
          "text-black bg-gray-200 h-5.5 rounded-sm py-0.5 px-2 text-xs font-medium",
          "group-data-closed:bg-white",
          { "bg-black! text-white": completed }
        )}
      >
        {children}
      </Badge>
    </div>
  );
};
