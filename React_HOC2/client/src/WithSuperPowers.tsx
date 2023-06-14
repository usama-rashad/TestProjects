import React from "react";

interface IProps {}

function WithSuperPowers<IProps>(Component: React.FC) {
  function RevisedComponent() {
    return Component;
  }
  return <RevisedComponent />;
}

export default WithSuperPowers;
