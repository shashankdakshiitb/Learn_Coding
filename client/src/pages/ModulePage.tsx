/**
 * Module Page Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link, useParams } from "wouter";
import {
  ChevronRight,
  Clock,
  BookOpen,
  CheckCircle,
  Circle,
  ArrowLeft,
  ArrowRight,
  Target,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  modules,
  getLessonsByModule,
  getModuleBySlug,
} from "@/lib/course-data";
import { authorInfo } from "@shared/schema";
import { Footer } from "@/components/Footer";

const difficultyColors: Record<string, string> = {
  beginner: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  intermediate: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  advanced: "bg-chart-4/10 text-chart-4 border-chart-4/20",
};

export default function ModulePage() {
  const params = useParams<{ slug: string }>();
  const module = getModuleBySlug(params.slug || "");

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The module you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  const lessons = getLessonsByModule(module.id);
  const prevModule = modules.find((m) => m.order === module.order - 1);
  const nextModule = modules.find((m) => m.order === module.order + 1);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-card/50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{module.title}</span>
          </div>
        </div>
      </div>

      {/* Module Header */}
      <section className="py-10 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge variant="outline">Module {module.order}</Badge>
            <Badge
              variant="outline"
              className={difficultyColors[module.difficulty]}
            >
              {module.difficulty}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h1>

          <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
            {module.description}
          </p>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{module.estimatedHours} hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span>{module.lessonCount} lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span>By {authorInfo.name}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - Lessons */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Lessons</h2>
              <div className="space-y-3">
                {lessons.length > 0 ? (
                  lessons.map((lesson, index) => (
                    <Link
                      key={lesson.id}
                      href={`/module/${module.slug}/lesson/${lesson.slug}`}
                    >
                      <Card
                        className="hover-elevate cursor-pointer"
                        data-testid={`card-lesson-${lesson.slug}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium mb-1">{lesson.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {lesson.description}
                              </p>
                              <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {lesson.estimatedMinutes} min
                                </span>
                              </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <Card>
                    <CardContent className="p-8 text-center">
                      <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-2">
                        Lessons Coming Soon
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Detailed lessons for this module are being prepared by
                        Shashank Daksh. Check back soon!
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Learning Outcomes */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Learning Outcomes
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {module.learningOutcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-chart-2 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            {module.prerequisites.length > 0 && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {module.prerequisites.map((prereqId) => {
                      const prereq = modules.find((m) => m.id === prereqId);
                      if (!prereq) return null;
                      return (
                        <li key={prereqId}>
                          <Link
                            href={`/module/${prereq.slug}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Circle className="h-3 w-3" />
                            {prereq.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Author Credit */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  This module is part of the Computer Science Mastery Course
                  created by <strong>{authorInfo.name}</strong>.
                </p>
                <div className="mt-3 text-xs text-muted-foreground">
                  <a
                    href={`mailto:${authorInfo.email}`}
                    className="hover:text-foreground"
                  >
                    {authorInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <Separator className="my-10" />

        <div className="flex justify-between">
          {prevModule ? (
            <Button variant="outline" asChild>
              <Link href={`/module/${prevModule.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {prevModule.title}
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {nextModule && (
            <Button asChild>
              <Link href={`/module/${nextModule.slug}`}>
                {nextModule.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
