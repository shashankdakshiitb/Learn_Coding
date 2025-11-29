/**
 * Code Block Component with Syntax Highlighting
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { useState } from "react";
import { Check, Copy, Play, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language: "c" | "cpp" | "assembly" | "binary";
  output?: string;
  showLineNumbers?: boolean;
  className?: string;
}

const languageLabels: Record<string, string> = {
  c: "C",
  cpp: "C++",
  assembly: "Assembly",
  binary: "Binary",
};

const languageColors: Record<string, string> = {
  c: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  cpp: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  assembly: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  binary: "bg-chart-1/10 text-chart-1 border-chart-1/20",
};

function highlightSyntax(code: string, language: string): string {
  let highlighted = code;

  // Escape HTML first
  highlighted = highlighted
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  if (language === "c" || language === "cpp") {
    // Comments
    highlighted = highlighted.replace(
      /(\/\/.*$)/gm,
      '<span class="text-muted-foreground italic">$1</span>'
    );
    highlighted = highlighted.replace(
      /(\/\*[\s\S]*?\*\/)/g,
      '<span class="text-muted-foreground italic">$1</span>'
    );

    // Preprocessor directives
    highlighted = highlighted.replace(
      /^(\s*#\w+.*$)/gm,
      '<span class="text-chart-4">$1</span>'
    );

    // Keywords
    const keywords = [
      "int",
      "char",
      "float",
      "double",
      "void",
      "long",
      "short",
      "unsigned",
      "signed",
      "const",
      "static",
      "extern",
      "register",
      "volatile",
      "auto",
      "if",
      "else",
      "switch",
      "case",
      "default",
      "for",
      "while",
      "do",
      "break",
      "continue",
      "return",
      "goto",
      "sizeof",
      "typedef",
      "struct",
      "union",
      "enum",
      "class",
      "public",
      "private",
      "protected",
      "virtual",
      "override",
      "final",
      "template",
      "typename",
      "namespace",
      "using",
      "new",
      "delete",
      "try",
      "catch",
      "throw",
      "nullptr",
      "true",
      "false",
      "this",
      "friend",
      "operator",
      "inline",
      "constexpr",
      "noexcept",
      "explicit",
      "mutable",
      "cout",
      "cin",
      "endl",
      "string",
      "vector",
      "map",
      "set",
      "unique_ptr",
      "shared_ptr",
      "weak_ptr",
      "make_unique",
      "make_shared",
      "move",
      "auto",
    ];

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "g");
      highlighted = highlighted.replace(
        regex,
        '<span class="text-chart-1 font-medium">$1</span>'
      );
    });

    // Strings
    highlighted = highlighted.replace(
      /("(?:[^"\\]|\\.)*")/g,
      '<span class="text-chart-2">$1</span>'
    );

    // Numbers
    highlighted = highlighted.replace(
      /\b(\d+\.?\d*[fFlL]?)\b/g,
      '<span class="text-chart-3">$1</span>'
    );

    // Function calls
    highlighted = highlighted.replace(
      /\b([a-zA-Z_]\w*)\s*\(/g,
      '<span class="text-chart-5">$1</span>('
    );
  }

  return highlighted;
}

export function CodeBlock({
  code,
  language,
  output,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");
  const highlightedCode = highlightSyntax(code, language);

  return (
    <div className={cn("rounded-lg border bg-card overflow-hidden", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border-b">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn("text-xs", languageColors[language])}
          >
            {languageLabels[language]}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {lines.length} lines
          </span>
        </div>
        <div className="flex items-center gap-1">
          {output && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowOutput(!showOutput)}
              className="h-7 text-xs gap-1"
              data-testid="button-show-output"
            >
              <Play className="h-3 w-3" />
              {showOutput ? "Hide Output" : "Show Output"}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={handleCopy}
            data-testid="button-copy-code"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-chart-2" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono leading-relaxed">
          <code>
            {showLineNumbers ? (
              <table className="border-collapse">
                <tbody>
                  {lines.map((line, index) => (
                    <tr key={index} className="leading-relaxed">
                      <td className="pr-4 text-right text-muted-foreground select-none w-8 align-top">
                        {index + 1}
                      </td>
                      <td
                        className="whitespace-pre"
                        dangerouslySetInnerHTML={{
                          __html: highlightSyntax(line, language),
                        }}
                      />
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
            )}
          </code>
        </pre>
      </div>

      {output && showOutput && (
        <div className="border-t bg-muted/30">
          <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/50">
            <Terminal className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-xs font-medium">Output</span>
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
              By Shashank Daksh
            </Badge>
          </div>
          <pre className="p-4 text-sm font-mono text-chart-2 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}

      <div className="px-4 py-2 bg-muted/30 border-t">
        <p className="text-[10px] text-muted-foreground">
          Author: Shashank Daksh | shak_corp@zohomail.in |{" "}
          <a
            href="https://github.com/shashankdakshiitb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/shashankdakshiitb
          </a>
        </p>
      </div>
    </div>
  );
}
