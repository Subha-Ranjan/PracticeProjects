import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function New() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [count, setCount] = useState(0);
  const [submit, setSubmit] = useState(false);

  const data = [
    { qstn: "Name? :", ans: "subha" },
    { qstn: "Sports? :", ans: "chess" },
    { qstn: "Pet? :", ans: "cat" },
  ];

  return (
    <div>
      <Button onClick={handleOpen}>Start Quiz!!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                  handleClose();
                  setSubmit(true);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      {submit && (
        <h2>
          {" "}
          You Scored: {count} &&{" "}
          <button
            onClick={() => {
              setCount(0);
              window.location.reload(true);
            }}
          >
            Reset
          </button>
        </h2>
      )}
    </div>
  );
}

export default New;
