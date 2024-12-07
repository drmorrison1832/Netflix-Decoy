import "./styles/App.css";
import Header from "./Header.jsx";
import MainSection from "./MainSection.jsx";
import Footer from "./Footer.jsx";
import movies from "./assets/movies.json";

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <section>
            <div className="category">{movies[0].category}</div>
            <div className="films">
              <div className="left-filler"></div>
              <div className="film">
                {/* <img src={`${props.content[0].images[0]}`} /> */}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
