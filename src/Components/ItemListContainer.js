import React, {Component} from "react";
import "./ItemContainerList.css";
// import "bootstrap/dist/css/bootstrap.css";

export {ItemListContainer}

class ItemListContainer extends Component {
    render(){
        const greeting= "Bienvenidos a nuestra tienda online!";

        return(
            <div>
              <b>  <p class="greeting">{greeting} </p> </b>
            </div>
        );
    }
}

export default ItemListContainer;