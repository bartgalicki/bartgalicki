// react
import React from "react";
// components
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <>
      <p>Components kitchen sink</p>

      <Button text="test" />
      <br />
      <br />
      <Button text="I am a link" isNavElem link={"https://www.google.pl"} />
    </>
  );
};

export default Home;
