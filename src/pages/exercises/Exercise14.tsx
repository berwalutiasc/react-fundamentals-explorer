import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    cvv: ""
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="p-8">
        <div className="space-y-6">
          {/* Progress indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step indicators */}
          <div className="flex justify-between">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= num ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > num ? <CheckCircle className="h-5 w-5" /> : num}
                </div>
                <span className="text-sm hidden sm:inline">
                  {num === 1 ? 'Personal' : num === 2 ? 'Address' : 'Payment'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
            </div>
          )}

          {/* Step 2: Address */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Address Details</h3>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="123 Main St"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="New York"
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Payment Information</h3>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => handleChange('cardNumber', e.target.value)}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  value={formData.cvv}
                  onChange={(e) => handleChange('cvv', e.target.value)}
                  placeholder="123"
                  maxLength={3}
                />
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <Button
              onClick={handleBack}
              disabled={step === 1}
              variant="outline"
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {step === totalSteps ? 'Submit' : 'Next'}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const Preview = () => <MultiStepForm />;

const code = `// MultiStepForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const MultiStepForm = () => {
  // Track current step
  const [step, setStep] = useState(1);
  
  // Store all form data in one object
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    cardNumber: "",
    cvv: ""
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Generic handler for updating form data
  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <Card className="p-8">
      <div className="space-y-6">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Conditional rendering based on step */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Personal Information</h3>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Address Details</h3>
            <div className="space-y-2">
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => handleChange('city', e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Payment Information</h3>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={formData.cardNumber}
                onChange={(e) => handleChange('cardNumber', e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <Button onClick={handleBack} disabled={step === 1} variant="outline">
            Back
          </Button>
          <Button onClick={handleNext}>
            {step === totalSteps ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MultiStepForm;`;

export default function Exercise14() {
  return (
    <ExerciseLayout
      exerciseNumber={14}
      title="Multi-Step Form"
      description="Create a multi-step form where users can fill in details step-by-step."
      instructions={[
        "Create state for current step (number) and form data (object)",
        "Store all form fields in a single formData object",
        "Use conditional rendering to show different steps",
        "Create navigation buttons (Next/Back)",
        "Add a progress bar to show completion status",
        "Preserve form data when moving between steps"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
