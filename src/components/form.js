import React from "react";

export const Form = ({
  numberOfElements,
  setNumberOfElements,
  handlingSubmit,
  numberOfSeconds,
  setNumberOfSeconds,
}) => {
  return (
    <section id="form">
      <form>
        <div>
          <label htmlFor="number-of-elements">
            Choose number of elements between 5 to 200
          </label>
          <input
            type="range"
            min="5"
            max="200"
            name="number"
            id="number-of-elements"
            value={numberOfElements}
            onChange={(e) => setNumberOfElements(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="number-of-seconds">
            Choose number of seconds between 0.1 to 1
          </label>
          <input
            type="range"
            min="1"
            max="10"
            name="second"
            id="number-of-seconds"
            value={numberOfSeconds}
            onChange={(e) => {
              setNumberOfSeconds(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Sorting Algorithm you want to use</label>
          <input
            type="text"
            name="alg-to-use"
            id="alg-to-use"
            list="alg"
            placeholder="Choose"
          />
          <datalist id="alg">
            <option value="bubble-sort" label="Bubble Sort" />
            <option value="selection-sort" label="Selection Sort" />
          </datalist>
        </div>
        <div>
          <button type="submit" onClick={(e) => handlingSubmit(e)}>
            Start
          </button>
        </div>
      </form>
    </section>
  );
};
