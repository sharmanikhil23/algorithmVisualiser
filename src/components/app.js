import React, { useEffect, useState } from "react";
import { Head } from "./heading";
import { Form } from "./form";
import { Visuals } from "./visualiser";
import { Footer } from "./footer";
import { handling } from "./sorting/handlingSort";

//importing Css
import "./css/index.css";

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const App = () => {
  const [elements, setElements] = useState([]);
  const [numberOfElements, setNumberOfElements] = useState(5);
  const [numberOfSeconds, setNumberOfSeconds] = useState(5);

  const handlingSubmit = (e) => {
    e.preventDefault();
    handling(elements, setElements, e, numberOfSeconds);
  };

  useEffect(() => {
    let result = [];

    for (let i = 0; i < numberOfElements; i++) {
      let num = randomNumber(5, 200);
      result.push(num);
    }
    setElements(result);
  }, [numberOfElements]);

  return (
    <div id="main-play-area">
      <section id="heading-area">
        <Head></Head>
      </section>
      <section id="form-area">
        <Form
          numberOfElements={numberOfElements}
          setNumberOfElements={setNumberOfElements}
          handlingSubmit={handlingSubmit}
          numberOfSeconds={numberOfSeconds}
          setNumberOfSeconds={setNumberOfSeconds}
        ></Form>
      </section>
      {
        <section id="visualAreaStarting">
          <div id="visualArea">
            <Visuals elements={elements}></Visuals>
          </div>
        </section>
      }
      <section id="footer-area">
        <Footer></Footer>
      </section>
    </div>
  );
};
