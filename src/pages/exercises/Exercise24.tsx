import { useState, memo, useCallback, useRef } from "react";
import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Circle, Trash2, Plus, List } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Memoized todo item component
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = memo(({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg border border-border hover:border-primary transition-colors">
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-shrink-0 text-primary hover:text-primary/80"
      >
        {todo.completed ? (
          <CheckCircle2 className="h-5 w-5" />
        ) : (
          <Circle className="h-5 w-5" />
        )}
      </button>
      
      <span
        className={`flex-1 text-foreground ${
          todo.completed ? "line-through text-muted-foreground" : ""
        }`}
      >
        {todo.text}
      </span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="flex-shrink-0 text-destructive hover:text-destructive/80"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
});

TodoItem.displayName = "TodoItem";

// Memoized todo list component
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = memo(({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-muted-foreground py-8">
          No todos yet. Add one above!
        </p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
});

TodoList.displayName = "TodoList";

// Main todo app component
const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn React.memo", completed: false },
    { id: 2, text: "Practice performance optimization", completed: false },
    { id: 3, text: "Build a todo app", completed: true },
  ]);
  const [inputValue, setInputValue] = useState("");
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;
  const renderCount = renderCountRef.current;

  // Memoized callbacks to prevent re-renders
  const handleToggle = useCallback((id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const handleDelete = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTodos(prev => [
        ...prev,
        { id: Date.now(), text: inputValue.trim(), completed: false }
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <List className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-foreground">Todo List (Memoized)</h3>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdd()}
              placeholder="Add a new todo..."
              className="flex-1"
            />
            <Button onClick={handleAdd} size="default">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs text-muted-foreground">
              Parent component rendered: <span className="font-mono text-primary">{renderCount}</span> times
            </p>
            <p className="text-xs text-success mt-1">
              ✓ The TodoList component is memoized - it won't re-render when the input changes, only when todos change
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </Card>

      <Card className="p-4 bg-primary/10">
        <p className="text-sm text-foreground">
          <strong>Optimization:</strong> The TodoList component is memoized with React.memo(). 
          When you type in the input field, the list component doesn't re-render unnecessarily. 
          It only re-renders when the todos array changes. The callbacks are also memoized 
          with useCallback() to ensure referential equality.
        </p>
      </Card>
    </div>
  );
};

const Preview = () => <TodoApp />;

const code = `import { useState, memo, useCallback } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Memoized todo item
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = memo(({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
});

TodoItem.displayName = "TodoItem";

// Memoized todo list - won't re-render when input changes
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = memo(({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
});

TodoList.displayName = "TodoList";

// Main component
const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([...]);
  const [inputValue, setInputValue] = useState("");

  // Memoize callbacks to prevent re-renders
  const handleToggle = useCallback((id: number) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const handleDelete = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      }]);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      
      {/* This won't re-render when inputValue changes */}
      <TodoList
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TodoApp;`;

export default function Exercise24() {
  return (
    <ExerciseLayout
      exerciseNumber={24}
      title="Todo List with Memoized List"
      description="Build a todo list app where the list component is memoized to prevent re-renders when the input changes."
      instructions={[
        "Create a todo list application with add, toggle, and delete functionality",
        "Create a TodoList component that displays all todos",
        "Wrap the TodoList component with React.memo()",
        "Add an input field for new todos that changes independently",
        "Use useCallback() to memoize event handlers",
        "Verify that typing in the input doesn't cause the list to re-render",
        "Ensure the list only re-renders when todos are added, toggled, or deleted"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}

