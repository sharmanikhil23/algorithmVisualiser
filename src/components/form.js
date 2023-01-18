import React from "react";

export const Form = ({
  numberOfElements,
  setNumberOfElements,
  handlingSubmit,
  numberOfSeconds,
  setNumberOfSeconds,
  choice,
  setChoice,
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
          <label htmlFor="alg-to-use">Sorting Algorithm you want to use</label>
          <select
            id="alg-to-use"
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
          >
            <option value="1">Bubble Sort</option>
            <option value="2">Selection Sort</option>
            <option value="3">Cyclic Sort</option>
            <option value="4">Insertion Sort</option>
          </select>
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
