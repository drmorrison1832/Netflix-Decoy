import pdp from "./assets/pdp.jpg";
import NavigationBar1 from "./NavigationBar1";

function Footer() {
  return (
    <footer>
      <div className="container">
        <img className="pdp" alt="pdp" src={pdp} />
      </div>
    </footer>
  );
}

export default Footer;
