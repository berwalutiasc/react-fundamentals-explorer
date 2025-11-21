import { useState, memo } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { List, Plus, Minus } from "lucide-react";

// Memoized list item component
interface ListItemProps {
  item: string;
  index: number;
}

const ListItem = memo(({ item, index }: ListItemProps) => {
  // Simulate some rendering work
  const renderTime = new Date().toLocaleTimeString();
  
  return (
    <div className="p-3 bg-secondary rounded-lg border border-border hover:border-primary transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-muted-foreground">#{index + 1}</span>
          <span className="ml-2 text-foreground">{item}</span>
        </div>
        <span className="text-xs text-muted-foreground">{renderTime}</span>
      </div>
      <p className="text-xs text-success mt-1">✓ Memoized - won't re-render unnecessarily</p>
    </div>
  );
});

ListItem.displayName = "ListItem";

// Counter component
const CounterDisplay = ({ count }: { count: number }) => {
  return (
    <Card className="p-4 bg-primary/10 border-primary/20">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-foreground mb-1">Counter</h4>
          <p className="text-3xl font-bold text-primary">{count}</p>
        </div>
        <div className="text-xs text-muted-foreground">
          This counter state is unrelated to the list
        </div>
      </div>
    </Card>
  );
};

// Main component
const CounterWithMemoizedList = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([
    "React Fundamentals",
    "Component Lifecycle",
    "State Management",
    "Props and Props Drilling",
    "Event Handling",
    "Conditional Rendering",
    "Lists and Keys",
    "React Hooks",
    "Context API",
    "Performance Optimization"
  ]);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Memoized List with Counter</h3>
        </div>

        <CounterDisplay count={count} />

        <div className="flex gap-2 mt-4">
          <Button onClick={() => setCount(prev => prev - 1)} size="sm" variant="outline">
            <Minus className="h-4 w-4" />
            Decrement
          </Button>
          <Button onClick={() => setCount(prev => prev + 1)} size="sm">
            <Plus className="h-4 w-4" />
            Increment
          </Button>
          <Button 
            onClick={() => setCount(0)} 
            size="sm" 
            variant="outline"
          >
            Reset
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          💡 The list items below are memoized. Even though the counter changes, 
          they won't re-render because their props haven't changed!
        </p>
      </Card>

      <Card className="p-6">
        <h4 className="font-semibold text-foreground mb-4">Learning Topics (Memoized List)</h4>
        <div className="space-y-2">
          {items.map((item, index) => (
            <ListItem key={index} item={item} index={index} />
          ))}
        </div>
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Optimization:</strong> The list items are wrapped with React.memo(), 
          so they only re-render when their props change. When you increment/decrement 
          the counter, the list items don't re-render, improving performance!
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <CounterWithMemoizedList />;

const code = `import { useState, memo } from "react";

// Memoized list item - won't re-render unless props change
interface ListItemProps {
  item: string;
  index: number;
}

const ListItem = memo(({ item, index }: ListItemProps) => {
  return (
    <div>
      <span>#{index + 1}</span>
      <span>{item}</span>
    </div>
  );
});

ListItem.displayName = "ListItem";

// Main component with counter and list
const CounterWithList = () => {
  const [count, setCount] = useState(0);
  const [items] = useState([
    "React Fundamentals",
    "Component Lifecycle",
    "State Management",
    // ... more items
  ]);

  return (
    <div>
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(prev => prev - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>
      </div>

      <div>
        <h4>Learning Topics</h4>
        {items.map((item, index) => (
          <ListItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CounterWithList;`;

export default function Exercise22() {
  return (
    <ExerciseLayout
      exerciseNumber={22}
      title="Memoized List Optimization"
      description="Build a component that displays a counter. Use React.memo to optimize a list of unrelated items from re-rendering."
      instructions={[
        "Create a counter component with increment/decrement buttons",
        "Create a list of items that are unrelated to the counter",
        "Wrap each list item component with React.memo()",
        "Verify that changing the counter doesn't cause list items to re-render",
        "Compare the performance difference with and without memoization"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

