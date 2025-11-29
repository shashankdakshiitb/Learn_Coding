/**
 * Header Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Moon, Sun, Menu, Search, Github, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/lib/theme-provider";
import { useSidebar } from "@/components/ui/sidebar";
import { authorInfo, courseMetadata } from "@shared/schema";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="md:hidden"
          data-testid="button-sidebar-toggle"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <div className="hidden sm:block">
            <h1 className="text-sm font-semibold leading-none">
              {courseMetadata.title}
            </h1>
            <p className="text-xs text-muted-foreground">
              By {authorInfo.name}
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center max-w-md mx-auto">
          <div className="relative w-full hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search modules, lessons, code..."
              className="pl-8 w-full"
              data-testid="input-search"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-github"
              >
                <a
                  href={authorInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View on GitHub</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-email"
              >
                <a href={`mailto:${authorInfo.email}`}>
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Contact</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact Shashank Daksh</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                data-testid="button-theme-toggle"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle dark mode</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
