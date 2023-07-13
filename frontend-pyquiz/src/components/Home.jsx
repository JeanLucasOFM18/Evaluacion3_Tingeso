import "../styles/Home.css";
import headerImg from "../assets/img/header-img.svg";

const Home = () =>{
    return <div className="hero">
        <div className="text-box">
            <h1>PyQuiz</h1>
            <h3>Pon a prueba tus conocimientos sobre Python!</h3>
        </div>
        <div className="banner">
            <img src={headerImg} alt="Header Img"/>
        </div>
        
    </div>;
   }
   
export default Home;