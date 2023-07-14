import "../styles/PruebaIniciada.css";
import React, { useState, useEffect } from 'react';
import axios from "axios"

const PruebaBasica = () =>{

    const [preguntas, setPreguntas] = useState([]);
    const [imagenUrl, setImagenUrl] = useState([]);
    const [respuestas, setRespuestas] = useState([]);
    const [respuestasUsuario, setRespuestasUsuario] = useState([]);
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [finalizado, setFinalizado] = useState(false);
    const [tiempo, setTiempo] = useState(0);
    
    useEffect(() => {
        const obtenerPreguntas = async () => {
          try {
            const response = await axios.get('http://localhost:8080/repositorio/obtenerPorNivel/Basico');
            const data = response.data;
    
            // Verifica si la respuesta contiene preguntas y respuestas válidas
            if (data && Array.isArray(data)) {
              const preguntasAleatorias = obtenerPreguntasAleatorias(data, 4);
              setPreguntas(preguntasAleatorias.map((item) => item.titulo));
              setRespuestas(preguntasAleatorias.map((item) => item.respuesta));
              setImagenUrl(preguntasAleatorias.map((item) => item.url));
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        obtenerPreguntas();
    }, []);

    useEffect(() => {
      let intervalo;
    
      if (!finalizado) {
        intervalo = setInterval(() => {
          setTiempo((prevTiempo) => prevTiempo + 1);
        }, 1000);
      }
    
      return () => {
        clearInterval(intervalo);
      };
    }, [finalizado]);

    const obtenerPreguntasAleatorias = (preguntas, cantidad) => {
      const preguntasAleatorias = [];
      const indices = [];
    
      while (preguntasAleatorias.length < cantidad) {
        const indiceAleatorio = Math.floor(Math.random() * preguntas.length);
    
        if (!indices.includes(indiceAleatorio)) {
          indices.push(indiceAleatorio);
          preguntasAleatorias.push(preguntas[indiceAleatorio]);
        }
      }
    
      return preguntasAleatorias;
    };

    const handleRespuestaUsuario = (event) => {
        const respuesta = event.target.value;
        setRespuestasUsuario((prevRespuestasUsuario) => {
          const nuevasRespuestasUsuario = [...prevRespuestasUsuario];
          nuevasRespuestasUsuario[indicePregunta] = respuesta;
          return nuevasRespuestasUsuario;
        });
    };

    const handleSiguientePregunta = () => {
        if (indicePregunta < 3) {
          setIndicePregunta((prevIndicePregunta) => prevIndicePregunta + 1);
        } else {
          setFinalizado(true);
        }
    };

    const renderizarPreguntaActual = () => {
        const preguntaActual = preguntas[indicePregunta];
        const urlActual = imagenUrl[indicePregunta];
        const respuestaUsuarioActual = respuestasUsuario[indicePregunta];
    
        return (
          <div>
            <h1 style={{ marginTop: '-80px', textAlign: 'center'}}>¿Qué retorna el código?</h1>
            <img src={urlActual} alt="Imagen de la pregunta" style={{ width: '600px', height: '400px'}}/>
            <h1 style={{ textAlign: 'center'}}>Ingrese su respuesta</h1>
            <p>{preguntaActual}</p>
            <input
              type="text"
              value={respuestaUsuarioActual || ''}
              onChange={handleRespuestaUsuario}
              style={{
                width: '100%',
                padding: '5px',
                textAlign: 'center'
              }}
            />
            <button onClick={handleSiguientePregunta}>
              {finalizado ? 'Finalizar' : 'Siguiente'}
            </button>
          </div>
        );
    };

    /*
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
            <p>Tiempo transcurrido: {tiempo} segundos</p>
          </div>
        );
    };*/

    const renderizarResultado = () => {
      
      const respuestasCorrectas = respuestas.reduce((count, respuesta, index) => {
        if (respuesta === respuestasUsuario[index]) {
          return count + 7;
        }
        return count + 1;
      }, 0);

      const puntajeTotal = respuestasCorrectas / 4;

      const preguntasCorrectas = preguntas.reduce((result, pregunta, index) => {
        if (respuestas[index] === respuestasUsuario[index]) {
          result.push(index + 1); // Agregar el número de pregunta (index + 1) al arreglo
        }
        return result;
      }, []);
    
      const preguntasIncorrectas = preguntas.reduce((result, pregunta, index) => {
        if (respuestas[index] !== respuestasUsuario[index]) {
          result.push(index + 1); // Agregar el número de pregunta (index + 1) al arreglo
        }
        return result;
      }, []);

      return (
        <div class="results-container">
          <h1 class="result-title">Resultado</h1>
          <div class="result-card">
            <p class="result-label">Nota obtenida:</p>
            <p class="result-value" id="correct-answers">{puntajeTotal}</p>
          </div>
          <div class="result-card">
            <p class="result-label">Tiempo transcurrido:</p>
            <p class="result-value" id="elapsed-time">{tiempo} segundos</p>
          </div>
          <div class="result-card">
          <h2 class="result-label">Preguntas respondidas correctamente:</h2>
            <ul>
              {preguntasCorrectas.map((numeroPregunta) => (
                <p key={numeroPregunta} class="result-value">Pregunta {numeroPregunta}</p>
              ))}
            </ul>
          </div>
          <div class="result-card">
            <h2 class="result-label">Preguntas respondidas incorrectamente:</h2>
            <ul>
              {preguntasIncorrectas.map((numeroPregunta) => (
                <p key={numeroPregunta} class="result-value">Pregunta {numeroPregunta}</p>
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    return (
        <div className="hero">
          <div className="containerBasica">
            {finalizado ? renderizarResultado() : renderizarPreguntaActual()}
          </div>
        </div>
      );
   }
   
export default PruebaBasica;