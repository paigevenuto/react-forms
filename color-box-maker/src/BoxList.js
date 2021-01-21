import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import _ from "lodash";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const delBox = (evt) => {
    console.log(evt);
    const boxesClone = boxes.filter(
      (b) => b.id !== evt.target.parentElement.id
    );
    setBoxes(boxesClone);
  };

  const addBox = (formData) => {
    let { backgroundColor, width, height } = formData;
    width = width + "px";
    height = height + "px";
    const id = uuid();
    const boxesClone = _.cloneDeep(boxes);
    boxesClone.push({ backgroundColor, width, height, id });
    setBoxes(boxesClone);
  };

  return (
    <div className="BoxList" data-testid="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxes.map((b) => (
        <Box
          backgroundColor={b.backgroundColor}
          width={b.width}
          height={b.height}
          delBox={delBox}
          id={b.id}
          key={b.id}
        />
      ))}
    </div>
  );
}

export default BoxList;
