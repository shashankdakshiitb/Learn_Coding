/**
 * Computer Science Mastery Course - Data Schema
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * Complete curriculum covering Computer Fundamentals, CPU Architecture,
 * C Programming, and C++ Programming based on MIT, IIT, and Oxford curricula.
 */

import { z } from "zod";

// Module difficulty levels
export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

// Lesson content types
export type ContentType = "text" | "code" | "diagram" | "exercise" | "note" | "warning" | "tip";

// Programming languages for code examples
export type ProgrammingLanguage = "c" | "cpp" | "assembly" | "binary";

// Content block for lessons
export const contentBlockSchema = z.object({
  id: z.string(),
  type: z.enum(["text", "code", "diagram", "exercise", "note", "warning", "tip"]),
  content: z.string(),
  language: z.enum(["c", "cpp", "assembly", "binary"]).optional(),
  output: z.string().optional(),
  diagramType: z.string().optional(),
  caption: z.string().optional(),
});

export type ContentBlock = z.infer<typeof contentBlockSchema>;

// Code example schema
export const codeExampleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  language: z.enum(["c", "cpp", "assembly", "binary"]),
  code: z.string(),
  output: z.string(),
  explanation: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  concepts: z.array(z.string()),
  moduleId: z.string(),
  lessonId: z.string().optional(),
});

export type CodeExample = z.infer<typeof codeExampleSchema>;

// Exercise schema
export const exerciseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  problemStatement: z.string(),
  hints: z.array(z.string()),
  sampleInput: z.string().optional(),
  sampleOutput: z.string().optional(),
  solutionCode: z.string(),
  solutionExplanation: z.string(),
  moduleId: z.string(),
  lessonId: z.string(),
});

export type Exercise = z.infer<typeof exerciseSchema>;

// Lesson schema
export const lessonSchema = z.object({
  id: z.string(),
  moduleId: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  order: z.number(),
  estimatedMinutes: z.number(),
  content: z.array(contentBlockSchema),
  keyTakeaways: z.array(z.string()),
  references: z.array(z.string()).optional(),
});

export type Lesson = z.infer<typeof lessonSchema>;

// Module schema
export const moduleSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  order: z.number(),
  icon: z.string(),
  category: z.enum(["fundamentals", "architecture", "c-programming", "cpp-programming"]),
  difficulty: z.enum(["beginner", "intermediate", "advanced"]),
  estimatedHours: z.number(),
  prerequisites: z.array(z.string()),
  learningOutcomes: z.array(z.string()),
  lessonCount: z.number(),
});

export type Module = z.infer<typeof moduleSchema>;

// Diagram schema
export const diagramSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: z.enum([
    "cpu-block",
    "alu-architecture", 
    "control-unit",
    "logic-gate",
    "memory-hierarchy",
    "pipeline",
    "cache-mapping",
    "datapath",
    "circuit",
    "flowchart",
    "data-structure",
    "algorithm"
  ]),
  svgContent: z.string(),
  description: z.string(),
  moduleId: z.string(),
  lessonId: z.string().optional(),
});

export type Diagram = z.infer<typeof diagramSchema>;

// User progress schema
export const progressSchema = z.object({
  lessonId: z.string(),
  completed: z.boolean(),
  completedAt: z.string().optional(),
});

export type Progress = z.infer<typeof progressSchema>;

// Author info
export const authorInfo = {
  name: "Shashank Daksh",
  email: "shak_corp@zohomail.in",
  github: "https://github.com/shashankdakshiitb",
  bio: "A passionate computer science educator dedicated to making complex concepts accessible to everyone. This comprehensive course draws from world-class curricula including MIT's 6.004 Computation Structures, IIT NPTEL's Programming in C++ series, and Oxford University's Computer Science foundations.",
  copyright: `© ${new Date().getFullYear()} Shashank Daksh. All Rights Reserved.`,
};

// Course metadata
export const courseMetadata = {
  title: "Computer Science Mastery Course",
  subtitle: "From Digital Logic to Advanced C++ Programming",
  author: authorInfo.name,
  version: "1.0.0",
  totalModules: 12,
  totalHours: 120,
  description: "An industrial-grade, comprehensive course covering computer fundamentals, CPU architecture, and complete C/C++ programming with advanced diagrams and practical exercises. Based on MIT 6.004, IIT NPTEL, and Oxford University curricula.",
};

// Keep existing user schema for compatibility
import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
