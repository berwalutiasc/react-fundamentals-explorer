import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookMarked, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormErrors {
  moduleName?: string;
  moduleCode?: string;
  description?: string;
  credits?: string;
}

const ModuleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    description: "",
    credits: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateCredits = (credits: string): boolean => {
    // Must be numeric and greater than 0
    const creditsNum = parseFloat(credits);
    return !isNaN(creditsNum) && creditsNum > 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate module name
    if (!formData.moduleName.trim()) {
      newErrors.moduleName = "Module name is required";
    }

    // Validate module code
    if (!formData.moduleCode.trim()) {
      newErrors.moduleCode = "Module code is required";
    }

    // Validate description
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    // Validate credits (numeric and required)
    if (!formData.credits.trim()) {
      newErrors.credits = "Credits is required";
    } else if (!validateCredits(formData.credits)) {
      newErrors.credits = "Credits must be a numeric value greater than 0";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitted(false);
    } else {
      setErrors({});
      setIsSubmitted(true);
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <BookMarked className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-xl">Module Registration Form</h3>
        </div>

        {isSubmitted ? (
          <Alert className="bg-success/10 border-success/20">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">
              <strong>Registration Successful!</strong> Your module registration has been submitted.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="moduleName">
                Module Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="moduleName"
                name="moduleName"
                value={formData.moduleName}
                onChange={handleChange}
                placeholder="e.g., Introduction to React"
                className={errors.moduleName ? "border-destructive" : ""}
              />
              {errors.moduleName && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.moduleName}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="moduleCode">
                Module Code <span className="text-destructive">*</span>
              </Label>
              <Input
                id="moduleCode"
                name="moduleCode"
                value={formData.moduleCode}
                onChange={handleChange}
                placeholder="e.g., CS101"
                className={errors.moduleCode ? "border-destructive" : ""}
              />
              {errors.moduleCode && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.moduleCode}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter module description..."
                rows={4}
                className={errors.description ? "border-destructive" : ""}
              />
              {errors.description && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.description}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="credits">
                Credits <span className="text-destructive">*</span>
              </Label>
              <Input
                id="credits"
                name="credits"
                type="number"
                value={formData.credits}
                onChange={handleChange}
                placeholder="e.g., 3"
                min="0.5"
                step="0.5"
                className={errors.credits ? "border-destructive" : ""}
              />
              {errors.credits && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.credits}
                </p>
              )}
              {!errors.credits && formData.credits && validateCredits(formData.credits) && (
                <p className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Valid numeric value
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Register Module
            </Button>
          </form>
        )}
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Validation Rules:</strong> Credits field must accept only numeric values and be greater than 0. 
          It is a required field. All fields are required.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <ModuleRegistrationForm />;

const code = `import { useState } from "react";

interface FormErrors {
  moduleName?: string;
  moduleCode?: string;
  description?: string;
  credits?: string;
}

const ModuleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    description: "",
    credits: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Credits validation - must be numeric and greater than 0
  const validateCredits = (credits: string): boolean => {
    const creditsNum = parseFloat(credits);
    return !isNaN(creditsNum) && creditsNum > 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate module name
    if (!formData.moduleName.trim()) {
      newErrors.moduleName = "Module name is required";
    }

    // Validate module code
    if (!formData.moduleCode.trim()) {
      newErrors.moduleCode = "Module code is required";
    }

    // Validate description
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    // Validate credits (numeric and required)
    if (!formData.credits.trim()) {
      newErrors.credits = "Credits is required";
    } else if (!validateCredits(formData.credits)) {
      newErrors.credits = "Credits must be a numeric value greater than 0";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log("Form submitted:", formData);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Module Name *</label>
        <input
          name="moduleName"
          value={formData.moduleName}
          onChange={handleChange}
        />
        {errors.moduleName && <span>{errors.moduleName}</span>}
      </div>

      <div>
        <label>Module Code *</label>
        <input
          name="moduleCode"
          value={formData.moduleCode}
          onChange={handleChange}
        />
        {errors.moduleCode && <span>{errors.moduleCode}</span>}
      </div>

      <div>
        <label>Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <span>{errors.description}</span>}
      </div>

      <div>
        <label>Credits *</label>
        <input
          name="credits"
          type="number"
          value={formData.credits}
          onChange={handleChange}
        />
        {errors.credits && <span>{errors.credits}</span>}
      </div>

      <button type="submit">Register Module</button>
    </form>
  );
};

export default ModuleRegistrationForm;`;

export default function Exercise30() {
  return (
    <ExerciseLayout
      exerciseNumber={30}
      title="Module Registration Form"
      description="Create a registration form for modules with fields: Module Name, Module Code, Description, Credits. Ensure the Credits field accepts only numeric values and is required."
      instructions={[
        "Create a form with Module Name, Module Code, Description, and Credits fields",
        "Add validation to ensure all fields are required",
        "Validate Credits field to ensure it accepts only numeric values",
        "Ensure Credits value is greater than 0",
        "Use a textarea for the Description field",
        "Display error messages for invalid fields",
        "Show success message on successful submission"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

