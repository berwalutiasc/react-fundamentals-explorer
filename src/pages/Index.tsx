import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, MousePointer, FileText, Zap, Code2, Users, ArrowRight, BookOpen } from "lucide-react";

// Categories with their exercises
const categories = [
  {
    name: "Components",
    icon: Layout,
    color: "bg-primary/10 text-primary",
    description: "Learn the fundamentals of building React components",
    exercises: [
      { id: 1, title: "Welcome & Date Component" },
      { id: 2, title: "Parent-Child Hobbies List" },
      { id: 3, title: "Reusable Button Component" },
      { id: 4, title: "Profile Card Component" },
      { id: 5, title: "List Mapping Component" },
    ],
  },
  {
    name: "Events",
    icon: MousePointer,
    color: "bg-accent/10 text-accent",
    description: "Master event handling and user interactions",
    exercises: [
      { id: 6, title: "Toggle ON/OFF Button" },
      { id: 7, title: "Counter Component" },
      { id: 8, title: "Hover Color Change" },
      { id: 9, title: "Form Submit Logger" },
      { id: 10, title: "Dropdown Menu" },
    ],
  },
  {
    name: "Forms Handling",
    icon: FileText,
    color: "bg-success/10 text-success",
    description: "Build and validate forms with React",
    exercises: [
      { id: 11, title: "Simple Login Form" },
      { id: 12, title: "Controlled Input Form" },
      { id: 13, title: "Form with Validation" },
      { id: 14, title: "Multi-Step Form" },
      { id: 15, title: "Checkbox Form" },
    ],
  },
  {
    name: "Routing",
    icon: Zap,
    color: "bg-warning/10 text-warning",
    description: "Navigate between pages using React Router",
    exercises: [
      { id: 16, title: "Basic Router Setup" },
      { id: 17, title: "Dynamic Product Route" },
      { id: 18, title: "Navigation Bar" },
      { id: 19, title: "404 Not Found Page" },
      { id: 20, title: "Nested Blog Routes" },
    ],
  },
  {
    name: "React.memo",
    icon: Code2,
    color: "bg-info/10 text-info",
    description: "Optimize performance with React.memo",
    exercises: [
      { id: 21, title: "Prevent Child Re-render" },
      { id: 22, title: "Memoized List Optimization" },
      { id: 23, title: "Heavy Calculation Memo" },
      { id: 24, title: "Todo List Optimization" },
      { id: 25, title: "Live Time with Memo" },
    ],
  },
  {
    name: "Registration Forms",
    icon: Users,
    color: "bg-destructive/10 text-destructive",
    description: "Create specialized registration forms",
    exercises: [
      { id: 26, title: "Lecturer Registration" },
      { id: 27, title: "Student Registration" },
      { id: 28, title: "Driver Registration" },
      { id: 29, title: "Book Registration" },
      { id: 30, title: "Module Registration" },
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Interactive Learning Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Master React with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> 30 Hands-On Exercises</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Build real projects, see live code, and understand how React works through practical examples. Each exercise includes detailed instructions, complete code, and interactive previews.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild className="gap-2">
              <Link to="/exercise/1">
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#categories">Browse Exercises</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">30</div>
              <div className="text-sm text-muted-foreground">Total Exercises</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-success mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Interactive</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-warning mb-2">Free</div>
              <div className="text-sm text-muted-foreground">Forever</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Exercise Categories</h2>
          <p className="text-muted-foreground text-lg">
            Explore all 30 exercises organized by topic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 text-foreground">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {category.exercises.map((exercise) => (
                    <Link
                      key={exercise.id}
                      to={`/exercise/${exercise.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <span className="text-xs font-mono text-muted-foreground">#{exercise.id}</span>
                      <span className="flex-1 text-sm text-foreground group-hover:text-primary transition-colors">
                        {exercise.title}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Learning?</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Jump into Exercise #1 and begin your React journey today
          </p>
          <Button size="lg" asChild className="gap-2">
            <Link to="/exercise/1">
              Start with Exercise 1
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
