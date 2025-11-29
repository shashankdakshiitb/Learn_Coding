/**
 * Lesson Page Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link, useParams } from "wouter";
import {
  ChevronRight,
  Clock,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Info,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CodeBlock } from "@/components/CodeBlock";
import { Diagram } from "@/components/Diagram";
import {
  getLessonsByModule,
  getModuleBySlug,
  getLessonById,
} from "@/lib/course-data";
import { authorInfo } from "@shared/schema";
import { Footer } from "@/components/Footer";
import type { ContentBlock } from "@shared/schema";

function renderContentBlock(block: ContentBlock) {
  switch (block.type) {
    case "text":
      return (
        <div
          key={block.id}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          {block.content.split("\n").map((paragraph, idx) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.slice(2)}
                </h1>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl font-semibold mt-6 mb-3">
                  {paragraph.slice(3)}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-lg font-semibold mt-4 mb-2">
                  {paragraph.slice(4)}
                </h3>
              );
            }
            if (paragraph.startsWith("| ")) {
              const rows = [];
              let i = idx;
              const lines = block.content.split("\n");
              while (i < lines.length && lines[i].startsWith("|")) {
                rows.push(lines[i]);
                i++;
              }
              if (rows.length > 0) {
                const headers = rows[0]
                  .split("|")
                  .filter((c) => c.trim())
                  .map((c) => c.trim());
                const dataRows = rows.slice(2);

                return (
                  <div key={idx} className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-muted/50">
                          {headers.map((h, hi) => (
                            <th
                              key={hi}
                              className="border px-4 py-2 text-left text-sm font-semibold"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => (
                          <tr key={ri} className="border-b">
                            {row
                              .split("|")
                              .filter((c) => c.trim())
                              .map((cell, ci) => (
                                <td
                                  key={ci}
                                  className="border px-4 py-2 text-sm"
                                >
                                  {cell.trim()}
                                </td>
                              ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
            if (paragraph.startsWith("```")) {
              return null; // Handle code blocks separately
            }
            if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
              return (
                <li key={idx} className="ml-4">
                  {paragraph.slice(2)}
                </li>
              );
            }
            if (paragraph.match(/^\d+\./)) {
              return (
                <li key={idx} className="ml-4 list-decimal">
                  {paragraph.replace(/^\d+\.\s*/, "")}
                </li>
              );
            }
            if (paragraph.trim() === "") {
              return null;
            }
            // Handle inline code and bold
            const processed = paragraph
              .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
              .replace(/`([^`]+)`/g, '<code class="bg-muted px-1 py-0.5 rounded text-sm font-mono">$1</code>');
            
            return (
              <p
                key={idx}
                className="my-3 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: processed }}
              />
            );
          })}
        </div>
      );

    case "code":
      return (
        <CodeBlock
          key={block.id}
          code={block.content}
          language={block.language || "c"}
          output={block.output}
          className="my-6"
        />
      );

    case "diagram":
      return (
        <Diagram
          key={block.id}
          type={block.diagramType || block.content}
          caption={block.caption || `Diagram - Created by ${authorInfo.name}`}
          className="my-6"
        />
      );

    case "note":
      return (
        <Card
          key={block.id}
          className="my-6 border-l-4 border-l-chart-1 bg-chart-1/5"
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-chart-1 shrink-0 mt-0.5" />
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: block.content.replace(
                    /\*\*([^*]+)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </div>
          </CardContent>
        </Card>
      );

    case "tip":
      return (
        <Card
          key={block.id}
          className="my-6 border-l-4 border-l-chart-2 bg-chart-2/5"
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 text-chart-2 shrink-0 mt-0.5" />
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: block.content.replace(
                    /\*\*([^*]+)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </div>
          </CardContent>
        </Card>
      );

    case "warning":
      return (
        <Card
          key={block.id}
          className="my-6 border-l-4 border-l-destructive bg-destructive/5"
        >
          <CardContent className="p-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: block.content.replace(
                    /\*\*([^*]+)\*\*/g,
                    "<strong>$1</strong>"
                  ),
                }}
              />
            </div>
          </CardContent>
        </Card>
      );

    default:
      return (
        <p key={block.id} className="my-3">
          {block.content}
        </p>
      );
  }
}

export default function LessonPage() {
  const params = useParams<{ slug: string; lessonSlug: string }>();
  const module = getModuleBySlug(params.slug || "");

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    );
  }

  const lessons = getLessonsByModule(module.id);
  const lesson = lessons.find((l) => l.slug === params.lessonSlug);

  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The lesson you're looking for doesn't exist.
        </p>
        <Button asChild>
          <Link href={`/module/${module.slug}`}>Back to Module</Link>
        </Button>
      </div>
    );
  }

  const lessonIndex = lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = lessons[lessonIndex - 1];
  const nextLesson = lessons[lessonIndex + 1];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-card/50 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link
              href={`/module/${module.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {module.title}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate">
              {lesson.title}
            </span>
          </div>
        </div>
      </div>

      {/* Lesson Content */}
      <article className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="outline">
              Lesson {lessonIndex + 1} of {lessons.length}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {lesson.estimatedMinutes} min read
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-3">{lesson.title}</h1>
          <p className="text-lg text-muted-foreground">{lesson.description}</p>
          <div className="mt-4 text-sm text-muted-foreground">
            By <strong>{authorInfo.name}</strong> | {authorInfo.email}
          </div>
        </header>

        <Separator className="my-8" />

        {/* Content */}
        <div className="lesson-content">
          {lesson.content.map((block) => renderContentBlock(block))}
        </div>

        {/* Key Takeaways */}
        {lesson.keyTakeaways.length > 0 && (
          <>
            <Separator className="my-8" />
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-chart-2" />
                Key Takeaways
              </h2>
              <ul className="space-y-2">
                {lesson.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-chart-2 shrink-0 mt-1" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* References */}
        {lesson.references && lesson.references.length > 0 && (
          <>
            <Separator className="my-8" />
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                References
              </h2>
              <ul className="space-y-2">
                {lesson.references.map((ref, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {/* Author Credit */}
        <Card className="mt-10 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                SD
              </div>
              <div>
                <p className="font-semibold">{authorInfo.name}</p>
                <p className="text-sm text-muted-foreground">
                  {authorInfo.email} |{" "}
                  <a
                    href={authorInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <Separator className="my-10" />

        <nav className="flex justify-between">
          {prevLesson ? (
            <Button variant="outline" asChild>
              <Link href={`/module/${module.slug}/lesson/${prevLesson.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{prevLesson.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href={`/module/${module.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Module
              </Link>
            </Button>
          )}
          {nextLesson ? (
            <Button asChild>
              <Link href={`/module/${module.slug}/lesson/${nextLesson.slug}`}>
                <span className="hidden sm:inline">{nextLesson.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href={`/module/${module.slug}`}>
                Complete Module
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </nav>
      </article>

      <Footer />
    </div>
  );
}
