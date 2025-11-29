/**
 * Application Sidebar Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link, useLocation } from "wouter";
import {
  Binary,
  Cpu,
  GitBranch,
  Network,
  RotateCw,
  Server,
  Database,
  Code,
  Pointer,
  Box,
  Sparkles,
  Layers,
  Home,
  BookOpen,
  GraduationCap,
  Github,
  Mail,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/lib/course-data";
import { authorInfo } from "@shared/schema";

const iconMap: Record<string, React.ElementType> = {
  Binary,
  Cpu,
  GitBranch,
  Network,
  RotateCw,
  Server,
  Database,
  Code,
  Pointer,
  Box,
  Sparkles,
  Layers,
};

const categoryLabels: Record<string, string> = {
  fundamentals: "Computer Fundamentals",
  architecture: "CPU Architecture",
  "c-programming": "C Programming",
  "cpp-programming": "C++ Programming",
};

const categoryColors: Record<string, string> = {
  fundamentals: "bg-chart-1/10 text-chart-1",
  architecture: "bg-chart-2/10 text-chart-2",
  "c-programming": "bg-chart-3/10 text-chart-3",
  "cpp-programming": "bg-chart-4/10 text-chart-4",
};

export function AppSidebar() {
  const [location] = useLocation();

  const groupedModules = modules.reduce(
    (acc, module) => {
      if (!acc[module.category]) {
        acc[module.category] = [];
      }
      acc[module.category].push(module);
      return acc;
    },
    {} as Record<string, typeof modules>
  );

  return (
    <Sidebar>
      <SidebarHeader className="border-b p-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            SD
          </div>
          <div>
            <h2 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors">
              Shashank Daksh
            </h2>
            <p className="text-xs text-muted-foreground">CS Mastery Course</p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location === "/"}
                  data-testid="link-home"
                >
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={location === "/about"}
                  data-testid="link-about"
                >
                  <Link href="/about">
                    <GraduationCap className="h-4 w-4" />
                    <span>About Author</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {Object.entries(groupedModules).map(([category, categoryModules]) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className={`text-[10px] px-1.5 py-0 ${categoryColors[category]}`}
              >
                {categoryModules.length}
              </Badge>
              {categoryLabels[category]}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {categoryModules.map((module) => {
                  const Icon = iconMap[module.icon] || BookOpen;
                  const isActive = location.startsWith(
                    `/module/${module.slug}`
                  );

                  return (
                    <SidebarMenuItem key={module.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        data-testid={`link-module-${module.slug}`}
                      >
                        <Link href={`/module/${module.slug}`}>
                          <Icon className="h-4 w-4" />
                          <span className="truncate">{module.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <a
              href={authorInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-sidebar-github"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href={`mailto:${authorInfo.email}`}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-sidebar-email"
            >
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground">
            {authorInfo.copyright}
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
