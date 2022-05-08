import { useEffect, useState } from "react"

const useInventory = ()=>{
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://desolate-peak-42134.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return[books, setBooks]
}
export default useInventory;