import { useState } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";

const HoverColorChange = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground text-center">
          Hover Effect Demo
        </h2>
        
        <div
          className={`p-12 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
            isHovered
              ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
              : 'bg-card text-foreground border-border'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-center font-medium">
            {isHovered ? '🎨 You are hovering!' : '👆 Hover over me'}
          </p>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Current state: <span className="font-mono">{isHovered ? 'Hovered' : 'Not Hovered'}</span>
        </p>
      </div>
    </Card>
  );
};

const Preview = () => <HoverColorChange />;

const code = `// HoverColorChange.tsx
import { useState } from "react";
import { Card } from "@/components/ui/card";

const HoverColorChange = () => {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="p-8 max-w-md mx-auto">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-center">
          Hover Effect Demo
        </h2>
        
        {/* Div with hover event handlers */}
        <div
          className={\`p-12 rounded-lg border-2 transition-all duration-300 cursor-pointer \${
            isHovered
              ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105'
              : 'bg-card text-foreground border-border'
          }\`}
          // Mouse enter event - when cursor enters the element
          onMouseEnter={() => setIsHovered(true)}
          // Mouse leave event - when cursor leaves the element
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className="text-center font-medium">
            {isHovered ? '🎨 You are hovering!' : '👆 Hover over me'}
          </p>
        </div>

        {/* Display current hover state */}
        <p className="text-sm text-center">
          Current state: <span className="font-mono">
            {isHovered ? 'Hovered' : 'Not Hovered'}
          </span>
        </p>
      </div>
    </Card>
  );
};

export default HoverColorChange;`;

export default function Exercise8() {
  return (
    <ExerciseLayout
      exerciseNumber={8}
      title="Hover Color Change"
      description="Create a component that changes the background color of a div when hovered over."
      instructions={[
        "Create a state variable to track hover status",
        "Add onMouseEnter event handler to set isHovered to true",
        "Add onMouseLeave event handler to set isHovered to false",
        "Use conditional styling based on the hover state",
        "Add smooth transitions for better visual feedback"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
