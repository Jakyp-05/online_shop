import React, { lazy, Suspense } from "react";

type IProps = {
  factory: () => Promise<{ default: React.ComponentType<any> }>;
};

const Loadle: React.FC<IProps> = ({ factory }) => {
  const Component = lazy(factory);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component />
    </Suspense>
  );
};

export default Loadle;
