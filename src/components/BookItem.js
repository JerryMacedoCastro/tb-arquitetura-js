import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="card col-sm-5 me-1 mb-2 p-1">
      <div className="card-body">{book.title}</div>
      <img
        src={book.imageLinks.smallThumbnail}
        alt={book.title}
        className="w-25 ms-3"
      />
    </div>
  );
};

export default BookItem;
