import "../styles/Pruebas.css";

const Pruebas = () =>{
    return <div className="hero">
                <div class="wrapper">
		<div class="card">
			<img src="https://i.postimg.cc/d0NQxQ18/imagen-2023-07-12-184722867.png" alt=""/>
			<div class="info">
				<h1>Básico</h1>
				<p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
				<a href="/pruebaBasica" class="btn">Iniciar</a>
			</div>
		</div>
		<div class="card">
			<img src="https://i.postimg.cc/wjS0cL5J/imagen-2023-07-12-184742466.png" alt=""/>
			<div class="info">
				<h1>Intermedio</h1>
				<p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
				<a href="/pruebaIntermedia" class="btn">Iniciar</a>
			</div>
		</div>
		<div class="card">
			<img src="https://i.postimg.cc/ydTgxCYx/imagen-2023-07-12-184526195.png" alt=""/>
			<div class="info">
				<h1>Avanzado</h1>
				<p>Lorem ipsum is simply dummy text from the printing and typing industry</p>
				<a href="/pruebaAvanzada" class="btn">Iniciar</a>
			</div>
		</div>
	</div>

        
    </div>;
   }
   
export default Pruebas;