import React from "react";
import BookItem from "./BookItem";

const BookList = ({ itens }) => {
  return (
    <div className="row d-flex justify-content-center ">
      {itens.map((item) => {
        return <BookItem key={item.title} book={item} />;
      })}
    </div>
  );
};

export default BookList;
