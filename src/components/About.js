import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.numbers);
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repellat similique nihil illo quae molestias distinctio, doloremque libero maiores dolorum veniam voluptatem sequi illum voluptatibus enim! Suscipit voluptatem cum harum.</p>
    </div>
  );
};

export default About;
