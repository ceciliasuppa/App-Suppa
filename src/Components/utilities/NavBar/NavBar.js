
import React, {Component} from "react";
import { MenuItems } from "./MenuItems"
import {Button} from "../Button"
import "../../styles/NavBar.css"
import { CartWidget } from "../../containers/CartWidget"
export {NavBar};

// alert("Funciona");

class NavBar extends Component{

    state = {clicked: false}
    handleClick =  () =>{
        this.setState({clicked: !this.state.clicked})
    }



    render() {
        return(
            <><nav className="NavBarItems">
                <h1 className="navbar-logo">Aviation <i className="fas fa-plane"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((items, index) => {
                        return (
                            <li key={index}><a className={items.cName} href={items.url}>{items.title}</a> </li>
                        );
                    })}
                </ul>
                {/* <h1 className="cart-logo"><i className="fas fa-shopping-cart"></i></h1> */}
                <CartWidget />
                <Button>Iniciar Sesión</Button>
            </nav>  
            <hr/>
            </>
        )
    }
}

export default NavBar