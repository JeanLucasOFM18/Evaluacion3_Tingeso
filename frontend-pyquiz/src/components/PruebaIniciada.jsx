import "../styles/PruebaIniciada.css";

const PruebaIniciada = () =>{
    return <div className="hero">
                <div className="containerBasica">
                    <img src="https://i.postimg.cc/1zg6M3cq/imagen-2023-07-12-195035530.png" alt=""/>
                </div>
                <div class="input-box1">
                   <input type="text" id="codigo" name="codigo"/>
                   <label for="codigo">Titulo</label>
                </div>
                <button>Siguiente</button>
    </div>;
   }
   
export default PruebaIniciada;