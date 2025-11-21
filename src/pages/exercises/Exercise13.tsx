import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

const FormWithValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  // Email validation regex
  const validateEmail = (email: string) => {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
  };

  // Password validation (minimum 8 characters)
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    
    const newErrors = { email: "", password: "" };

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    // If no errors, show success
    if (!newErrors.email && !newErrors.password) {
      setSuccess(true);
      console.log("Form submitted successfully!", { email, password });
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Form Validation</h2>
          <p className="text-muted-foreground">Complete the form with valid data</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: "" });
              }}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          {/* Password field */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Min. 8 characters"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: "" });
              }}
              className={errors.password ? "border-destructive" : ""}
            />
            {errors.password && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        {success && (
          <div className="flex items-center gap-2 p-4 bg-success/10 text-success rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <span>Form submitted successfully!</span>
          </div>
        )}
      </div>
    </Card>
  );
};

const Preview = () => <FormWithValidation />;

const code = `// FormWithValidation.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

const FormWithValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [success, setSuccess] = useState(false);

  // Email validation function
  const validateEmail = (email: string) => {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
  };

  // Password validation function (min 8 characters)
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    
    const newErrors = { email: "", password: "" };

    // Validate email
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    // If no errors, form is valid
    if (!newErrors.email && !newErrors.password) {
      setSuccess(true);
      console.log("Form submitted successfully!", { email, password });
    }
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email field with validation */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" }); // Clear error on change
            }}
            className={errors.email ? "border-destructive" : ""}
          />
          {/* Show error message */}
          {errors.email && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Password field with validation */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            className={errors.password ? "border-destructive" : ""}
          />
          {errors.password && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="h-4 w-4" />
              <span>{errors.password}</span>
            </div>
          )}
        </div>

        <Button type="submit" className="w-full">Submit</Button>
      </form>

      {/* Success message */}
      {success && (
        <div className="flex items-center gap-2 p-4 bg-success/10 text-success rounded-lg">
          <CheckCircle className="h-5 w-5" />
          <span>Form submitted successfully!</span>
        </div>
      )}
    </Card>
  );
};

export default FormWithValidation;`;

export default function Exercise13() {
  return (
    <ExerciseLayout
      exerciseNumber={13}
      title="Form with Validation"
      description="Design a form with validation for email and password fields."
      instructions={[
        "Create state for email, password, and errors",
        "Create validation functions for email and password",
        "Use regex to validate email format",
        "Check password length (minimum 8 characters)",
        "Display error messages when validation fails",
        "Clear errors when user starts typing",
        "Show success message when form is valid"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
