import React, { useEffect } from "react";
import * as api from "../controller/BooksController";
import Navbar from "../components/Navbar";
import Load from "../components/Load";
import Input from "../components/Input";
import BookList from "../components/BookList";

const Books = () => {
  const [books, setBooks] = React.useState([]);
  const [filteredBooks, setFilteredBooks] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const fetchData = async () => {
    const data = await api.getAll();

    setBooks(data);
  };

  const filterData = (filter) => {
    if (!books) {
      fetchData();
      return;
    }

    const filteredList = books.filter((item) => {
      console.log(item.title.toLowerCase().includes(filter.toLowerCase()));
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });

    setFilteredBooks(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") fetchData();
    else filterData(search);
  }, [search]);

  return (
    <>
      <Navbar />
      <br />
      <div className="container ">
        <Input
          type="text"
          id="search"
          placeholder="Type the book"
          value={search}
          setValue={setSearch}
        />
        <br />
        {!books && !filteredBooks && <Load />}

        {books && <BookList itens={search ? filteredBooks : books} />}
      </div>
    </>
  );
};

export default Books;
