import React, { useEffect, useState } from "react";
import { CCard } from "../../components/CCard/CCard";

export const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		console.log("UseEffect");

		fetch("http://localhost:4000/books")
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setBooks(res.data);
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);

	return (
		<>
			{books.map((book, index) => (
				<CCard key={book.id} name={book.title} description={book.description} />
			))}
		</>
	);
};
