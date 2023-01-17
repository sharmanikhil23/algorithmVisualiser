import React, { useState } from "react";
import { bubbleSort } from "./bubbleSort";

export const handling = (elements, setElements, e, numberOfSeconds) => {
  bubbleSort(elements, setElements, numberOfSeconds);
};
