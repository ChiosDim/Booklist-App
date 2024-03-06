import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';


const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/book1.jpg"
    alt="Ms. Rachel and the Special Surprise: Encouraging Speech and Learning Through Play and Music"
  />
);
const Title = () => (
  <h2>
    Ms. Rachel and the Special Surprise: Encouraging Speech and Learning Through
    Play and Music
  </h2>
);
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
      Ms. Rachel{" "}
    </h4>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
