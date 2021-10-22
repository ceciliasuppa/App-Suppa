import {useState } from "react";
import { Counter } from "../utilities/ItemCount";
export {Item}




const Item = ({item}) => {

  
    const [counter, setCounter] = useState[1];
    const onAdd = ()=> {
        if(counter > 15){
            alert("No hay más stock")
        } else {
            setCounter(counter + 1)
        }
    }
    const onDis = () =>{
        if(counter < 1){
            alert("Agregue un producto")
        } else {
            setCounter(counter - 1)
        }
    }


    return (
        <div className="container">
            <h3>{item.name}</h3>
            <img alt="" src={item.imagen} />
            <span>${item.price}</span>
            <Counter  onAdd={onAdd} onDis={onDis} initial={counter} />
            <button id="add"><strong>Agregar al carrito</strong></button>
        </div>
    );
}

export default Item;

