import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { Route } from "react-router-dom";
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    axiosWithAuth()
      .get(`/colors`)
      .then(res => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => console.log("fat err", err));
  }, []);

  return (
    <>
      <Route
        path="/bubbles-page"
        render={props => (
          <ColorList
            {...props}
            colors={colorList}
            updateColors={setColorList}
          />
        )}
      />
      <Route
        path="/bubbles-page"
        render={props => <Bubbles {...props} colors={colorList} />}
      />
    </>
  );
};

export default BubblePage;
