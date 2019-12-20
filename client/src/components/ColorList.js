import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddColor from "./AddColor";

const initialColor = {
  color: "",
  code: { hex: "" }
};



const ColorList = props => {
  const { colors, updateColors } = props;
  console.log("colors list", colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  console.log("colors list props", props);
  useEffect(() => {
    if (props.colors) {
      const itemToEdit = props.colors.find(e => e.id === props.match.params.id);

      if (itemToEdit) {
        setColorToEdit(itemToEdit);
      }
    }
  }, [props.colors]);
  console.log(colorToEdit, "color to edit");

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    // console.log("save color id", colors.id)
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log("edit", res);
        setEditing(false);
        updateColors([...colors, colorToEdit]);
      })
      .catch(err => console.log("fat put err", err));
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    // console.log("delete color id", color.id)
    axiosWithAuth()
      .delete(`/colors/${color.id}`)
      .then(res => {
        console.log("delete", res);
      })
      .catch(err => console.log("fat delete err", err));
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <AddColor colors = {colors} updateColors = {updateColors}/>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
