/**
 * Main Application Component
 * Computer Science Mastery Course
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ModulePage from "@/pages/ModulePage";
import LessonPage from "@/pages/LessonPage";
import AboutPage from "@/pages/AboutPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/module/:slug" component={ModulePage} />
      <Route path="/module/:slug/lesson/:lessonSlug" component={LessonPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const sidebarStyle = {
    "--sidebar-width": "18rem",
    "--sidebar-width-icon": "3.5rem",
  } as React.CSSProperties;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="shashank-daksh-cs-theme">
        <TooltipProvider>
          <SidebarProvider style={sidebarStyle}>
            <div className="flex min-h-screen w-full">
              <AppSidebar />
              <SidebarInset className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 overflow-auto">
                  <Router />
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
