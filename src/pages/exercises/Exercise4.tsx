import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, User, Calendar } from "lucide-react";

// Profile Card Component with props
const ProfileCard = ({ 
  name, 
  age, 
  email 
}: { 
  name: string; 
  age: number; 
  email: string;
}) => {
  // Get initials from name for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="p-6 max-w-md">
      <div className="flex items-start gap-4">
        {/* Avatar with initials */}
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-primary text-primary-foreground text-lg">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        {/* Profile Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-3">{name}</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{age} years old</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Preview = () => {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <ProfileCard 
          name="Sarah Johnson" 
          age={28} 
          email="sarah.j@example.com" 
        />
        <ProfileCard 
          name="Michael Chen" 
          age={35} 
          email="m.chen@example.com" 
        />
      </div>

      <div className="p-6 bg-secondary rounded-lg border border-border">
        <h3 className="text-lg font-semibold mb-2 text-foreground">Component Breakdown</h3>
        <p className="text-muted-foreground">
          The ProfileCard accepts three props: <code className="bg-muted px-2 py-1 rounded">name</code>,{" "}
          <code className="bg-muted px-2 py-1 rounded">age</code>, and{" "}
          <code className="bg-muted px-2 py-1 rounded">email</code>. It automatically generates initials for the avatar and displays all information in a clean card layout.
        </p>
      </div>
    </div>
  );
};

const code = `// ProfileCard.tsx
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Calendar } from "lucide-react";

const ProfileCard = ({ 
  name, 
  age, 
  email 
}: { 
  name: string; 
  age: number; 
  email: string;
}) => {
  // Helper function to get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <Card className="p-6 max-w-md">
      <div className="flex items-start gap-4">
        {/* Avatar with user initials */}
        <Avatar className="h-16 w-16">
          <AvatarFallback className="bg-primary text-primary-foreground">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        {/* Profile information */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">{name}</h3>
          
          <div className="space-y-2">
            {/* Age display */}
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>{age} years old</span>
            </div>
            
            {/* Email display */}
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// Usage
export default function App() {
  return (
    <div>
      <ProfileCard 
        name="Sarah Johnson" 
        age={28} 
        email="sarah.j@example.com" 
      />
    </div>
  );
}`;

export default function Exercise4() {
  return (
    <ExerciseLayout
      exerciseNumber={4}
      title="Profile Card Component"
      description="Design a profile card component that accepts name, age, and email as props."
      instructions={[
        "Create a ProfileCard component that accepts three props",
        "Type the props with TypeScript (name: string, age: number, email: string)",
        "Display the name prominently as a heading",
        "Show age and email with appropriate icons",
        "Add an avatar with user initials",
        "Style the card to be visually appealing"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
