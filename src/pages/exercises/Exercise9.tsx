import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

const FormSubmitLogger = () => {
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] Form submitted with: "${inputValue}"`;
    
    // Log to console
    console.log(logMessage);
    
    // Add to logs array for display
    setLogs([logMessage, ...logs]);
    
    // Clear input
    setInputValue("");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userInput">Enter Your Message</Label>
            <Input
              id="userInput"
              type="text"
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>

        <div className="mt-4 p-3 bg-secondary rounded-lg flex items-start gap-2">
          <AlertCircle className="h-4 w-4 mt-0.5 text-info" />
          <p className="text-sm text-muted-foreground">
            Open browser console (F12) to see logs when you submit the form
          </p>
        </div>
      </Card>

      {logs.length > 0 && (
        <Card className="p-6">
          <h3 className="font-semibold mb-3 text-foreground">Console Logs</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {logs.map((log, index) => (
              <div
                key={index}
                className="p-3 bg-code-bg rounded border border-code-border font-mono text-sm text-foreground"
              >
                {log}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

const Preview = () => <FormSubmitLogger />;

const code = `// FormSubmitLogger.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const FormSubmitLogger = () {
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default form submission (page reload)
    e.preventDefault();
    
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = \`[\${timestamp}] Form submitted with: "\${inputValue}"\`;
    
    // Log to browser console
    console.log(logMessage);
    console.log("Raw input value:", inputValue);
    
    // Add to logs array for visual display
    setLogs([logMessage, ...logs]);
    
    // Clear the input field
    setInputValue("");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card className="p-6">
        {/* Form with onSubmit handler */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userInput">Enter Your Message</Label>
            {/* Controlled input */}
            <Input
              id="userInput"
              type="text"
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          
          {/* Submit button */}
          <Button type="submit" className="w-full">
            Submit Form
          </Button>
        </form>
      </Card>

      {/* Display logs visually */}
      {logs.length > 0 && (
        <Card className="p-6">
          <h3 className="font-semibold mb-3">Console Logs</h3>
          <div className="space-y-2">
            {logs.map((log, index) => (
              <div
                key={index}
                className="p-3 bg-code-bg rounded font-mono text-sm"
              >
                {log}
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default FormSubmitLogger;`;

export default function Exercise9() {
  return (
    <ExerciseLayout
      exerciseNumber={9}
      title="Form Submit Logger"
      description="Build a form that logs the user's input to the console when submitted."
      instructions={[
        "Create a form element with onSubmit event handler",
        "Prevent default form submission using e.preventDefault()",
        "Create a controlled input with value and onChange",
        "Log the input value to console.log() when form is submitted",
        "Clear the input field after submission",
        "Optionally display the logs visually in the component"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
