import ExerciseLayout from "@/components/ExerciseLayout";
import { Button } from "@/components/ui/button";

// Reusable button component with customizable props
const CustomButton = ({ 
  text, 
  variant = "default" 
}: { 
  text: string; 
  variant?: "default" | "secondary" | "destructive" | "outline";
}) => {
  return (
    <Button variant={variant} className="min-w-[150px]">
      {text}
    </Button>
  );
};

const Preview = () => {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-card rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-4 text-foreground">Reusable Button Examples</h3>
        <div className="flex flex-wrap gap-3">
          <CustomButton text="Primary Action" variant="default" />
          <CustomButton text="Secondary Action" variant="secondary" />
          <CustomButton text="Delete Item" variant="destructive" />
          <CustomButton text="View Details" variant="outline" />
        </div>
      </div>

      <div className="p-6 bg-secondary rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-2 text-foreground">How It Works</h3>
        <p className="text-muted-foreground">
          The CustomButton component accepts <code className="bg-muted px-2 py-1 rounded">text</code> and{" "}
          <code className="bg-muted px-2 py-1 rounded">variant</code> props, allowing you to reuse the same component with different styles and content.
        </p>
      </div>
    </div>
  );
};

const code = `// CustomButton.tsx - Reusable Button Component
import { Button } from "@/components/ui/button";

const CustomButton = ({ 
  text, 
  variant = "default" 
}: { 
  text: string; 
  variant?: "default" | "secondary" | "destructive" | "outline";
}) => {
  return (
    <Button variant={variant} className="min-w-[150px]">
      {text}
    </Button>
  );
};

// Usage Example
export default function App() {
  return (
    <div className="space-y-4">
      {/* Using the same component with different props */}
      <CustomButton text="Primary Action" variant="default" />
      <CustomButton text="Secondary Action" variant="secondary" />
      <CustomButton text="Delete Item" variant="destructive" />
      <CustomButton text="View Details" variant="outline" />
    </div>
  );
}`;

export default function Exercise3() {
  return (
    <ExerciseLayout
      exerciseNumber={3}
      title="Reusable Button Component"
      description="Create a reusable button component that accepts customizable text and color props."
      instructions={[
        "Create a CustomButton component that accepts props",
        "Define props for button text and variant/style",
        "Use TypeScript to type your props",
        "Make the variant prop optional with a default value",
        "Render the button with the provided text and styling"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
