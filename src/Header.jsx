import netflix_logo from "./assets/netflix_logo.svg";
import NavigationBar1 from "./NavigationBar1";
import NavigationBar2 from "./NavigationBar2";

function Head() {
  return (
    <header>
      <div className="container">
        <img className="logo" alt="logo" src={netflix_logo} />
        <NavigationBar1 />

        <NavigationBar2 />
      </div>
    </header>
  );
}

export default Head;
