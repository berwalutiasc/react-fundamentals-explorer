import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  // State to track the count value
  const [count, setCount] = useState(0);

  // Event handlers for different actions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Counter Component</h2>
        
        {/* Display count with large text */}
        <div className="py-8">
          <div className={`text-6xl font-bold transition-colors ${
            count > 0 ? 'text-success' : count < 0 ? 'text-destructive' : 'text-muted-foreground'
          }`}>
            {count}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {count === 0 ? 'Neutral' : count > 0 ? 'Positive' : 'Negative'}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={decrement}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Minus className="h-4 w-4" />
            Decrement
          </Button>
          
          <Button 
            onClick={reset}
            variant="secondary"
            size="lg"
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          
          <Button 
            onClick={increment}
            size="lg"
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Increment
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 pt-4">
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs text-muted-foreground">Clicks</div>
            <div className="text-lg font-bold">{Math.abs(count)}</div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs text-muted-foreground">Sign</div>
            <div className="text-lg font-bold">
              {count > 0 ? '+' : count < 0 ? '-' : '0'}
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs text-muted-foreground">Type</div>
            <div className="text-lg font-bold">
              {count % 2 === 0 ? 'Even' : 'Odd'}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Preview = () => <Counter />;

const code = `// Counter.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Minus, RotateCcw } from "lucide-react";

const Counter = () => {
  // Initialize state with 0
  const [count, setCount] = useState(0);

  // Event handler functions
  const increment = () => {
    setCount(count + 1); // Add 1 to current count
  };

  const decrement = () => {
    setCount(count - 1); // Subtract 1 from current count
  };

  const reset = () => {
    setCount(0); // Reset count to 0
  };

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="text-center space-y-6">
        <h2 className="text-xl font-semibold">Counter Component</h2>
        
        {/* Display the count with conditional coloring */}
        <div className="py-8">
          <div className={\`text-6xl font-bold \${
            count > 0 ? 'text-success' : 
            count < 0 ? 'text-destructive' : 
            'text-muted-foreground'
          }\`}>
            {count}
          </div>
        </div>

        {/* Buttons with onClick handlers */}
        <div className="flex gap-3 justify-center">
          <Button 
            onClick={decrement}
            variant="outline"
            size="lg"
          >
            <Minus className="h-4 w-4 mr-2" />
            Decrement
          </Button>
          
          <Button 
            onClick={reset}
            variant="secondary"
            size="lg"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          
          <Button 
            onClick={increment}
            size="lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Increment
          </Button>
        </div>

        {/* Additional stats display */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs">Clicks</div>
            <div className="text-lg font-bold">{Math.abs(count)}</div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs">Sign</div>
            <div className="text-lg font-bold">
              {count > 0 ? '+' : count < 0 ? '-' : '0'}
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="text-xs">Type</div>
            <div className="text-lg font-bold">
              {count % 2 === 0 ? 'Even' : 'Odd'}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Counter;`;

export default function Exercise7() {
  return (
    <ExerciseLayout
      exerciseNumber={7}
      title="Counter Component"
      description="Build a counter component with increment and decrement buttons."
      instructions={[
        "Create a state variable to store the count (initial value: 0)",
        "Create an increment function that adds 1 to the count",
        "Create a decrement function that subtracts 1 from the count",
        "Add a reset function to set count back to 0",
        "Create buttons that call these functions onClick",
        "Display the current count value prominently"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
