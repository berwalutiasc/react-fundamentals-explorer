import ExerciseLayout from "@/components/ExerciseLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

const Preview = () => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 }
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4 text-foreground">Product List</h3>
        <div className="grid gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">ID: {product.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-primary">${product.price}</span>
                <Button size="sm" variant="outline">
                  View Details →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-secondary">
        <h3 className="font-semibold mb-2 text-foreground">Route Example</h3>
        <p className="text-sm text-muted-foreground mb-4">
          When clicking "View Details", the URL would change to include the product ID:
        </p>
        <div className="space-y-2 font-mono text-sm">
          <div className="p-2 bg-code-bg rounded border border-code-border">
            /product/1 → Shows Laptop details
          </div>
          <div className="p-2 bg-code-bg rounded border border-code-border">
            /product/2 → Shows Mouse details
          </div>
          <div className="p-2 bg-code-bg rounded border border-code-border">
            /product/3 → Shows Keyboard details
          </div>
        </div>
      </Card>
    </div>
  );
};

const code = `// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* Dynamic route with :id parameter */}
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

// ProductList.tsx
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 29 },
    { id: 3, name: "Keyboard", price: 79 }
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>$\{product.price}</p>
          {/* Link to dynamic route */}
          <Link to={\`/product/\${product.id}\`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

// ProductDetails.tsx
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // Extract the id parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Showing details for product ID: {id}</p>
    </div>
  );
};`;

export default function Exercise17() {
  return (
    <ExerciseLayout
      exerciseNumber={17}
      title="Dynamic Product Route"
      description="Create a route for a product details page that accepts a product ID as a URL parameter."
      instructions={[
        "Create a dynamic route using :id syntax in the path",
        "Use Link component to navigate with product IDs",
        "Import useParams hook from react-router-dom",
        "Extract the id parameter using const { id } = useParams()",
        "Display the product ID in the ProductDetails component",
        "Use template literals to create dynamic links"
      ]}
      code={code}
      preview={<Preview />}
    />
  );
}
