/**
 * Footer Component
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Github, Mail, ExternalLink, Heart } from "lucide-react";
import { authorInfo, courseMetadata } from "@shared/schema";

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold mb-3">{courseMetadata.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An industrial-grade, comprehensive course covering computer
              fundamentals, CPU architecture, and complete C/C++ programming.
              Based on MIT 6.004, IIT NPTEL, and Oxford University curricula.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">About the Author</h3>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-foreground">{authorInfo.name}</p>
              <a
                href={`mailto:${authorInfo.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="h-4 w-4" />
                {authorInfo.email}
              </a>
              <a
                href={authorInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-github"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">References</h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                <span>MIT 6.004 Computation Structures</span>
              </li>
              <li className="flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                <span>IIT NPTEL Programming in C++</span>
              </li>
              <li className="flex items-center gap-1">
                <ExternalLink className="h-3 w-3" />
                <span>Oxford University CS Foundations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              {authorInfo.copyright}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> by {authorInfo.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
