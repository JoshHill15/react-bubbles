import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "reactstrap";
import "../styles.scss"



const initialColor = {
  color: "",
  code: { hex: "" }
};

function MyVerticallyCenteredModal(props) {

  function onSave(e){
    props.submit(e)
    props.onHide()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Color
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={props.submit}>
          <label>
            Add Color!
            <input
              type="text"
              placeholder="color..."
              onChange={e => props.setValues({ ...props.values, color: e.target.value })}
              value={props.values.color}
            />
          </label>
          <label>
            Add Hex!
            <input
              type="text"
              placeholder="hex..."
              onChange={e =>
                props.setValues({
                  ...props.values,
                  code: { ...props.values.code, hex: e.target.value }
                })
              }
              value={props.values.code.hex}
            />
          </label>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick = {onSave} >Save Color</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



function AddColor(props) {
  const [values, setValues] = useState(initialColor);
  const [modalShow, setModalShow] = useState(false);

  // console.log(props.colors, "props colors add color")

  function submit(e) {
    e.preventDefault();
    axiosWithAuth()
      .post("/colors", values)
      .then(res => {
        console.log(res);
        props.updateColors([...props.colors, values]);
      })
      .catch(err => console.log("err", err))
      .finally(() => {
        setValues({
          ...values,
          color: "",
          code: {
            ...values.code,
            hex: ""
          }
        });
      });
  }

  return (
    <div>
      <ButtonToolbar>
        <Button className = "add" variant="primary" onClick={() => setModalShow(true)}>
          Add New Color!
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          submit={submit}
          values={values}
          setValues={setValues}
        />
      </ButtonToolbar>

      {/* <form onSubmit={submit}>
        <label>
          Add Color!
          <input
            type="text"
            placeholder="color..."
            onChange={e => setValues({ ...values, color: e.target.value })}
            value={values.color}
          />
        </label>
        <label>
          Add Hex!
          <input
            type="text"
            placeholder="hex..."
            onChange={e =>
              setValues({
                ...values,
                code: { ...values.code, hex: e.target.value }
              })
            }
            value={values.code.hex}
          />
        </label>
        <button type="submit">Add Color!</button>
      </form> */}
    </div>
  );
}

export default AddColor;
