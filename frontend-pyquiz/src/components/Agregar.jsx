import React from "react"
import axios from "axios"
import "../styles/Agregar.css";

const Agregar = () =>{

    const [titulo, setTitulo] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [respuesta, setRespuesta] = React.useState("");
    const [nivel, setNivel] = React.useState("");
    
    const agregarPregunta = async () =>{
        await axios.post('http://localhost:8080/repositorio/listado', {
            titulo, url, respuesta, nivel
        })
        window.location.reload();
    }

    return <div className="hero">
                <div class="hero">
            <div class="container3">
                <div class="image">
                    <div class="form-box">
                        <div class="form">
                            <form>
                                <h2>Agregar Pregunta</h2>
                                <div class="input-box">
                                    <input type="text" id="titulo" name="titulo" onChange={(e) => setTitulo(e.target.value)}/>
                                    <label for="titulo">Titulo</label>
                                </div>
                                <div class="input-box">
                                    <input type="text" id="url" name="url" required onChange={(e) => setUrl(e.target.value)}/>
                                    <label for="url">URL Imagen</label>
                                </div>
                                <div class="input-box">
                                    <input type="text" id="respuesta" name="respuesta" required onChange={(e) => setRespuesta(e.target.value)}/>
                                    <label for="respuesta">Respuesta</label>
                                </div>
                                <label for="nivel">Nivel</label>
                                <div class="select">
                                    <select id="nivel" name="nivel" required onChange={(e) => setNivel(e.target.value)}>
                                        <option selected disabled> Seleccione una opción </option>
                                        <option value="Basico">Basico</option>
                                        <option value="Intermedio">Intermedio</option>
                                        <option value="Avanzado">Avanzado</option>
                                    </select>
                                </div>
                                <button onClick={() => agregarPregunta()}>Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
   }
   
export default Agregar;