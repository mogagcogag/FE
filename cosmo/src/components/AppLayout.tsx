import { FC } from "react";

const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {children}
    </div>
  );
};

export default AppLayout;
