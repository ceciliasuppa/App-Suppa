import "../styles/ItemCount.css"

export const Counter = ({onDis, initial, onAdd}) => {

    return(
        <>
        <div> 
            <button className="add" id="add" onClick={onDis}>-</button>
            <p className="numero" id="numero">{initial}</p>
            <button id="substract"classname="substract"onClick={onAdd}>+</button>
        </div>
        </>
    )
}

// CON CLASES 
// class ItemCount extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count : 1,
//         }
//     }
//     // stock : 15 unidades 
//     increment = () => {
//         if(this.state.count >= 15){
//             this.setState({
//                 count : 15
//             });
//         } else {
//              this.setState({count :this.state.count + 1})
//         }
//     }
//     // mínimo de 1 unidad 
    
//     decrement = () => {
//         if(this.state.count <= 1){
//             this.setState({
//                 count: 1
//             });
//         } else {
//             this.setState({count :this.state.count - 1})
//         }
//     }

//     render(){
//         return(
//             <div className="ItemCount">
//                 <div className="producto1">
//                 <h2 className="h2"><i>Auriculares Aravia</i></h2> <br/>
//                 <img src={imagen} />
//                 <div className="botones">
//                 <button onClick={this.decrement} id="counter1" className="counter"><strong>-</strong></button>
//                 <h3 className="h3" id="h3">{this.state.count}</h3>
//                 <button onClick={this.increment} id="counter2" className="counter"><strong>+</strong></button> <br/> <br/>
//                 <button id="add" ><strong>Agregar al carrito</strong></button>
//                 </div>
//                 </div>
//             </div>
//         );
//     }
