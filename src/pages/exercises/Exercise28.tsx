import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, CheckCircle2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface FormErrors {
  name?: string;
  licenseNumber?: string;
  phone?: string;
  vehicleType?: string;
}

const DriverRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    licenseNumber: "",
    phone: "",
    vehicleType: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone) && phone.length >= 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleVehicleTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, vehicleType: value }));
    if (errors.vehicleType) {
      setErrors(prev => ({ ...prev, vehicleType: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate license number
    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = "License number is required";
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone number must be numeric and at least 10 digits";
    }

    // Validate vehicle type
    if (!formData.vehicleType) {
      newErrors.vehicleType = "Vehicle type is required";
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
          <Car className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground text-xl">Driver Registration Form</h3>
        </div>

        {isSubmitted ? (
          <Alert className="bg-success/10 border-success/20">
            <CheckCircle2 className="h-4 w-4 text-success" />
            <AlertDescription className="text-success">
              <strong>Registration Successful!</strong> Your driver registration has been submitted.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="licenseNumber">
                License Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="licenseNumber"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                placeholder="DL123456789"
                className={errors.licenseNumber ? "border-destructive" : ""}
              />
              {errors.licenseNumber && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.licenseNumber}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.phone}
                </p>
              )}
              {!errors.phone && formData.phone && validatePhone(formData.phone) && (
                <p className="text-xs text-success flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" />
                  Valid phone number (numeric only)
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicleType">
                Vehicle Type <span className="text-destructive">*</span>
              </Label>
              <Select value={formData.vehicleType} onValueChange={handleVehicleTypeChange}>
                <SelectTrigger className={errors.vehicleType ? "border-destructive" : ""}>
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="car">Car</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="motorcycle">Motorcycle</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="bus">Bus</SelectItem>
                </SelectContent>
              </Select>
              {errors.vehicleType && (
                <p className="text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.vehicleType}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Register as Driver
            </Button>
          </form>
        )}
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Validation Rules:</strong> Phone number must be numeric with at least 10 digits. 
          Vehicle type must be selected from the dropdown (Car, Truck, Motorcycle, Van, SUV, or Bus). 
          All fields are required.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <DriverRegistrationForm />;

const code = `import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FormErrors {
  name?: string;
  licenseNumber?: string;
  phone?: string;
  vehicleType?: string;
}

const DriverRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    licenseNumber: "",
    phone: "",
    vehicleType: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Phone validation - must be numeric
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\\d+$/;
    return phoneRegex.test(phone) && phone.length >= 10;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleVehicleTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, vehicleType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate license number
    if (!formData.licenseNumber.trim()) {
      newErrors.licenseNumber = "License number is required";
    }

    // Validate phone (numeric only)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Phone must be numeric and at least 10 digits";
    }

    // Validate vehicle type
    if (!formData.vehicleType) {
      newErrors.vehicleType = "Vehicle type is required";
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
        <label>Name *</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label>License Number *</label>
        <input
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
        />
        {errors.licenseNumber && <span>{errors.licenseNumber}</span>}
      </div>

      <div>
        <label>Phone Number *</label>
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <div>
        <label>Vehicle Type *</label>
        <Select value={formData.vehicleType} onValueChange={handleVehicleTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select vehicle type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="car">Car</SelectItem>
            <SelectItem value="truck">Truck</SelectItem>
            <SelectItem value="motorcycle">Motorcycle</SelectItem>
            <SelectItem value="van">Van</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="bus">Bus</SelectItem>
          </SelectContent>
        </Select>
        {errors.vehicleType && <span>{errors.vehicleType}</span>}
      </div>

      <button type="submit">Register as Driver</button>
    </form>
  );
};

export default DriverRegistrationForm;`;

export default function Exercise28() {
  return (
    <ExerciseLayout
      exerciseNumber={28}
      title="Driver Registration Form"
      description="Create a registration form for drivers with fields: Name, License Number, Phone Number, Vehicle Type. Add a dropdown to select the vehicle type (e.g., car, truck, motorcycle)."
      instructions={[
        "Create a form with Name, License Number, Phone Number, and Vehicle Type fields",
        "Add a dropdown/select component for vehicle type selection",
        "Include vehicle types: Car, Truck, Motorcycle, Van, SUV, Bus",
        "Add validation to ensure all fields are required",
        "Validate phone number to ensure it contains only numeric characters",
        "Display error messages for invalid fields",
        "Show success message on successful submission"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

