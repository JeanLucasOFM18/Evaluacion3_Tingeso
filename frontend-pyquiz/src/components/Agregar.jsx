import React from "react"
import axios from "axios"
import "../styles/Agregar.css";

const Agregar = () =>{

    const [titulo, setTitulo] = React.useState("");
    const [url, setUrl] = React.useState("");
    const [respuesta, setRespuesta] = React.useState("");
    const [nivel, setNivel] = React.useState("");
    
    const agregarPregunta = async () =>{
        await axios.post('http://localhost:8080/repositorio/crearPregunta', {
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
                                    <input type="text" id="titulo" name="titulo" required onChange={(e) => setTitulo(e.target.value)}/>
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
                                <button onClick={() => {
                                    const titulo = document.getElementById("titulo").value;
                                    const url = document.getElementById("url").value;
                                    const respuesta = document.getElementById("respuesta").value;
                                    const nivel = document.getElementById("nivel").value;
                                    
                                    const urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

                                    let camposValidos = true; // Variable de bandera
        
                                    if (!urlRegex.test(url)) {
                                        alert("Por favor, ingrese una URL válida de la imagen.");
                                        camposValidos = false;
                                    }
                                    
                                    else if (!titulo || !respuesta || !nivel) {
                                        alert("Por favor, complete todos los campos antes de agregar la pregunta.");
                                        camposValidos = false;
                                    }
                                    
                                    else if (camposValidos) {
                                        agregarPregunta();
                                        alert("Pregunta registrada de manera exitosa");
                                    }
                                }}>Agregar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
   }
   
export default Agregar;