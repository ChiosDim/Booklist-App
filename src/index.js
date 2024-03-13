import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Ms. Rachel",
    title:
      "Ms. Rachel and the Special Surprise: Encouraging Speech and Learning Through Play and Music",
    img: "./images/book1.jpg",
    id: 1,
  },
  {
    author: "Kristin Hannah",
    title: "The Women: A Novel",
    img: "./images/book2.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};


const Book = (props) => {
  const { img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
