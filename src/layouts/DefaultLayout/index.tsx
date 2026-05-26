import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./AppSidebar";
import { Breadcrumbs } from "./Breadcrumbs";

const DefaultLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="icon" />
      <SidebarInset className="shadow-none! border-none! mb-0!">
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <Breadcrumbs />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 pl-4 pb-6 pt-0 pr-8">
          <div className="min-h-screen flex-1 rounded-md bg-muted md:min-h-min overflow-x-hidden shadow-sm">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DefaultLayout;
