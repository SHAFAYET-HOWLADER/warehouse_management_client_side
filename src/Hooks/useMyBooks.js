import { useEffect, useState } from "react"

const useMyBooks = ()=>{
    const [myBooks, setMyBooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/myBooks")
        .then(res=>res.json())
        .then(data=> setMyBooks(data));
    },[])
    return [myBooks, setMyBooks];
}
export default useMyBooks;