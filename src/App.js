import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState(``);
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values(`#1f34de`).all(10));

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="#1f6123"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className={`${error ? `error` : null}`}
          />
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color.rgb);
          return (
            <SingleColor
              key={index}
              hex={color.hex}
              rgb={color.rgb.toString()}
              weight={color.weight}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
