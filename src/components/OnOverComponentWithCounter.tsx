import React, { FC } from "react";

import withCounter from "../HOCs/withCounter";

import { MyComponentProps } from "../shared/SharedTypes";

const OnOverComponent: FC<MyComponentProps> = ({ counter, handler }) => {
  return (
    <div
      style={{
        cursor: "pointer",
        backgroundColor: "#f9f9f9",
        padding: "1em",
      }}
      onMouseOver={handler}
    >
      <p>On Over withCounter</p>
      <div>Over {counter} times</div>
    </div>
  );
};

const OnOverComponentWithCounter = withCounter(OnOverComponent);

export default OnOverComponentWithCounter;
