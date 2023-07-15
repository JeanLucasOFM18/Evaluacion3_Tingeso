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
    const [numeroPregunta, setNumeroPregunta] = useState(1);

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
          setNumeroPregunta((prevNumeroPregunta) => prevNumeroPregunta + 1);
        } else {
          setFinalizado(true);
        }
    };

    const renderizarPreguntaActual = () => {
        //const preguntaActual = preguntas[indicePregunta];
        const urlActual = imagenUrl[indicePregunta];
        const respuestaUsuarioActual = respuestasUsuario[indicePregunta];
    
        return (
          <div>
            <div className="progress-bar">Pregunta {numeroPregunta}/4</div>
            <h1 style={{ marginTop: '-100px', textAlign: 'center'}}>¿Qué retorna el código?</h1>
            <img src={urlActual} alt="Imagen de la pregunta" style={{ maxWidth: '600px', maxHeight: '400px', width: '100%', height: 'auto', marginTop: '20px'}}/>
            <h1 style={{ marginTop: '10px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>Ingrese su respuesta:</h1>
            <input
              type="text"
              value={respuestaUsuarioActual || ''}
              onChange={handleRespuestaUsuario}
              style={{
                width: '100%',
                padding: '5px',
                textAlign: 'center',
                marginTop: '10px'
              }}
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
          return count + 7;
        }
        return count + 1;
      }, 0);

      const puntajeTotal = respuestasCorrectas / 4;

      const puntajePregunta1 = respuestas[0] === respuestasUsuario[0] ? 7 : 1;
      const puntajePregunta2 = respuestas[1] === respuestasUsuario[1] ? 7 : 1;
      const puntajePregunta3 = respuestas[2] === respuestasUsuario[2] ? 7 : 1;
      const puntajePregunta4 = respuestas[3] === respuestasUsuario[3] ? 7 : 1;

      let mensaje = "";
      if (puntajeTotal === 7) {
          mensaje = "FELICITACIONES";
      } else if (puntajeTotal >= 4) {
          mensaje = "CASI";
      } else {
          mensaje = "DEFICIENTE";
      }

      let descripcion = "";
      if (puntajeTotal === 7) {
          descripcion = "Lograste superar el nivel Básico, estás listo para subir el nivel";
      } else if (puntajeTotal >= 4) {
          descripcion = "Estás a punto de superar este desafío, vuelve a intentarlo";
      } else {
          descripcion = "Vuelve a estudiar los fundamentos de Python y supera este reto";
      }

      return (
        <div class="card-container">
        <div class="card-container-left">
          <h3>Resultado</h3>

          <div class="card-container-left-circle">
            <div class="circle-div">
              <h1>{puntajeTotal}</h1>
              <p>de 7</p>
            </div>
          </div>

          <div class="card-container-left-text">
            <h2>{mensaje}</h2>
            <p class="card-text">
            {descripcion}
            </p>
            <p> Tiempo: {tiempo} segundos</p>
          </div>
        </div>

        <div class="card-container-right">
          <h2 style={{ textAlign: 'center'}}>Progreso</h2>
          <div class="card-right-group">
            <div class="group reaction">
              <div class="group-icon reaction-icon">
                <img src="./assets/images/icon-reaction.svg" alt="" />
                <p>Pregunta 1</p>
              </div>
              <p class="span-b"><b>{puntajePregunta1}</b> / 7</p>
            </div>

            <div class="group memory">
              <div class="group-icon memory-icon">
                <img src="./assets/images/icon-memory.svg" alt="" />
                <p>Pregunta 2</p>
              </div>
              <p class="span-b"><b>{puntajePregunta2}</b> / 7</p>
            </div>

            <div class="group verbal">
              <div class="group-icon verbal-icon">
                <img src="./assets/images/icon-verbal.svg" alt="" />
                <p>Pregunta 3</p>
              </div>
              <p class="span-b"><b>{puntajePregunta3}</b> / 7</p>
            </div>
            <div class="group visual">
              <div class="group-icon visual-icon">
                <img src="./assets/images/icon-visual.svg" alt="" />
                <p>Pregunta 4</p>
              </div>
              <p class="span-b"><b>{puntajePregunta4}</b> / 7</p>
            </div>
          </div>

          <a href="/pruebas"><button> Salir</button></a>
        </div>
      </div>
      )
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