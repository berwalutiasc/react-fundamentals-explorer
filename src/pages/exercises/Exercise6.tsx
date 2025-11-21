import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Power } from "lucide-react";

const ToggleButton = () => {
  // State to track ON/OFF status
  const [isOn, setIsOn] = useState(false);

  // Toggle function
  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {/* Status Display */}
        <div className="space-y-2">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            isOn ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
          }`}>
            <Power className="h-5 w-5" />
            <span className="font-bold text-lg">
              {isOn ? 'ON' : 'OFF'}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Current State: {isOn ? 'Active' : 'Inactive'}
          </p>
        </div>

        {/* Toggle Button */}
        <Button 
          onClick={handleToggle}
          variant={isOn ? "default" : "outline"}
          size="lg"
          className="w-full"
        >
          Toggle Power
        </Button>

        {/* Visual Indicator */}
        <div className="flex justify-center pt-4">
          <div className={`w-16 h-16 rounded-full border-4 transition-all duration-300 ${
            isOn 
              ? 'bg-success border-success shadow-lg shadow-success/50' 
              : 'bg-muted border-border'
          }`} />
        </div>
      </div>
    </Card>
  );
};

const Preview = () => <ToggleButton />;

const code = `// ToggleButton.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Power } from "lucide-react";

const ToggleButton = () => {
  // useState hook to manage the toggle state
  // Initial value is false (OFF)
  const [isOn, setIsOn] = useState(false);

  // Event handler function for button click
  const handleToggle = () => {
    // Toggle between true and false using NOT operator
    setIsOn(!isOn);
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="text-center space-y-6">
        {/* Display current status with conditional styling */}
        <div className="space-y-2">
          <div className={\`inline-flex items-center gap-2 px-4 py-2 rounded-full \${
            isOn ? 'bg-success/20 text-success' : 'bg-muted'
          }\`}>
            <Power className="h-5 w-5" />
            <span className="font-bold text-lg">
              {/* Conditional rendering based on state */}
              {isOn ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>

        {/* Button with onClick event handler */}
        <Button 
          onClick={handleToggle}
          variant={isOn ? "default" : "outline"}
          size="lg"
        >
          Toggle Power
        </Button>

        {/* Visual indicator that changes with state */}
        <div className="flex justify-center">
          <div className={\`w-16 h-16 rounded-full transition-all \${
            isOn 
              ? 'bg-success border-success shadow-lg' 
              : 'bg-muted border-border'
          }\`} />
        </div>
      </div>
    </Card>
  );
};

export default ToggleButton;`;

export default function Exercise6() {
  return (
    <ExerciseLayout
      exerciseNumber={6}
      title="Toggle ON/OFF Button"
      description="Create a button that toggles between 'ON' and 'OFF' states when clicked."
      instructions={[
        "Import the useState hook from React",
        "Create a state variable to track the ON/OFF status (boolean)",
        "Create a button with an onClick event handler",
        "Toggle the state when the button is clicked using !isOn",
        "Display the current state (ON or OFF) in the component",
        "Add visual feedback to show the current state"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
