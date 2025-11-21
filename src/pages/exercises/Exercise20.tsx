import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText } from "lucide-react";

const NestedBlogRoutes = () => {
  const [currentView, setCurrentView] = useState<"list" | "post">("list");
  const [selectedPost, setSelectedPost] = useState(1);

  const posts = [
    { id: 1, title: "Getting Started with React", excerpt: "Learn the basics..." },
    { id: 2, title: "Understanding Hooks", excerpt: "Deep dive into hooks..." },
    { id: 3, title: "React Router Guide", excerpt: "Master routing..." }
  ];

  const handleViewPost = (id: number) => {
    setSelectedPost(id);
    setCurrentView("post");
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Blog Routes Demo</h3>
        </div>

        {currentView === "list" ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground mb-4">
              Route: <code className="bg-code-bg px-2 py-1 rounded">/blog</code>
            </p>
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-4 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{post.title}</h4>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleViewPost(post.id)}
                  >
                    Read →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Route: <code className="bg-code-bg px-2 py-1 rounded">/blog/{selectedPost}</code>
            </p>
            <div className="p-6 bg-secondary rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  {posts.find((p) => p.id === selectedPost)?.title}
                </h4>
              </div>
              <p className="text-foreground mb-4">
                This is the full content of blog post #{selectedPost}. In a real app, this would be fetched based on the URL parameter.
              </p>
              <Button variant="outline" onClick={() => setCurrentView("list")}>
                ← Back to Blog List
              </Button>
            </div>
          </div>
        )}
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm">
          <strong>Nested Routes:</strong> The blog has a main page at <code className="bg-code-bg px-2 py-1 rounded">/blog</code> and individual post pages at <code className="bg-code-bg px-2 py-1 rounded">/blog/:id</code>
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <NestedBlogRoutes />;

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
