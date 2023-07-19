import { useState } from "react";
// import Div from "./TextBoxStyle";

// import Input from "./TextBoxStyle";
import { object } from "./textBoxObject";

import { Div, Input } from "./TextBoxStyle";

const TextBoxProg = () => {
  const [value, setValue] = useState("");

  const [out, setOut] = useState("");

  return (
    <div className="TextBox">
      <Div>
        {object.map((data) => {
          return (
            <button onClick={() => setValue(value + data.msg)}>
              {data.msg}
            </button>
          );
        })}
      </Div>
      <Div>
        <Input type="text" value={value} />
        <Div>
          <button onClick={() => setOut(value)}>submit</button>
          <button
            onClick={() => {
              setValue("");
              setOut("");
            }}
          >
            clear
          </button>
          <p>Output: {out}</p>
        </Div>
      </Div>
    </div>
  );
};

export default TextBoxProg;
