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
          {movies.map((cat, indexCat) => {
            return (
              <section key={indexCat}>
                <div className="category">{cat.category}</div>
                <div className="films">
                  <div className="left-filler"></div>
                  {cat.images.map((film, indexFilm) => {
                    return (
                      <div key={indexFilm} className="film">
                        <img src={film} />
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
