import { sleep } from "./handlingSort";

export const selectionSort = async (elements, setElements, numberOfSeconds) => {
  let elementsDiv = document.getElementsByClassName("visual");
  let temp = elements;
  for (let i = 0; i < elements.length; i++) {
    let large = 0;
    elementsDiv[large].classList.add("visual-Focus");
    elementsDiv[elements.length - 1 - i].classList.add("visual-Focus");
    await sleep(numberOfSeconds);

    for (let j = 0; j < elements.length - i; j++) {
      elementsDiv[j].classList.add("pink");
      await sleep(numberOfSeconds);
      if (temp[large] < temp[j]) {
        elementsDiv[large].classList.remove("visual-Focus");
        elementsDiv[j].classList.add("visual-Focus");
        large = j;
        await sleep(numberOfSeconds);
      }
      elementsDiv[j].classList.remove("pink");
    }
    let tempData = temp[large];
    temp[large] = temp[elements.length - 1 - i];
    temp[elements.length - 1 - i] = tempData;
    elementsDiv[large].style.height = temp[large] + "px";
    elementsDiv[elements.length - 1 - i].style.height =
      temp[elements.length - 1 - i] + "px";
    await sleep(numberOfSeconds);
    elementsDiv[large].classList.remove("visual-Focus");
    elementsDiv[elements.length - 1 - i].classList.remove("visual-Focus");
  }
  setElements([...temp]);
};
