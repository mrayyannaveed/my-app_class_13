import Link from 'next/link'
import React from 'react'

const Books = async () => {
    const url = await fetch(`https://simple-books-api.glitch.me/books`);
    const response = await url.json();
    // console.log(response);
  return (
    <div>
        <h1 className='text-2xl pt-1 pb-2'>Books List</h1>
        <ol>
            {response.map((book:any, i: number) => {
                return (
                    <li><Link href={`/books/${book.id}`}>{i + 1}- {book.name}</Link></li>
                )
            })}
        </ol>
    </div>
  )
}

export default Books



{/* <li><Link href={"/books/book"}>book</Link></li> */}