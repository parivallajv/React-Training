import { useEffect, useState } from "react"

export const Book=()=>{


    const[values,setValue]=useState({
        bookName:"",
        authorName:"",
        price:"",
        qty:""
    })

    setValue((book,author,price,qty)=>{
        values.bookName={book};
        values.authorName={author};
        values.price={price};
        values.qty={qty}

    })

    useEffect((values)=>{
        <div>
            <p>{values.bookName}</p>
            <p>{values.authorName}</p>
            <p>{values.price}</p>
            <p>{values.qty}</p>
        </div>
    },[values])


    return(
        <div>
            <form onSubmit={setValue} book={values.bookName} author={values.authorName} price={values.price}  qty={values.qty}>
                <input type="text" name="bookName" placeholder="Enter name of book" value={values.bookName}/>
                <input type="text" name="authorName" placeholder="Enter name of Author" value={values.authorName}/>
                <input type="text" name="price" placeholder="Enter Price" value={values.price}/>
                <input type="text" name="qty" placeholder="Enter Quantity" value={values.qty}/>
                <input type="submit" placeholder="Enter name of book"/>
            </form>
            <div>
                <p>{values.bookName}</p>
                <p>{values.authorName}</p>
                <p>{values.price}</p>
                <p>{values.qty}</p>
            </div>
        </div>
    )
};

export default Book;
