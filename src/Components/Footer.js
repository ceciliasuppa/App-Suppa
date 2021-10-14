import React from "react";
import "./Footer.css"
export {Footer};

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

export default class Footer extends React.Component {
    render(){ return(
        <div className="main-footer">
            <div className="Container">
                <div className="row">
                    {/* COLUMNA 1 */}
                    <div className="col">
                        <h4>AVIATION CENTER</h4> <br/>
                        <ul className="list-unstyled">
                            <li>342-234-987</li>
                            <li>Buenos Aires, Argentina</li>
                            <li><i class="fas fa-location-arrow"></i>  <a href="https://www.google.com/maps?q=aerodromo+general+rodriguez&um=1&ie=UTF-8&sa=X&ved=2ahUKEwi6_6HpvMXzAhU7r5UCHbW3Bm0Q_AUoAXoECAEQAw">Ruta 6 y arroyo La Choza, General Rodríguez</a></li>
                        </ul>
                    </div>
                    {/* COLUMNA 2 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h4>Nuestras Redes</h4> <br/>                         
                            <li><a href="https://www.instagram.com/?hl=es">Instagram  <i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/">Facebook <i class="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D">Twitter <i class="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                    {/* COLUMNA 3 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h4>Subscribite</h4> <br/>
                            <input type="email" placeholder="Ingresa tu mail..." id="footer-email"/>
                            <button>Enviar</button>
                        </ul>
                    </div>
                </div> <br/>
                <hr/>
                <div className="row2">
                    <p className="col-sm"> <br/>
                        &copy;{new Date().getFullYear()} AVIATION CENTER | Todos los derechos reservados | Políticas de privacidad
                    </p>
                </div>
            </div>
        </div>
    )
}}

