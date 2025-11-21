import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-[500px] flex items-center justify-center bg-background">
      <Card className="p-8 max-w-md mx-auto text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
          
          <div>
            <h1 className="text-6xl font-bold text-foreground mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
            <Button variant="outline">Go Back</Button>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Tried paths: /invalid-route, /not-found, /random-page
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Preview = () => <NotFoundPage />;

const code = `// NotFound.tsx
import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-md p-8">
        {/* 404 Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>
        
        {/* Error Message */}
        <div>
          <h1 className="text-6xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          {/* Link back to home */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

// App.tsx - Add catch-all route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route - MUST be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};`;

export default function Exercise19() {
  return (
    <ExerciseLayout
      exerciseNumber={19}
      title="404 Not Found Page"
      description="Create a 'Not Found' page that displays when a user navigates to an undefined route."
      instructions={[
        "Create a NotFound component with error messaging",
        "Add a catch-all route using path='*' in Routes",
        "Place the catch-all route LAST in your Routes",
        "The * path matches any undefined route",
        "Add a link back to the home page",
        "Style it to be user-friendly and informative"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
