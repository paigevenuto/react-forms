import React from "react";

function Box({ backgroundColor, width, height, delBox, id }) {
  const boxStyle = {
    backgroundColor,
    width,
    height,
  };
  return (
    <div style={boxStyle} className="Box" id={id} data-testid="Box">
      <button onClick={delBox}>X</button>
    </div>
  );
}

export default Box;
