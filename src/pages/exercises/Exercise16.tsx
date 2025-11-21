import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Info, Mail, Code } from "lucide-react";

// Demo pages
const DemoHome = () => (
  <div className="text-center space-y-4">
    <Home className="h-16 w-16 text-primary mx-auto" />
    <h2 className="text-2xl font-bold">Home Page</h2>
    <p className="text-muted-foreground">Welcome to the home page!</p>
  </div>
);

const DemoAbout = () => (
  <div className="text-center space-y-4">
    <Info className="h-16 w-16 text-accent mx-auto" />
    <h2 className="text-2xl font-bold">About Page</h2>
    <p className="text-muted-foreground">Learn more about us here.</p>
  </div>
);

const DemoContact = () => (
  <div className="text-center space-y-4">
    <Mail className="h-16 w-16 text-success mx-auto" />
    <h2 className="text-2xl font-bold">Contact Page</h2>
    <p className="text-muted-foreground">Get in touch with us!</p>
  </div>
);

const Preview = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-foreground">Router Demo</h3>
        <p className="text-sm text-muted-foreground mb-4">
          The actual routing is implemented in App.tsx. Here's a preview of the three pages:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 bg-secondary">
            <DemoHome />
          </Card>
          <Card className="p-6 bg-secondary">
            <DemoAbout />
          </Card>
          <Card className="p-6 bg-secondary">
            <DemoContact />
          </Card>
        </div>
      </Card>

      <Card className="p-4 bg-primary/10">
        <div className="flex items-start gap-2">
          <Code className="h-5 w-5 text-primary mt-0.5" />
          <p className="text-sm">
            <strong>Note:</strong> This React Lab already uses React Router! Navigate using the sidebar to see routing in action.
          </p>
        </div>
      </Card>
    </div>
  );
};

const code = `// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define routes with path and element */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Home.tsx
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

// About.tsx
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us here.</p>
    </div>
  );
};

// Contact.tsx
const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
    </div>
  );
};`;

export default function Exercise16() {
  return (
    <ExerciseLayout
      exerciseNumber={16}
      title="Basic Router Setup"
      description="Set up a basic React Router with three pages: Home, About, and Contact."
      instructions={[
        "Install react-router-dom package",
        "Wrap your app with BrowserRouter component",
        "Create Routes component to hold all routes",
        "Define Route components with path and element props",
        "Create three page components: Home, About, Contact",
        "Each route renders its corresponding page component"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
