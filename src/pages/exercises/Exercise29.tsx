import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormErrors {
  bookTitle?: string;
  author?: string;
  isbn?: string;
  publishedYear?: string;
}

const BookRegistrationForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    isbn: "",
    publishedYear: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePublishedYear = (year: string): boolean => {
    // Must be a four-digit number
    const yearRegex = /^\d{4}$/;
    if (!yearRegex.test(year)) {
      return false;
    }
    const yearNum = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    // Year should be between 1000 and current year + 10 (for future releases)
    return yearNum >= 1000 && yearNum <= currentYear + 10;
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

    // Validate book title
    if (!formData.bookTitle.trim()) {
      newErrors.bookTitle = "Book title is required";
    }

    // Validate author
    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    // Validate ISBN
    if (!formData.isbn.trim()) {
      newErrors.isbn = "ISBN is required";
    }

    // Validate published year (four-digit number)
    if (!formData.publishedYear.trim()) {
      newErrors.publishedYear = "Published year is required";
    } else if (!validatePublishedYear(formData.publishedYear)) {
      newErrors.publishedYear = "Published year must be a four-digit number (e.g., 2024)";
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
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-xl">Book Registration Form</h3>
        </div>

        {isSubmitted ? (
          <Alert className="bg-success/10 border-success/20">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">
              <strong>Registration Successful!</strong> Your book registration has been submitted.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bookTitle">
                Book Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="bookTitle"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                placeholder="Enter book title"
                className={errors.bookTitle ? "border-destructive" : ""}
              />
              {errors.bookTitle && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.bookTitle}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="author">
                Author <span className="text-destructive">*</span>
              </Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className={errors.author ? "border-destructive" : ""}
              />
              {errors.author && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.author}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="isbn">
                ISBN <span className="text-destructive">*</span>
              </Label>
              <Input
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                placeholder="978-0-123456-78-9"
                className={errors.isbn ? "border-destructive" : ""}
              />
              {errors.isbn && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.isbn}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="publishedYear">
                Published Year <span className="text-destructive">*</span>
              </Label>
              <Input
                id="publishedYear"
                name="publishedYear"
                type="number"
                value={formData.publishedYear}
                onChange={handleChange}
                placeholder="2024"
                min="1000"
                max={new Date().getFullYear() + 10}
                className={errors.publishedYear ? "border-destructive" : ""}
              />
              {errors.publishedYear && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.publishedYear}
                </p>
              )}
              {!errors.publishedYear && formData.publishedYear && validatePublishedYear(formData.publishedYear) && (
                <p className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Valid four-digit year
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Register Book
            </Button>
          </form>
        )}
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Validation Rules:</strong> Published Year must be a four-digit number (e.g., 2024). 
          All fields are required.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <BookRegistrationForm />;

const code = `import { useState } from "react";

interface FormErrors {
  bookTitle?: string;
  author?: string;
  isbn?: string;
  publishedYear?: string;
}

const BookRegistrationForm = () => {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    isbn: "",
    publishedYear: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Published year validation - must be a four-digit number
  const validatePublishedYear = (year: string): boolean => {
    const yearRegex = /^\\d{4}$/;
    if (!yearRegex.test(year)) {
      return false;
    }
    const yearNum = parseInt(year, 10);
    const currentYear = new Date().getFullYear();
    // Year should be reasonable (between 1000 and current year + 10)
    return yearNum >= 1000 && yearNum <= currentYear + 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate book title
    if (!formData.bookTitle.trim()) {
      newErrors.bookTitle = "Book title is required";
    }

    // Validate author
    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    // Validate ISBN
    if (!formData.isbn.trim()) {
      newErrors.isbn = "ISBN is required";
    }

    // Validate published year (four-digit number)
    if (!formData.publishedYear.trim()) {
      newErrors.publishedYear = "Published year is required";
    } else if (!validatePublishedYear(formData.publishedYear)) {
      newErrors.publishedYear = "Published year must be a four-digit number";
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
        <label>Book Title *</label>
        <input
          name="bookTitle"
          value={formData.bookTitle}
          onChange={handleChange}
        />
        {errors.bookTitle && <span>{errors.bookTitle}</span>}
      </div>

      <div>
        <label>Author *</label>
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <span>{errors.author}</span>}
      </div>

      <div>
        <label>ISBN *</label>
        <input
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
        />
        {errors.isbn && <span>{errors.isbn}</span>}
      </div>

      <div>
        <label>Published Year *</label>
        <input
          name="publishedYear"
          type="number"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        {errors.publishedYear && <span>{errors.publishedYear}</span>}
      </div>

      <button type="submit">Register Book</button>
    </form>
  );
};

export default BookRegistrationForm;`;

export default function Exercise29() {
  return (
    <ExerciseLayout
      exerciseNumber={29}
      title="Book Registration Form"
      description="Create a registration form for books with fields: Book Title, Author, ISBN, Published Year. Validate that the Published Year is a four-digit number."
      instructions={[
        "Create a form with Book Title, Author, ISBN, and Published Year fields",
        "Add validation to ensure all fields are required",
        "Validate Published Year to ensure it is exactly four digits (e.g., 2024)",
        "Use regex to validate the year format",
        "Display error messages for invalid fields",
        "Show success message on successful submission"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

