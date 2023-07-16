import "../styles/Pruebas.css";

const Pruebas = () =>{
    return <div className="hero">
					<h1 className="pruebaTitulo">DIFICULTAD</h1>
                <div class="wrapper">
		<div class="card">
			<img src="https://i.postimg.cc/d0NQxQ18/imagen-2023-07-12-184722867.png" alt=""/>
			<div class="info">
				<h1>Básico</h1>
				<p>Demuestra tu conocimiento sobre los fundamentos de Python!</p>
				<a href="/pruebaBasica" class="btn">Iniciar</a>
			</div>
		</div>
		<div class="card">
			<img src="https://i.postimg.cc/wjS0cL5J/imagen-2023-07-12-184742466.png" alt=""/>
			<div class="info">
				<h1>Intermedio</h1>
				<p>Demuestra que estás preparado para un desafio!</p>
				<a href="/pruebaIntermedia" class="btn">Iniciar</a>
			</div>
		</div>
		<div class="card">
			<img src="https://i.postimg.cc/ydTgxCYx/imagen-2023-07-12-184526195.png" alt=""/>
			<div class="info">
				<h1>Avanzado</h1>
				<p>Demuestra que eres un experto en Python!</p>
				<a href="/pruebaAvanzada" class="btn">Iniciar</a>
			</div>
		</div>
	</div>

        
    </div>;
   }
   
export default Pruebas;