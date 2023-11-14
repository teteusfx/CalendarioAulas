import { Link } from "react-router-dom";
import "../../App.css";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import Teacher from "/teacher.svg";
import Container from "../../components/Container";

function Home() {
  return (
    <>
      <TopBar />

      <Container>
        <section className="container">
          <div className="apresentacao">
            <p>
              Olá, sou <br />
              <span>Sandra Alves</span> <br />
              Dev Full Stack
            </p>
            <Link to="/sobre" className="btn btn-red">
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className="img-home" src={Teacher} alt="Imagem de Home" />
          </figure>
        </section>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
