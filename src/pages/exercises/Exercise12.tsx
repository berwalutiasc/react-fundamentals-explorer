import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ControlledForm = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground text-center">
          Controlled Input Form
        </h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="controlled-input">Type something:</Label>
            <Input
              id="controlled-input"
              type="text"
              placeholder="Start typing..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Character count: {inputValue.length}
            </p>
          </div>

          <div className="p-4 bg-secondary rounded-lg border border-border">
            <p className="text-sm text-muted-foreground mb-2">
              You typed:
            </p>
            <p className="text-lg font-mono text-foreground">
              {inputValue || <span className="text-muted-foreground italic">Nothing yet...</span>}
            </p>
          </div>

          <div className="p-4 bg-primary/10 rounded-lg">
            <p className="text-sm">
              <strong>Real-time updates:</strong> The value below updates as you type because the input is controlled by React state.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Preview = () => <ControlledForm />;

const code = `// ControlledForm.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ControlledForm = () => {
  // State to control the input value
  const [inputValue, setInputValue] = useState("");

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-center">
          Controlled Input Form
        </h2>

        <div className="space-y-4">
          {/* Controlled input */}
          <div className="space-y-2">
            <Label htmlFor="controlled-input">Type something:</Label>
            <Input
              id="controlled-input"
              type="text"
              placeholder="Start typing..."
              // Value is controlled by state
              value={inputValue}
              // Update state on every change
              onChange={(e) => setInputValue(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Character count: {inputValue.length}
            </p>
          </div>

          {/* Display the current value */}
          <div className="p-4 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              You typed:
            </p>
            <p className="text-lg font-mono">
              {inputValue || <span className="italic">Nothing yet...</span>}
            </p>
          </div>

          <div className="p-4 bg-primary/10 rounded-lg">
            <p className="text-sm">
              <strong>Real-time updates:</strong> The value updates as you 
              type because the input is controlled by React state.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ControlledForm;`;

export default function Exercise12() {
  return (
    <ExerciseLayout
      exerciseNumber={12}
      title="Controlled Input Form"
      description="Build a controlled form with a single input field and display the entered value."
      instructions={[
        "Create a state variable to store the input value",
        "Create an input field with value prop set to the state",
        "Add onChange handler to update state on every keystroke",
        "Display the current input value below the form",
        "Show character count for extra functionality",
        "The input is 'controlled' because React manages its value"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
