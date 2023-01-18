import { sleep } from "./handlingSort";

export const bubbleSort = async (elements, setElements, numberOfSeconds) => {
  let elementsDiv = document.getElementsByClassName("visual");
  let temp = elements;
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length - i; j++) {
      if (temp[j] > temp[j + 1]) {
        let tempData = temp[j];
        temp[j] = temp[j + 1];
        temp[j + 1] = tempData;
        elementsDiv[j].style.height = temp[j] + "px";
        elementsDiv[j].classList.add("visual-Focus");
        elementsDiv[j + 1].style.height = temp[j + 1] + "px";
        elementsDiv[j + 1].classList.add("visual-Focus");
        await sleep(numberOfSeconds);
        elementsDiv[j].classList.remove("visual-Focus");
        elementsDiv[j + 1].classList.remove("visual-Focus");
      }
    }
    await sleep(numberOfSeconds);
  }
  setElements([...temp]);
};
