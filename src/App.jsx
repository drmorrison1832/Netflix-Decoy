import "./styles/App.css";
import Header from "./Header.jsx";
import MainSection from "./MainSection.jsx";
import Footer from "./Footer.jsx";
import movies from "./assets/movies.json";

function App() {
  return (
    <>
      <Header />
      <MainSection content={movies} />
      <Footer />
    </>
  );
}

export default App;
