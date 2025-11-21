import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
  dateOfBirth?: string;
}

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dateOfBirth: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateStudentId = (studentId: string): boolean => {
    // Alphanumeric validation
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(studentId) && studentId.length >= 6;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email must be in a valid format (e.g., student@university.edu)";
    }

    // Validate student ID (alphanumeric only)
    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    } else if (!validateStudentId(formData.studentId)) {
      newErrors.studentId = "Student ID must contain only alphanumeric characters and be at least 6 characters";
    }

    // Validate date of birth
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of birth is required";
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
          <User className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-xl">Student Registration Form</h3>
        </div>

        {isSubmitted ? (
          <Alert className="bg-success/10 border-success/20">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">
              <strong>Registration Successful!</strong> Your student registration has been submitted.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@university.edu"
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email}
                </p>
              )}
              {!errors.email && formData.email && validateEmail(formData.email) && (
                <p className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Valid email format
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentId">
                Student ID <span className="text-destructive">*</span>
              </Label>
              <Input
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="STU123456"
                className={errors.studentId ? "border-destructive" : ""}
              />
              {errors.studentId && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.studentId}
                </p>
              )}
              {!errors.studentId && formData.studentId && validateStudentId(formData.studentId) && (
                <p className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Valid Student ID (alphanumeric)
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">
                Date of Birth <span className="text-destructive">*</span>
              </Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={errors.dateOfBirth ? "border-destructive" : ""}
              />
              {errors.dateOfBirth && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.dateOfBirth}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Register as Student
            </Button>
          </form>
        )}
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Validation Rules:</strong> Student ID must contain only alphanumeric characters 
          (letters and numbers, no special characters) and be at least 6 characters long. 
          All fields are required.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <StudentRegistrationForm />;

const code = `import { useState } from "react";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  studentId?: string;
  dateOfBirth?: string;
}

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dateOfBirth: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Student ID validation - alphanumeric only
  const validateStudentId = (studentId: string): boolean => {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(studentId) && studentId.length >= 6;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email must be in valid format";
    }

    // Validate student ID (alphanumeric only)
    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    } else if (!validateStudentId(formData.studentId)) {
      newErrors.studentId = "Student ID must contain only alphanumeric characters";
    }

    // Validate date of birth
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Date of birth is required";
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
        <label>First Name *</label>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>

      <div>
        <label>Last Name *</label>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>

      <div>
        <label>Email *</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label>Student ID *</label>
        <input
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
        />
        {errors.studentId && <span>{errors.studentId}</span>}
      </div>

      <div>
        <label>Date of Birth *</label>
        <input
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
      </div>

      <button type="submit">Register as Student</button>
    </form>
  );
};

export default StudentRegistrationForm;`;

export default function Exercise27() {
  return (
    <ExerciseLayout
      exerciseNumber={27}
      title="Student Registration Form"
      description="Create a registration form for students with fields: First Name, Last Name, Email, Student ID, Date of Birth. Validate the Student ID to ensure it contains only alphanumeric characters."
      instructions={[
        "Create a form with First Name, Last Name, Email, Student ID, and Date of Birth fields",
        "Add validation to ensure all fields are required",
        "Validate Student ID to ensure it contains only alphanumeric characters (letters and numbers)",
        "Validate Student ID length (at least 6 characters)",
        "Validate email format",
        "Display error messages for invalid fields",
        "Show success message on successful submission"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

