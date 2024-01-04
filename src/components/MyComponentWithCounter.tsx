import React, { FC } from "react";

import withCounter from "../HOCs/withCounter";
import { MyComponentProps } from "../shared/SharedTypes";

const MyComponent: FC<MyComponentProps> = ({ counter, handler }) => {
  return (
    <div>
      <p>My Component</p>
      <button onClick={handler}>
        <p>Counter: {counter}</p>
      </button>
    </div>
  );
};

const MyComponentWithCounter = withCounter(MyComponent);

export default MyComponentWithCounter;
