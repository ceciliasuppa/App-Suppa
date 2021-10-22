import React, {Component} from "react";
import "../styles/ItemContainerList.css";
import {Item} from "./Item.js";

export {ItemListContainer}

class ItemListContainer extends Component {
    render(){
        const greeting= "Bienvenidos a nuestra tienda online!";

        return(
            <div>
              <b>  <p class="greeting">{greeting} </p> </b>
              <Item />
            </div>
        );
    }
}

export default ItemListContainer;