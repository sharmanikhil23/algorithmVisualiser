import React, { useState } from "react";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";

export const handling = (elements, setElements, e, numberOfSeconds, choice) => {
  if (choice === 1) {
    bubbleSort(elements, setElements, numberOfSeconds);
  } else {
    selectionSort(elements, setElements, numberOfSeconds);
  }
};

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms * 100));
}
