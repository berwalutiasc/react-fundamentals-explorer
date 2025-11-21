import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options = [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue.js" },
    { id: "angular", label: "Angular" },
    { id: "svelte", label: "Svelte" },
    { id: "solid", label: "Solid.js" }
  ];

  const handleCheckboxChange = (optionId: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleSubmit = () => {
    console.log("Selected options:", selectedOptions);
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Favorite Frameworks
          </h2>
          <p className="text-muted-foreground">
            Select all that apply
          </p>
        </div>

        {/* Checkbox list */}
        <div className="space-y-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors">
              <Checkbox
                id={option.id}
                checked={selectedOptions.includes(option.id)}
                onCheckedChange={() => handleCheckboxChange(option.id)}
              />
              <Label
                htmlFor={option.id}
                className="flex-1 cursor-pointer text-foreground"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>

        {/* Display selected options */}
        {selectedOptions.length > 0 && (
          <div className="p-4 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">
              Selected ({selectedOptions.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedOptions.map((id) => {
                const option = options.find((opt) => opt.id === id);
                return (
                  <span
                    key={id}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                  >
                    {option?.label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={selectedOptions.length === 0}
        >
          Submit Selection
        </Button>
      </div>
    </Card>
  );
};

const Preview = () => <CheckboxForm />;

const code = `// CheckboxForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const CheckboxForm = () => {
  // State to store selected option IDs
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // Array of checkbox options
  const options = [
    { id: "react", label: "React" },
    { id: "vue", label: "Vue.js" },
    { id: "angular", label: "Angular" },
    { id: "svelte", label: "Svelte" },
    { id: "solid", label: "Solid.js" }
  ];

  // Handle checkbox toggle
  const handleCheckboxChange = (optionId: string) => {
    setSelectedOptions((prev) =>
      // If already selected, remove it; otherwise add it
      prev.includes(optionId)
        ? prev.filter((id) => id !== optionId)
        : [...prev, optionId]
    );
  };

  const handleSubmit = () => {
    console.log("Selected options:", selectedOptions);
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-2">Favorite Frameworks</h2>
          <p className="text-muted-foreground">Select all that apply</p>
        </div>

        {/* Map through options to create checkboxes */}
        <div className="space-y-3">
          {options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary">
              {/* Checkbox component */}
              <Checkbox
                id={option.id}
                checked={selectedOptions.includes(option.id)}
                onCheckedChange={() => handleCheckboxChange(option.id)}
              />
              <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </div>

        {/* Display selected options */}
        {selectedOptions.length > 0 && (
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm mb-2">
              Selected ({selectedOptions.length}):
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedOptions.map((id) => {
                const option = options.find((opt) => opt.id === id);
                return (
                  <span
                    key={id}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm"
                  >
                    {option?.label}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={selectedOptions.length === 0}
        >
          Submit Selection
        </Button>
      </div>
    </Card>
  );
};

export default CheckboxForm;`;

export default function Exercise15() {
  return (
    <ExerciseLayout
      exerciseNumber={15}
      title="Checkbox Form"
      description="Build a form with multiple checkbox inputs and display the selected options."
      instructions={[
        "Create state to store an array of selected option IDs",
        "Create an array of checkbox options",
        "Map through options to render checkboxes",
        "Handle checkbox changes by adding/removing from array",
        "Use .includes() to check if option is selected",
        "Display selected options in a readable format",
        "Disable submit button when nothing is selected"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
