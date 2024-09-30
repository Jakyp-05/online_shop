import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  } else {
    return <div>Unknown error occurred</div>;
  }
};

export default ErrorBoundary;
