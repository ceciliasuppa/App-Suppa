import Item from "./Item"
import { products } from "./Products"

export const ItemList = () => {
    const [listProducts, setListProducts] = useState([])
    useEffect(()=>{
        new Promise(() => { }).then(() => {
            setListProducts(products);
        })
    })

    return( 
        <>
            <div className="itemList">
                {listProducts && listProducts.map(products =>{
                    return(
                        <Item key={products.title} item={products}/>
                    )
                 })
                }
            </div>
        </>
    );
}

