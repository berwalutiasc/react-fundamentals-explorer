import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check } from "lucide-react";

// Item interface for type safety
interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

const ItemsList = () => {
  // Array of items to display
  const items: Item[] = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99, inStock: true },
    { id: 2, name: "Coffee Maker", category: "Appliances", price: 49.99, inStock: true },
    { id: 3, name: "Running Shoes", category: "Sports", price: 89.99, inStock: false },
    { id: 4, name: "Desk Lamp", category: "Furniture", price: 34.99, inStock: true },
    { id: 5, name: "Backpack", category: "Accessories", price: 59.99, inStock: true },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-foreground">Product List</h2>
        <Badge variant="secondary" className="gap-2">
          <ShoppingCart className="h-4 w-4" />
          {items.length} items
        </Badge>
      </div>

      {/* Map through items array */}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              {item.inStock && (
                <Badge variant="outline" className="gap-1">
                  <Check className="h-3 w-3" />
                  In Stock
                </Badge>
              )}
            </div>
            
            <div className="flex justify-between items-end">
              <Badge variant="secondary">{item.category}</Badge>
              <span className="text-xl font-bold text-primary">
                ${item.price.toFixed(2)}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-4 bg-secondary rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">
          💡 <strong>Tip:</strong> Each item is rendered using the <code className="bg-muted px-2 py-1 rounded">.map()</code> function, which iterates over the array and creates a card for each item.
        </p>
      </div>
    </div>
  );
};

const Preview = () => <ItemsList />;

const code = `// ItemsList.tsx
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check } from "lucide-react";

// Define the Item type for TypeScript
interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

const ItemsList = () => {
  // Create an array of items
  const items: Item[] = [
    { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99, inStock: true },
    { id: 2, name: "Coffee Maker", category: "Appliances", price: 49.99, inStock: true },
    { id: 3, name: "Running Shoes", category: "Sports", price: 89.99, inStock: false },
    { id: 4, name: "Desk Lamp", category: "Furniture", price: 34.99, inStock: true },
    { id: 5, name: "Backpack", category: "Accessories", price: 59.99, inStock: true },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Product List</h2>
        <Badge variant="secondary">
          <ShoppingCart className="h-4 w-4 mr-2" />
          {items.length} items
        </Badge>
      </div>

      {/* Use .map() to render each item */}
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{item.name}</h3>
              {item.inStock && (
                <Badge variant="outline">
                  <Check className="h-3 w-3 mr-1" />
                  In Stock
                </Badge>
              )}
            </div>
            
            <div className="flex justify-between items-end">
              <Badge variant="secondary">{item.category}</Badge>
              <span className="text-xl font-bold text-primary">
                $\{item.price.toFixed(2)}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;`;

export default function Exercise5() {
  return (
    <ExerciseLayout
      exerciseNumber={5}
      title="List Mapping Component"
      description="Build a component to display a list of items using the .map() function."
      instructions={[
        "Create an array of items with properties like id, name, category, and price",
        "Define a TypeScript interface for the Item type",
        "Use the .map() function to iterate over the array",
        "Render a card for each item displaying its information",
        "Always use a unique 'key' prop when mapping (use the item id)",
        "Add conditional rendering for the stock status"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
