import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils";

const SingleColor = ({ hex, weight, index, rgb }) => {
  const [colorMessageCopied, setColorMessageCopied] = useState(false);

  const colorValue = `#${hex}`;

  useEffect(() => {
    const copyMessageDisappear = setTimeout(() => {
      setColorMessageCopied(false);
    }, 3000);

    return () => {
      clearTimeout(copyMessageDisappear);
    };
  }, [colorMessageCopied]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: colorValue }}
      onClick={() => {
        setColorMessageCopied(true);
        navigator.clipboard.writeText(colorValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">Hex: #{hex}</p>
      <p className="color-value">rgb({rgb})</p>
      <p className="alert">{colorMessageCopied ? `Copy to Clipboard` : null}</p>
    </article>
  );
};

export default SingleColor;
