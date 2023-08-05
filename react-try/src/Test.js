import React, { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const data = [
    { qstn: "name?", ans: "subha" },
    { qstn: "sports?", ans: "chess" },
    { qstn: "pet?", ans: "cat" },
  ];
  return (
    <div>
      <div className="wrapper">
        {data.map((n) => (
          <div className="qstn" key={n.qstn}>
            <label>{n.qstn}</label>
            <input
              type="text"
              onChange={(e) => {
                if (n.ans == e.target.value) {
                  setCount(count + 1);
                }
              }}
            />
          </div>
        ))}
        <div className="submit">
          <button
            onClick={() => {
              console.log(count);
            }}
          >
            Submit
          </button>
          <button
            onClick={() => {
              setCount(0);
              window.location.reload(true);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
