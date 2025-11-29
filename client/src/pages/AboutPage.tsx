/**
 * About Author Page
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link } from "wouter";
import {
  ChevronRight,
  Github,
  Mail,
  ExternalLink,
  BookOpen,
  Code,
  Cpu,
  GraduationCap,
  Award,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { authorInfo, courseMetadata } from "@shared/schema";
import { modules } from "@/lib/course-data";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-card/50">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">About the Author</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground text-5xl font-bold">
              SD
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{authorInfo.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Computer Science Educator & Course Author
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" asChild>
              <a href={`mailto:${authorInfo.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                {authorInfo.email}
              </a>
            </Button>
            <Button asChild>
              <a
                href={authorInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View GitHub
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Bio */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg leading-relaxed">{authorInfo.bio}</p>
            </CardContent>
          </Card>
        </section>

        {/* Course Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {courseMetadata.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {courseMetadata.subtitle}
              </p>
              <p className="mb-6">{courseMetadata.description}</p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">
                      {courseMetadata.totalModules}
                    </div>
                    <div className="text-sm text-muted-foreground">Modules</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <GraduationCap className="h-8 w-8 text-chart-2" />
                  <div>
                    <div className="text-2xl font-bold">
                      {courseMetadata.totalHours}+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Hours of Content
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                  <Code className="h-8 w-8 text-chart-3" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-muted-foreground">
                      Code Examples
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Topics Covered */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-chart-1" />
                  Computer Fundamentals
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Binary & Digital Logic</li>
                  <li>Transistors & CMOS Technology</li>
                  <li>Logic Gates & Boolean Algebra</li>
                  <li>Combinational & Sequential Circuits</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Target className="h-5 w-5 text-chart-2" />
                  CPU Architecture
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>CPU Components & Datapath</li>
                  <li>Instruction Sets (RISC/CISC)</li>
                  <li>Pipelining & Hazards</li>
                  <li>Memory Hierarchy & Cache</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Code className="h-5 w-5 text-chart-3" />
                  C Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Variables, Data Types & Operators</li>
                  <li>Control Flow & Functions</li>
                  <li>Pointers & Memory Management</li>
                  <li>Data Structures Implementation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Award className="h-5 w-5 text-chart-4" />
                  C++ Programming
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Object-Oriented Programming</li>
                  <li>Modern C++ (C++11/14/17/20)</li>
                  <li>STL Containers & Algorithms</li>
                  <li>Concurrency & Multithreading</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Academic References */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Academic References</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4 text-muted-foreground">
                This course curriculum draws from world-renowned academic sources:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">MIT</Badge>
                  <div>
                    <div className="font-medium">6.004 Computation Structures</div>
                    <p className="text-sm text-muted-foreground">
                      Building digital systems from transistors to complete processors
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">IIT</Badge>
                  <div>
                    <div className="font-medium">
                      NPTEL Programming in C++ & Modern C++
                    </div>
                    <p className="text-sm text-muted-foreground">
                      By Prof. Partha Pratim Das, IIT Kharagpur
                    </p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">Oxford</Badge>
                  <div>
                    <div className="font-medium">
                      Computer Science Foundations
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Imperative programming and theoretical foundations
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href={`mailto:${authorInfo.email}`}
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {authorInfo.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <a
                    href={authorInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" />
                    github.com/shashankdakshiitb
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-sm text-muted-foreground text-center">
                {authorInfo.copyright}
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

      <Footer />
    </div>
  );
}
