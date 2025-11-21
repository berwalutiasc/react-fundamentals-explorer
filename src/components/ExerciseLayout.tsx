import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Eye, BookOpen } from "lucide-react";

interface ExerciseLayoutProps {
  exerciseNumber: number;
  title: string;
  description: string;
  instructions: string[];
  code: string;
  preview: React.ReactNode;
}

export default function ExerciseLayout({
  exerciseNumber,
  title,
  description,
  instructions,
  code,
  preview,
}: ExerciseLayoutProps) {
  const [activeTab, setActiveTab] = useState<"description" | "code" | "preview">("preview");

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-mono rounded-full">
            Exercise #{exerciseNumber}
          </span>
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as any)} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="description" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Instructions</span>
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span className="hidden sm:inline">Code</span>
          </TabsTrigger>
          <TabsTrigger value="preview" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span className="hidden sm:inline">Output</span>
          </TabsTrigger>
        </TabsList>

        {/* Instructions Tab */}
        <TabsContent value="description" className="mt-0">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">What you'll build:</h2>
            <ul className="space-y-3">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex gap-3 text-foreground">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{instruction}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>

        {/* Code Tab */}
        <TabsContent value="code" className="mt-0">
          <Card className="p-0 overflow-hidden">
            <div className="bg-code-bg border-b border-code-border px-4 py-2 flex items-center justify-between">
              <span className="text-sm font-mono text-muted-foreground">TypeScript • React</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  navigator.clipboard.writeText(code);
                }}
                className="text-xs"
              >
                Copy
              </Button>
            </div>
            <pre className="p-6 overflow-x-auto bg-code-bg">
              <code className="text-sm font-mono text-foreground">{code}</code>
            </pre>
          </Card>
        </TabsContent>

        {/* Preview Tab */}
        <TabsContent value="preview" className="mt-0">
          <Card className="p-8 min-h-[500px] bg-card">
            <div className="max-w-4xl mx-auto">{preview}</div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Navigation */}
      <div className="mt-6 flex justify-between items-center">
        <Button
          variant="outline"
          disabled={exerciseNumber === 1}
          onClick={() => window.location.href = `/exercise/${exerciseNumber - 1}`}
        >
          Previous Exercise
        </Button>
        <Button
          variant="outline"
          disabled={exerciseNumber === 30}
          onClick={() => window.location.href = `/exercise/${exerciseNumber + 1}`}
        >
          Next Exercise
        </Button>
      </div>
    </div>
  );
}
