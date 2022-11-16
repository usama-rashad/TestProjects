import React, { useEffect, useState } from "react";

function Parent() {
  useEffect(() => {}, []);

  return <div>{children}</div>;
}

export default Parent;
