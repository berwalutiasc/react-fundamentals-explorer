import { useState, useEffect, memo } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Info } from "lucide-react";

// Static header component - memoized to prevent re-renders
const StaticHeader = memo(() => {
  return (
    <Card className="p-4 bg-primary/10 border-primary/20 mb-4">
      <div className="flex items-center gap-2">
        <Info className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-foreground">React Fundamentals Explorer</h3>
      </div>
      <p className="text-xs text-muted-foreground mt-1">
        This header is memoized and won't re-render with time updates
      </p>
    </Card>
  );
});

StaticHeader.displayName = "StaticHeader";

// Static sidebar component - memoized
const StaticSidebar = memo(() => {
  return (
    <Card className="p-4 bg-secondary h-full">
      <h4 className="font-semibold text-foreground mb-3">Navigation</h4>
      <ul className="space-y-2 text-sm">
        <li className="text-muted-foreground hover:text-foreground cursor-pointer">Home</li>
        <li className="text-muted-foreground hover:text-foreground cursor-pointer">About</li>
        <li className="text-muted-foreground hover:text-foreground cursor-pointer">Contact</li>
        <li className="text-muted-foreground hover:text-foreground cursor-pointer">Settings</li>
      </ul>
      <div className="mt-6 p-3 bg-muted rounded-lg">
        <p className="text-xs text-muted-foreground">
          ✓ This sidebar is memoized and static
        </p>
      </div>
    </Card>
  );
});

StaticSidebar.displayName = "StaticSidebar";

// Live time display component
const LiveTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="p-6 bg-card">
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Live Time Updates</h3>
        </div>

        <div className="space-y-3">
          <div className="p-4 bg-secondary rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground uppercase">Current Time</span>
            </div>
            <p className="text-3xl font-bold font-mono text-foreground">{timeString}</p>
          </div>

          <div className="p-4 bg-secondary rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground uppercase">Date</span>
            </div>
            <p className="text-lg font-semibold text-foreground">{dateString}</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            This component updates every second, but the static parts won't re-render
          </p>
        </div>
      </div>
    </Card>
  );
};

// Main component
const LiveTimeApp = () => {
  return (
    <div className="space-y-6">
      <StaticHeader />
      
      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <StaticSidebar />
        </div>
        
        <div className="md:col-span-3">
          <LiveTimeDisplay />
        </div>
      </div>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Optimization:</strong> The header and sidebar are wrapped with React.memo(), 
          so they don't re-render when the live time updates every second. Only the 
          LiveTimeDisplay component re-renders, which improves performance significantly!
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <LiveTimeApp />;

const code = `import { useState, useEffect, memo } from "react";

// Static header - memoized to prevent re-renders
const StaticHeader = memo(() => {
  return (
    <header>
      <h1>React Fundamentals Explorer</h1>
      <p>This header is memoized</p>
    </header>
  );
});

StaticHeader.displayName = "StaticHeader";

// Static sidebar - memoized
const StaticSidebar = memo(() => {
  return (
    <aside>
      <h3>Navigation</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </aside>
  );
});

StaticSidebar.displayName = "StaticSidebar";

// Live time display - updates every second
const LiveTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
      <p>{currentTime.toLocaleDateString()}</p>
    </div>
  );
};

// Main app component
const App = () => {
  return (
    <div>
      <StaticHeader />
      <div>
        <StaticSidebar />
        <LiveTimeDisplay />
      </div>
    </div>
  );
};

export default App;`;

export default function Exercise25() {
  return (
    <ExerciseLayout
      exerciseNumber={25}
      title="Live Time with Memoized Static Parts"
      description="Implement a component that shows live time updates but prevents unnecessary re-renders of static UI parts."
      instructions={[
        "Create a component that displays the current time and updates every second",
        "Create static UI components (header, sidebar, etc.)",
        "Wrap static components with React.memo() to prevent re-renders",
        "Ensure only the time display component re-renders every second",
        "Verify that static parts remain unchanged during time updates",
        "Demonstrate the performance benefit of memoization"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

