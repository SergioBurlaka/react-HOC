import React, { FC, useState } from "react";

import { MyComponentProps } from "../shared/SharedTypes";

const withCounter = <P extends object>(
  WrappedComponent: React.ComponentType<P & MyComponentProps>
) => {
  const WithCounter: FC<P> = (props) => {
    const [counter, setCounter] = useState(0);

    return (
      <WrappedComponent
        {...props}
        counter={counter}
        handler={() => setCounter((prevCounter) => prevCounter + 1)}
      />
    );
  };

  return WithCounter;
};

export default withCounter;
