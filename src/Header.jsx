import netflix_logo from "./assets/netflix_logo.svg";
import NavigationBar1 from "./NavigationBar1";

function Head() {
  return (
    <header>
      <div className="container">
        <img className="logo" alt="logo" src={netflix_logo} />
        <NavigationBar1 />

        <div className="navigation_bar_2">loupe, cloche, avatar</div>
      </div>
    </header>
  );
}

export default Head;
