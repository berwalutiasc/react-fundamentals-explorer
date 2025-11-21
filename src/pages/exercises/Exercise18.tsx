import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Home, Info, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: Info },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  return (
    <div>
      <nav className="bg-card border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg" />
              <span className="font-bold text-lg text-foreground">MyApp</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Content based on active tab */}
      <div className="max-w-6xl mx-auto p-6">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2 text-foreground">
            {navItems.find((item) => item.id === activeTab)?.label} Page
          </h2>
          <p className="text-muted-foreground">
            You're viewing the {activeTab} page
          </p>
        </Card>
      </div>
    </div>
  );
};

const Preview = () => <NavigationBar />;

const code = `// NavigationBar.tsx
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Mail } from "lucide-react";

const NavigationBar = () => {
  // Get current location to highlight active link
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail }
  ];

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg" />
            <span className="font-bold text-lg">MyApp</span>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={\`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors \${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }\`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// App.tsx - Use the navigation bar
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation bar appears on all pages */}
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};`;

export default function Exercise18() {
  return (
    <ExerciseLayout
      exerciseNumber={18}
      title="Navigation Bar"
      description="Build a navigation bar with links to different routes using React Router."
      instructions={[
        "Import Link and useLocation from react-router-dom",
        "Create an array of navigation items with paths and labels",
        "Use Link component instead of <a> tags for navigation",
        "Use useLocation() hook to get current path",
        "Highlight the active link based on current location",
        "Make the navbar responsive for mobile devices"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
