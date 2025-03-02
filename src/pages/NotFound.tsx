
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import MainLayout from "@/layout/MainLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-2xl font-medium mb-4">Oops! Page not found</p>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Button size="lg" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
