import { useState, memo, useMemo } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Zap } from "lucide-react";

// Heavy calculation function (simulates expensive computation)
const performHeavyCalculation = (number: number): number => {
  // Simulate heavy computation
  let result = 0;
  for (let i = 0; i < number * 100000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  return Math.round(result);
};

// Memoized calculation component
interface HeavyCalculationProps {
  number: number;
  label: string;
}

const HeavyCalculation = memo(({ number, label }: HeavyCalculationProps) => {
  const startTime = performance.now();
  const result = useMemo(() => performHeavyCalculation(number), [number]);
  const endTime = performance.now();
  const calculationTime = (endTime - startTime).toFixed(2);

  return (
    <Card className="p-4 bg-secondary border-border">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="h-4 w-4 text-primary" />
        <h4 className="font-semibold text-foreground">{label}</h4>
      </div>
      <div className="space-y-2">
        <div>
          <span className="text-xs text-muted-foreground">Input:</span>
          <span className="ml-2 font-mono text-foreground">{number}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Result:</span>
          <span className="ml-2 font-mono text-primary text-lg">{result}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Time:</span>
          <span className="ml-2 text-xs text-muted-foreground">{calculationTime}ms</span>
        </div>
        <p className="text-xs text-success mt-2">
          ✓ Memoized - only recalculates when number changes
        </p>
      </div>
    </Card>
  );
});

HeavyCalculation.displayName = "HeavyCalculation";

// Non-memoized version for comparison
const NonMemoizedCalculation = ({ number, label }: HeavyCalculationProps) => {
  const startTime = performance.now();
  const result = performHeavyCalculation(number);
  const endTime = performance.now();
  const calculationTime = (endTime - startTime).toFixed(2);

  return (
    <Card className="p-4 bg-destructive/10 border-destructive/20">
      <div className="flex items-center gap-2 mb-2">
        <Calculator className="h-4 w-4 text-destructive" />
        <h4 className="font-semibold text-foreground">{label}</h4>
      </div>
      <div className="space-y-2">
        <div>
          <span className="text-xs text-muted-foreground">Input:</span>
          <span className="ml-2 font-mono text-foreground">{number}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Result:</span>
          <span className="ml-2 font-mono text-destructive text-lg">{result}</span>
        </div>
        <div>
          <span className="text-xs text-muted-foreground">Time:</span>
          <span className="ml-2 text-xs text-muted-foreground">{calculationTime}ms</span>
        </div>
        <p className="text-xs text-destructive mt-2">
          ✗ Not memoized - recalculates on every render
        </p>
      </div>
    </Card>
  );
};

// Main component
const HeavyCalculationDemo = () => {
  const [calculationInput, setCalculationInput] = useState(100);
  const [unrelatedState, setUnrelatedState] = useState(0);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Heavy Calculation with Memo</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="number">Calculation Input (affects calculation):</Label>
            <Input
              id="number"
              type="number"
              value={calculationInput}
              onChange={(e) => setCalculationInput(Number(e.target.value))}
              placeholder="Enter a number"
              min="1"
              max="500"
            />
            <p className="text-xs text-muted-foreground">
              Try values between 50-300 for best demonstration
            </p>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Unrelated State:</span>
              <span className="text-2xl font-bold text-primary">{unrelatedState}</span>
            </div>
            <Button
              onClick={() => setUnrelatedState(prev => prev + 1)}
              size="sm"
            >
              Increment Unrelated State
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              This state doesn't affect the calculation. Watch the performance difference!
            </p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <HeavyCalculation number={calculationInput} label="Memoized Calculation" />
        <NonMemoizedCalculation number={calculationInput} label="Non-Memoized Calculation" />
      </div>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Performance Note:</strong> The memoized component uses useMemo() to cache 
          the calculation result. When you increment the unrelated state, the memoized 
          version doesn't recalculate, while the non-memoized version recalculates every time. 
          This optimization is crucial for expensive computations!
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <HeavyCalculationDemo />;

const code = `import { useState, memo, useMemo } from "react";

// Simulate heavy calculation
const performHeavyCalculation = (number: number): number => {
  let result = 0;
  for (let i = 0; i < number * 100000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  return Math.round(result);
};

// Memoized calculation component
interface HeavyCalculationProps {
  number: number;
}

const HeavyCalculation = memo(({ number }: HeavyCalculationProps) => {
  // useMemo caches the result and only recalculates when 'number' changes
  const result = useMemo(
    () => performHeavyCalculation(number),
    [number]
  );

  return (
    <div>
      <h3>Calculation Result</h3>
      <p>Input: {number}</p>
      <p>Result: {result}</p>
      <p>✓ Memoized with useMemo</p>
    </div>
  );
});

HeavyCalculation.displayName = "HeavyCalculation";

// Main component
const App = () => {
  const [number, setNumber] = useState(100);
  const [unrelatedState, setUnrelatedState] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      
      <button onClick={() => setUnrelatedState(prev => prev + 1)}>
        Unrelated: {unrelatedState}
      </button>

      {/* This won't recalculate when unrelatedState changes */}
      <HeavyCalculation number={number} />
    </div>
  );
};

export default App;`;

export default function Exercise23() {
  return (
    <ExerciseLayout
      exerciseNumber={23}
      title="Heavy Calculation with React.memo"
      description="Create a 'heavy calculation' component that uses React.memo to optimize performance."
      instructions={[
        "Create a component that performs an expensive calculation",
        "Use useMemo() to cache the calculation result",
        "Wrap the component with React.memo() to prevent unnecessary re-renders",
        "Add unrelated state to demonstrate that memoization works",
        "Verify that the calculation only runs when the input changes",
        "Compare performance with a non-memoized version"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

