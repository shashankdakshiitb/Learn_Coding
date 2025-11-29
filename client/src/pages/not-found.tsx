/**
 * 404 Not Found Page
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { Link } from "wouter";
import { Home, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authorInfo } from "@shared/schema";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-8">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          <div className="text-6xl font-bold text-muted-foreground mb-4">404</div>
          <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/module/binary-digital-logic">
                <BookOpen className="mr-2 h-4 w-4" />
                Start Learning
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-xs text-muted-foreground">
              Computer Science Mastery Course by {authorInfo.name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {authorInfo.email}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
