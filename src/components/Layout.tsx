import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Layout, MousePointer, FileText, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Exercise categories with icons
const categories = [
  { name: "Components", icon: Layout, count: 5, color: "text-primary" },
  { name: "Events", icon: MousePointer, count: 5, color: "text-accent" },
  { name: "Forms", icon: FileText, count: 5, color: "text-success" },
  { name: "Routing", icon: Zap, count: 5, color: "text-warning" },
  { name: "React.memo", icon: Code2, count: 5, color: "text-info" },
  { name: "Registration", icon: Users, count: 5, color: "text-destructive" },
];

// All exercises with their routes
const exercises = [
  // Components (1-5)
  { id: 1, title: "Welcome & Date Component", category: "Components", route: "/exercise/1" },
  { id: 2, title: "Parent-Child Hobbies List", category: "Components", route: "/exercise/2" },
  { id: 3, title: "Reusable Button Component", category: "Components", route: "/exercise/3" },
  { id: 4, title: "Profile Card Component", category: "Components", route: "/exercise/4" },
  { id: 5, title: "List Mapping Component", category: "Components", route: "/exercise/5" },
  
  // Events (6-10)
  { id: 6, title: "Toggle ON/OFF Button", category: "Events", route: "/exercise/6" },
  { id: 7, title: "Counter Component", category: "Events", route: "/exercise/7" },
  { id: 8, title: "Hover Color Change", category: "Events", route: "/exercise/8" },
  { id: 9, title: "Form Submit Logger", category: "Events", route: "/exercise/9" },
  { id: 10, title: "Dropdown Menu", category: "Events", route: "/exercise/10" },
  
  // Forms (11-15)
  { id: 11, title: "Simple Login Form", category: "Forms", route: "/exercise/11" },
  { id: 12, title: "Controlled Input Form", category: "Forms", route: "/exercise/12" },
  { id: 13, title: "Form with Validation", category: "Forms", route: "/exercise/13" },
  { id: 14, title: "Multi-Step Form", category: "Forms", route: "/exercise/14" },
  { id: 15, title: "Checkbox Form", category: "Forms", route: "/exercise/15" },
  
  // Routing (16-20)
  { id: 16, title: "Basic Router Setup", category: "Routing", route: "/exercise/16" },
  { id: 17, title: "Dynamic Product Route", category: "Routing", route: "/exercise/17" },
  { id: 18, title: "Navigation Bar", category: "Routing", route: "/exercise/18" },
  { id: 19, title: "404 Not Found Page", category: "Routing", route: "/exercise/19" },
  { id: 20, title: "Nested Blog Routes", category: "Routing", route: "/exercise/20" },
  
  // React.memo (21-25)
  { id: 21, title: "Prevent Child Re-render", category: "React.memo", route: "/exercise/21" },
  { id: 22, title: "Memoized List Optimization", category: "React.memo", route: "/exercise/22" },
  { id: 23, title: "Heavy Calculation Memo", category: "React.memo", route: "/exercise/23" },
  { id: 24, title: "Todo List Optimization", category: "React.memo", route: "/exercise/24" },
  { id: 25, title: "Live Time with Memo", category: "React.memo", route: "/exercise/25" },
  
  // Registration (26-30)
  { id: 26, title: "Lecturer Registration", category: "Registration", route: "/exercise/26" },
  { id: 27, title: "Student Registration", category: "Registration", route: "/exercise/27" },
  { id: 28, title: "Driver Registration", category: "Registration", route: "/exercise/28" },
  { id: 29, title: "Book Registration", category: "Registration", route: "/exercise/29" },
  { id: 30, title: "Module Registration", category: "Registration", route: "/exercise/30" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 bg-sidebar text-sidebar-foreground transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-sidebar-border overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">React Lab</h1>
              <p className="text-xs text-muted-foreground">30 Practice Exercises</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-6">
          {/* Home Link */}
          <Link
            to="/"
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
              location.pathname === "/"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-sidebar-accent"
            )}
          >
            <Layout className="h-5 w-5" />
            <span className="font-medium">Home</span>
          </Link>

          {/* Categories */}
          {categories.map((category) => {
            const Icon = category.icon;
            const categoryExercises = exercises.filter((ex) => ex.category === category.name);
            
            return (
              <div key={category.name}>
                <div className="flex items-center gap-2 px-4 py-2 mb-2">
                  <Icon className={cn("h-4 w-4", category.color)} />
                  <span className="text-sm font-semibold">{category.name}</span>
                  <span className="ml-auto text-xs bg-sidebar-accent px-2 py-1 rounded">
                    {category.count}
                  </span>
                </div>
                <div className="space-y-1 ml-4">
                  {categoryExercises.map((exercise) => (
                    <Link
                      key={exercise.id}
                      to={exercise.route}
                      className={cn(
                        "block px-4 py-2 text-sm rounded-lg transition-colors",
                        location.pathname === exercise.route
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-sidebar-accent"
                      )}
                    >
                      <span className="font-mono text-xs opacity-70">#{exercise.id}</span>{" "}
                      {exercise.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>Live Preview</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
