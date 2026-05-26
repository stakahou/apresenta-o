import logo from "@/assets/images/logo_ic.svg";
import { Button } from "@/components/ui/button";

export const AppSidebarFooter = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col px-2">
        <span className="text-sm text-black font-normal leading-5 tracking-normal">
          Anderson Silva
        </span>
        <span className="text-xs text-black font-normal leading-4 tracking-normal">
          Engenheiro
        </span>
      </div>

      <Button
        variant="outline"
        className="text-[#9F1C21] border-[#9F1C21] bg-transparent hover:bg-[#9F1C21] hover:text-white px-8 py-2 hover:cursor-pointer"
        size="lg"
      >
        Sair do Sistema
      </Button>

      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-black text-[14px] font-medium leading-3.5">
          Powered by
        </span>
        <img alt="logo" src={logo} className="h-5 w-auto" />
      </div>
    </div>
  );
};
