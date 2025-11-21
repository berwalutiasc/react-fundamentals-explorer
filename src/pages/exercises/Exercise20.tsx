import ExerciseLayout from "@/components/ExerciseLayout";
import { Routes, Route, Link, useParams, useLocation, MemoryRouter } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText } from "lucide-react";

// Blog posts data
const posts = [
  { 
    id: 1, 
    title: "Getting Started with React", 
    excerpt: "Learn the basics of React and how to build your first component.", 
    content: "React is a JavaScript library for building user interfaces. It allows you to create reusable components and manage state efficiently. In this guide, we'll cover the fundamentals including JSX, components, props, and state management."
  },
  { 
    id: 2, 
    title: "Understanding Hooks", 
    excerpt: "Deep dive into React Hooks and how to use them effectively.", 
    content: "React Hooks revolutionized how we write React components. With hooks like useState, useEffect, and useContext, you can use state and other React features in functional components. This article explores the most common hooks and best practices."
  },
  { 
    id: 3, 
    title: "React Router Guide", 
    excerpt: "Master routing in React applications with React Router.", 
    content: "React Router is the standard routing library for React. It enables navigation between different views in a single-page application. Learn how to set up routes, handle nested routes, and manage navigation state in your React apps."
  }
];

// Blog List Component - Main Blog Page
const BlogList = () => {
  const location = useLocation();
  
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Blog Posts</h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Current Route: <code className="bg-code-bg px-2 py-1 rounded">{location.pathname}</code>
        </p>

        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{post.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{post.excerpt}</p>
                  <span className="text-xs text-muted-foreground">Post ID: {post.id}</span>
                </div>
                <Button size="sm" asChild>
                  <Link to={`${post.id}`}>
                    Read →
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

// Blog Post Component - Individual Post Page
const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <Card className="p-6">
        <p className="text-muted-foreground">Post not found</p>
        <Button variant="outline" asChild className="mt-4">
          <Link to="..">← Back to Blog</Link>
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <p className="text-sm text-muted-foreground mb-4">
          Current Route: <code className="bg-code-bg px-2 py-1 rounded">{location.pathname}</code>
        </p>
        
        <div className="p-6 bg-secondary rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground text-xl">{post.title}</h4>
          </div>
          
          <div className="space-y-4 mb-6">
            <div>
              <span className="text-xs font-semibold text-muted-foreground uppercase">Post ID:</span>
              <span className="ml-2 text-foreground">{post.id}</span>
            </div>
            <p className="text-foreground leading-relaxed">{post.content}</p>
          </div>
          
          <Button variant="outline" asChild>
            <Link to="..">
              ← Back to Blog List
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Router wrapper for nested routes
const NestedBlogRoutes = () => {
  return (
    <div className="space-y-6">
      <Routes>
        <Route index element={<BlogList />} />
        <Route path=":id" element={<BlogPost />} />
      </Routes>
      
      <Card className="p-4 bg-primary/10">
        <p className="text-sm">
          <strong>Nested Routes:</strong> The blog has a main page at <code className="bg-code-bg px-2 py-1 rounded">/blog</code> and individual post pages at <code className="bg-code-bg px-2 py-1 rounded">/blog/:id</code>. 
          Notice how the URL changes when you navigate between routes.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => (
  <MemoryRouter initialEntries={["/blog"]}>
    <NestedBlogRoutes />
  </MemoryRouter>
);

const code = `// App.tsx - Nested Routes Setup
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main blog route */}
        <Route path="/blog" element={<Blog />} />
        {/* Nested route for individual posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
};

// Blog.tsx - Main Blog Page
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics..." },
    { id: 2, title: "Understanding Hooks", excerpt: "Deep dive into hooks..." },
    { id: 3, title: "React Router Guide", excerpt: "Master routing..." }
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            {/* Link to nested route */}
            <Link to={\`/blog/\${post.id}\`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// BlogPost.tsx - Individual Post Page
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  // Get the post ID from URL
  const { id } = useParams();

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      <p>This is the content of blog post {id}.</p>
      
      {/* Link back to main blog page */}
      <Link to="/blog">
        ← Back to Blog
      </Link>
    </div>
  );
};`;

export default function Exercise20() {
  return (
    <ExerciseLayout
      exerciseNumber={20}
      title="Nested Blog Routes"
      description="Implement nested routes for a blog with a main blog page and individual post pages."
      instructions={[
        "Create a main blog route at /blog",
        "Create a nested route at /blog/:id for individual posts",
        "Use Link components to navigate between blog list and posts",
        "Use useParams() to extract the post ID in BlogPost component",
        "Display a list of blog posts on the main blog page",
        "Show individual post content based on the ID parameter",
        "Add a 'Back to Blog' link on individual post pages"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
