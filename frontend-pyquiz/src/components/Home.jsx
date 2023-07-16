import "../styles/Home.css";

const Home = () =>{
    return <div className="hero">
        <div className="text-box">
            <h1 style={{ marginTop: '-200px'}}>PyQuiz</h1>
            <h3>Pon a prueba tus conocimientos sobre Python!</h3>
            <a style={{ textDecoration: 'none' }} href="/pruebas"><button className="button2">Empezar Desafío!</button></a>
        </div>
        <div className="banner">
            <img src="https://i.postimg.cc/Jh2KHprf/imagen-2023-07-14-011337490-removebg-preview.png" alt="Header Img"/>
        </div>
        
    </div>;
   }
   
export default Home;