/**
 * Homepage Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link } from "wouter";
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
  Clock,
  BookOpen,
  GraduationCap,
  Github,
  Mail,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { modules } from "@/lib/course-data";
import { authorInfo, courseMetadata } from "@shared/schema";
import { Footer } from "@/components/Footer";

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

const difficultyColors: Record<string, string> = {
  beginner: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  intermediate: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  advanced: "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

const categoryColors: Record<string, string> = {
  fundamentals: "border-l-chart-1",
  architecture: "border-l-chart-2",
  "c-programming": "border-l-chart-3",
  "cpp-programming": "border-l-chart-4",
};

export default function Home() {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessonCount, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Based on MIT 6.004, IIT NPTEL & Oxford CS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {courseMetadata.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            {courseMetadata.subtitle}
          </p>
          <p className="text-lg font-medium text-primary mb-6">
            By {authorInfo.name}
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            {courseMetadata.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>{courseMetadata.totalModules} Modules</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span>{courseMetadata.totalHours}+ Hours</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>{totalLessons} Lessons</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" data-testid="button-start-learning">
              <Link href="/module/binary-digital-logic">
                Start Learning
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-view-github">
              <a
                href={authorInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 border-y bg-card/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Technical Diagrams</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-2">300+</div>
              <div className="text-sm text-muted-foreground">C Code Examples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-3">200+</div>
              <div className="text-sm text-muted-foreground">C++ Code Examples</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-chart-4">150+</div>
              <div className="text-sm text-muted-foreground">Exercises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">Course Curriculum</h2>
            <p className="text-muted-foreground">
              12 comprehensive modules from computer fundamentals to advanced C++ programming
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((module) => {
              const Icon = iconMap[module.icon] || BookOpen;

              return (
                <Link key={module.id} href={`/module/${module.slug}`}>
                  <Card
                    className={`h-full hover-elevate cursor-pointer border-l-4 ${categoryColors[module.category]}`}
                    data-testid={`card-module-${module.slug}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <Badge
                              variant="outline"
                              className="text-[10px] mb-1"
                            >
                              Module {module.order}
                            </Badge>
                            <CardTitle className="text-base leading-tight">
                              {module.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {module.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className={difficultyColors[module.difficulty]}
                        >
                          {module.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {module.estimatedHours}h
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {module.lessonCount} lessons
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 px-4 bg-card/50 border-y">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground text-3xl font-bold shrink-0">
                  SD
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-2">{authorInfo.name}</h2>
                  <p className="text-muted-foreground mb-4">{authorInfo.bio}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`mailto:${authorInfo.email}`}>
                        <Mail className="mr-2 h-4 w-4" />
                        {authorInfo.email}
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={authorInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* References Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Academic References</h2>
          <p className="text-muted-foreground mb-8">
            This course draws from world-class curricula and textbooks
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="text-lg font-semibold mb-2">MIT 6.004</div>
                <p className="text-sm text-muted-foreground">
                  Computation Structures - Digital systems from transistors to complete processors
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-lg font-semibold mb-2">IIT NPTEL</div>
                <p className="text-sm text-muted-foreground">
                  Programming in C++ and Modern C++ by Prof. Partha Pratim Das
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="text-lg font-semibold mb-2">Oxford CS</div>
                <p className="text-sm text-muted-foreground">
                  Imperative Programming and Computer Science Foundations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
