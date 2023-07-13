import "../styles/PruebaIniciada.css";
import React, { useState, useEffect } from 'react';
import axios from "axios"

const PruebaBasica = () =>{

    const [preguntas, setPreguntas] = useState([]);
    const [imagenUrl, setImagenUrl] = useState('');
    const [respuestas, setRespuestas] = useState([]);
    const [respuestasUsuario, setRespuestasUsuario] = useState([]);
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [finalizado, setFinalizado] = useState(false);
    
    useEffect(() => {
        const obtenerPreguntas = async () => {
          try {
            const response = await axios.get('http://localhost:8080/repositorio/obtenerPorNivel/Basico');
            const data = response.data;
    
            // Verifica si la respuesta contiene preguntas y respuestas válidas
            if (data && Array.isArray(data)) {
              setPreguntas(data.map((item) => item.titulo));
              setRespuestas(data.map((item) => item.respuesta));
              setImagenUrl(data[indicePregunta].url);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        obtenerPreguntas();
    }, []);

    const handleRespuestaUsuario = (event) => {
        const respuesta = event.target.value;
        setRespuestasUsuario((prevRespuestasUsuario) => {
          const nuevasRespuestasUsuario = [...prevRespuestasUsuario];
          nuevasRespuestasUsuario[indicePregunta] = respuesta;
          return nuevasRespuestasUsuario;
        });
    };

    const handleSiguientePregunta = () => {
        if (indicePregunta < preguntas.length - 1) {
          setIndicePregunta((prevIndicePregunta) => prevIndicePregunta + 1);
        } else {
          setFinalizado(true);
        }
    };

    const renderizarPreguntaActual = () => {
        const preguntaActual = preguntas[indicePregunta];
        const respuestaUsuarioActual = respuestasUsuario[indicePregunta];
    
        return (
          <div>
            <img src={imagenUrl} alt="Imagen de la pregunta" />
            <p>{preguntaActual}</p>
            <input
              type="text"
              value={respuestaUsuarioActual || ''}
              onChange={handleRespuestaUsuario}
            />
            <button onClick={handleSiguientePregunta}>
              {finalizado ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>
        );
    };

    const renderizarResultado = () => {
        const respuestasCorrectas = respuestas.reduce((count, respuesta, index) => {
          if (respuesta === respuestasUsuario[index]) {
            return count + 1;
          }
          return count;
        }, 0);
    
        return (
          <div>
            <h1>Resultado</h1>
            <p>Respuestas correctas: {respuestasCorrectas}</p>
          </div>
        );
    };

    return (
        <div className="hero">
          {finalizado ? renderizarResultado() : renderizarPreguntaActual()}
        </div>
      );
   }
   
export default PruebaBasica;