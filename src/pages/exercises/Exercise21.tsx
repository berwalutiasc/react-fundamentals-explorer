import { useState, memo, useEffect } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Zap, User } from "lucide-react";

// Child component - memoized to prevent unnecessary re-renders
interface ChildProps {
  name: string;
  renderCount: number;
}

const ChildComponent = memo(({ name, renderCount }: ChildProps) => {
  // This will only re-render when 'name' prop changes
  return (
    <Card className="p-4 bg-secondary">
      <div className="flex items-center gap-2 mb-2">
        <User className="h-4 w-4 text-primary" />
        <h4 className="font-semibold text-foreground">Child Component</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Received name: <span className="font-mono text-foreground">{name}</span>
      </p>
      <p className="text-xs text-muted-foreground">
        Component has rendered: <span className="font-mono text-primary">{renderCount}</span> times
      </p>
      <p className="text-xs text-success mt-2">
        ✓ This component is memoized - it only re-renders when 'name' changes
      </p>
    </Card>
  );
});

ChildComponent.displayName = "ChildComponent";

// Non-memoized child for comparison
const NonMemoizedChild = ({ name, renderCount }: ChildProps) => {
  return (
    <Card className="p-4 bg-destructive/10 border-destructive/20">
      <div className="flex items-center gap-2 mb-2">
        <User className="h-4 w-4 text-destructive" />
        <h4 className="font-semibold text-foreground">Non-Memoized Child</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        Received name: <span className="font-mono text-foreground">{name}</span>
      </p>
      <p className="text-xs text-muted-foreground">
        Component has rendered: <span className="font-mono text-destructive">{renderCount}</span> times
      </p>
      <p className="text-xs text-destructive mt-2">
        ✗ This component re-renders every time parent re-renders
      </p>
    </Card>
  );
};

// Parent component
const ParentComponent = () => {
  const [name, setName] = useState("John Doe");
  const [unrelatedState, setUnrelatedState] = useState(0);
  const [memoRenderCount, setMemoRenderCount] = useState(1);
  const [nonMemoRenderCount, setNonMemoRenderCount] = useState(1);

  // Track renders
  useEffect(() => {
    setMemoRenderCount(prev => prev + 1);
  }, [name]);

  useEffect(() => {
    setNonMemoRenderCount(prev => prev + 1);
  });

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Parent Component</h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name (prop passed to child):</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name"
            />
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
              This state doesn't affect the child component, but watch what happens!
            </p>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <ChildComponent name={name} renderCount={memoRenderCount} />
        <NonMemoizedChild name={name} renderCount={nonMemoRenderCount} />
      </div>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Notice:</strong> When you increment the unrelated state, only the non-memoized child re-renders.
          The memoized child only re-renders when the 'name' prop changes, optimizing performance!
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <ParentComponent />;

const code = `import { useState, memo, useEffect } from "react";

// Memoized child component - only re-renders when props change
interface ChildProps {
  name: string;
}

const ChildComponent = memo(({ name }: ChildProps) => {
  useEffect(() => {
    console.log("ChildComponent rendered!");
  });

  return (
    <div>
      <h3>Child Component</h3>
      <p>Name: {name}</p>
      <p>✓ This component is memoized</p>
    </div>
  );
});

ChildComponent.displayName = "ChildComponent";

// Parent component
const ParentComponent = () => {
  const [name, setName] = useState("John Doe");
  const [unrelatedState, setUnrelatedState] = useState(0);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
      
      <button onClick={() => setUnrelatedState(prev => prev + 1)}>
        Increment: {unrelatedState}
      </button>

      {/* This child won't re-render when unrelatedState changes */}
      <ChildComponent name={name} />
    </div>
  );
};

export default ParentComponent;`;

export default function Exercise21() {
  return (
    <ExerciseLayout
      exerciseNumber={21}
      title="Prevent Child Re-render with React.memo"
      description="Create a parent component that passes a property to a child component. Use React.memo to prevent the child component from re-rendering unnecessarily."
      instructions={[
        "Create a parent component with state that affects the child and unrelated state",
        "Create a child component that receives a prop from the parent",
        "Wrap the child component with React.memo() to prevent unnecessary re-renders",
        "Pass a prop from parent to child that changes independently",
        "Verify that the memoized child only re-renders when its prop changes",
        "Compare with a non-memoized version to see the difference"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

