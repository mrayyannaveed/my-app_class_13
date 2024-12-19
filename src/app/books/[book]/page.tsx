import React from 'react'

type BookParams = {
  params: {
    book: string; // Use `string` to properly type the dynamic route parameter
  };
};
const Book = async ({params}: BookParams) => {
    const url = await fetch(`https://simple-books-api.glitch.me/books/${params.book}`);
    const response = await url.json();
    console.log(response);
    // console.log(params)
  return (
    <div>
        <h1 className='text-xl'>Book Details</h1>
        <p><b>id:</b> {response.id}</p> 
        <p><b>Name:</b> {response.name}</p>
        <p><b>Author:</b> {response.author}</p>
        <p><b>Type:</b> {response.type}</p>
        <p><b>Price:</b> {response.price}</p>
    </div>
  )
}

export default Book