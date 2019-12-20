import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"


const initialColor = {
    color: "",
    code: { hex: "" }
  };

function AddColor(props) {
    const [values, setValues] = useState(initialColor);
    console.log(props.colors, "props colors add color")

    function submit(e){
        e.preventDefault()
        axiosWithAuth().post("/colors", values)
        .then(res => {
            console.log(res)
            props.updateColors([...props.colors, values])
        })
        .catch(err => console.log)
        .finally(() => {
            setValues({
                ...values,
                color: "",
                code: {
                    ...values.code,
                    hex: ""
                }
            })
        })
    }

  return (
    <div>
      <form onSubmit = {submit}>
        <label>
          Add Color!
          <input
            type="text"
            placeholder="color..."
            onChange={e =>
                setValues({ ...values, color: e.target.value })
              }
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
        <button type = "submit">Add Color!</button>
      </form>
    </div>
  );
}

export default AddColor;
