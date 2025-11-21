import ExerciseLayout from "@/components/ExerciseLayout";

// Child component that displays a single hobby
const HobbyItem = ({ hobby }: { hobby: string }) => {
  return (
    <li className="p-3 bg-secondary rounded-lg border border-border hover:bg-muted transition-colors">
      <span className="text-foreground">🎯 {hobby}</span>
    </li>
  );
};

// Parent component with list of hobbies
const HobbiesList = () => {
  // Array of hobbies
  const hobbies = [
    "Reading Books",
    "Playing Guitar",
    "Hiking",
    "Photography",
    "Cooking"
  ];

  return (
    <div className="p-6 bg-card rounded-lg border border-border">
      <h2 className="text-2xl font-bold text-primary mb-4">My Hobbies</h2>
      <ul className="space-y-2">
        {/* Map through hobbies and render HobbyItem for each */}
        {hobbies.map((hobby, index) => (
          <HobbyItem key={index} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
};

const Preview = () => <HobbiesList />;

const code = `// HobbyItem.tsx - Child Component
const HobbyItem = ({ hobby }: { hobby: string }) => {
  return (
    <li className="p-3 bg-secondary rounded-lg border">
      <span>🎯 {hobby}</span>
    </li>
  );
};

// HobbiesList.tsx - Parent Component
const HobbiesList = () => {
  // Array of hobbies data
  const hobbies = [
    "Reading Books",
    "Playing Guitar",
    "Hiking",
    "Photography",
    "Cooking"
  ];

  return (
    <div className="p-6 bg-card rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">My Hobbies</h2>
      <ul className="space-y-2">
        {/* Map through hobbies array and pass each to child */}
        {hobbies.map((hobby, index) => (
          <HobbyItem key={index} hobby={hobby} />
        ))}
      </ul>
    </div>
  );
};

export default HobbiesList;`;

export default function Exercise2() {
  return (
    <ExerciseLayout
      exerciseNumber={2}
      title="Parent-Child Hobbies List"
      description="Build a parent component with a list of hobbies and a child component that displays each hobby."
      instructions={[
        "Create a parent component called HobbiesList",
        "Define an array of hobbies in the parent component",
        "Create a child component called HobbyItem that accepts a hobby as a prop",
        "Use .map() to render a HobbyItem for each hobby",
        "Pass each hobby from parent to child component"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
