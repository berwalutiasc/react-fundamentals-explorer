import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Check } from "lucide-react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const options = ["Dashboard", "Profile", "Settings", "Billing", "Logout"];

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground text-center">
          Dropdown Menu
        </h2>

        <div className="relative">
          {/* Dropdown trigger button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="w-full justify-between"
          >
            <span>{selectedOption}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </Button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-2 bg-popover border border-border rounded-lg shadow-lg overflow-hidden">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center justify-between"
                >
                  <span className="text-foreground">{option}</span>
                  {selectedOption === option && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedOption !== "Select an option" && (
          <div className="p-4 bg-secondary rounded-lg text-center">
            <p className="text-sm text-muted-foreground">You selected:</p>
            <p className="text-lg font-semibold text-primary">
              {selectedOption}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

const Preview = () => <DropdownMenu />;

const code = `// DropdownMenu.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, Check } from "lucide-react";

const DropdownMenu = () => {
  // State for dropdown open/closed
  const [isOpen, setIsOpen] = useState(false);
  // State for selected option
  const [selectedOption, setSelectedOption] = useState("Select an option");

  // Menu options array
  const options = ["Dashboard", "Profile", "Settings", "Billing", "Logout"];

  // Handle option selection
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-center">
          Dropdown Menu
        </h2>

        <div className="relative">
          {/* Trigger button */}
          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="w-full justify-between"
          >
            <span>{selectedOption}</span>
            {/* Animated chevron icon */}
            <ChevronDown
              className={\`h-4 w-4 transition-transform \${
                isOpen ? "rotate-180" : ""
              }\`}
            />
          </Button>

          {/* Conditionally render dropdown menu */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-2 bg-popover border rounded-lg shadow-lg">
              {/* Map through options */}
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full px-4 py-3 text-left hover:bg-accent flex items-center justify-between"
                >
                  <span>{option}</span>
                  {/* Show checkmark for selected option */}
                  {selectedOption === option && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Display selected option */}
        {selectedOption !== "Select an option" && (
          <div className="p-4 bg-secondary rounded-lg text-center">
            <p className="text-sm">You selected:</p>
            <p className="text-lg font-semibold text-primary">
              {selectedOption}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default DropdownMenu;`;

export default function Exercise10() {
  return (
    <ExerciseLayout
      exerciseNumber={10}
      title="Dropdown Menu"
      description="Create a dropdown menu component that shows and hides options when clicked."
      instructions={[
        "Create state for isOpen (boolean) and selectedOption (string)",
        "Create a button that toggles the dropdown open/closed",
        "Conditionally render the menu based on isOpen state",
        "Map through an array of options to render menu items",
        "Handle option selection and close the dropdown",
        "Display the currently selected option"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
