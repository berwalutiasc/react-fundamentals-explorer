import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username && password) {
      setMessage("Login attempt with username: " + username);
      console.log("Username:", username);
      console.log("Password:", password);
    } else {
      setMessage("Please fill in all fields");
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
            <LogIn className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
          <p className="text-muted-foreground">Enter your credentials to login</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        {message && (
          <div className={`p-3 rounded-lg ${
            message.includes("Please") 
              ? "bg-destructive/10 text-destructive" 
              : "bg-success/10 text-success"
          }`}>
            <p className="text-sm text-center">{message}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

const Preview = () => <LoginForm />;

const code = `// LoginForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";

const LoginForm = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (username && password) {
      setMessage("Login attempt with username: " + username);
      console.log("Username:", username);
      console.log("Password:", password);
    } else {
      setMessage("Please fill in all fields");
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
            <LogIn className="h-6 w-6 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-muted-foreground">Enter your credentials</p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username field */}
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        {/* Feedback message */}
        {message && (
          <div className="p-3 rounded-lg bg-success/10 text-success">
            <p className="text-sm text-center">{message}</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default LoginForm;`;

export default function Exercise11() {
  return (
    <ExerciseLayout
      exerciseNumber={11}
      title="Simple Login Form"
      description="Create a simple login form with fields for username and password."
      instructions={[
        "Create state variables for username and password",
        "Create a form with onSubmit handler",
        "Add controlled input fields for username and password",
        "Use type='password' for the password field to mask input",
        "Handle form submission and log the values",
        "Add basic validation to check if fields are filled"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
