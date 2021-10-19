import React, {Component} from "react";
import "./ItemContainerList.css";
import {ItemCount} from "./ItemCount";

export {ItemListContainer}

class ItemListContainer extends Component {
    render(){
        const greeting= "Bienvenidos a nuestra tienda online!";

        return(
            <div>
              <b>  <p class="greeting">{greeting} </p> </b>
              <ItemCount />
            </div>
        );
    }
}

export default ItemListContainer;