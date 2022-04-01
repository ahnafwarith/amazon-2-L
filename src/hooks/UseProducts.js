import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, handleProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => handleProducts(data))
    }, []);
    return [products, handleProducts];
}

export default useProducts