import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to some service or analytics platform
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const error = this.state.error as Error; // Safe cast after checking hasError
      return (
        <div>
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          {/* Optionally, display additional error information or a retry button */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
