import ExerciseLayout from "@/components/ExerciseLayout";

// The actual component implementation
const WelcomeComponent = () => {
  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-primary mb-2">Welcome to React Lab! 🎉</h2>
      <p className="text-muted-foreground">Start your journey to mastering React components.</p>
    </div>
  );
};

const DateComponent = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-6 bg-secondary rounded-lg border border-border mt-4">
      <h3 className="text-lg font-semibold text-foreground mb-2">Today's Date</h3>
      <p className="text-xl font-mono text-primary">{currentDate}</p>
    </div>
  );
};

// Preview component combining both
const Preview = () => {
  return (
    <div>
      <WelcomeComponent />
      <DateComponent />
    </div>
  );
};

// Code string for display
const code = `// WelcomeComponent.tsx
const WelcomeComponent = () => {
  return (
    <div className="p-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-bold text-primary mb-2">
        Welcome to React Lab! 🎉
      </h2>
      <p className="text-muted-foreground">
        Start your journey to mastering React components.
      </p>
    </div>
  );
};

// DateComponent.tsx
const DateComponent = () => {
  // Get current date and format it nicely
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="p-6 bg-secondary rounded-lg border mt-4">
      <h3 className="text-lg font-semibold mb-2">Today's Date</h3>
      <p className="text-xl font-mono text-primary">{currentDate}</p>
    </div>
  );
};

// Main App component
export default function App() {
  return (
    <div>
      <WelcomeComponent />
      <DateComponent />
    </div>
  );
}`;

export default function Exercise1() {
  return (
    <ExerciseLayout
      exerciseNumber={1}
      title="Welcome & Date Component"
      description="Create two functional components: one that displays a welcome message and another that shows the current date."
      instructions={[
        "Create a WelcomeComponent that returns a welcome message",
        "Create a DateComponent that displays the current date",
        "Use JavaScript's Date object to get the current date",
        "Format the date nicely using toLocaleDateString",
        "Render both components in your main App component"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
