import { useEffect, useState } from "react"

const useMyBooks = ()=>{
    const [myBooks, setMyBooks] = useState([]);
    useEffect(()=>{
        fetch("https://desolate-peak-42134.herokuapp.com/myBooks")
        .then(res=>res.json())
        .then(data=> setMyBooks(data));
    },[])
    return [myBooks, setMyBooks];
}
export default useMyBooks;