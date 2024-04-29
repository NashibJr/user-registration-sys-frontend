import React, { PropsWithChildren } from "react";
import withPage from "./withPage";

const PageComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default withPage<PropsWithChildren>(PageComponent);
