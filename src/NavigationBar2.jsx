import search from "./assets/search.svg";
import alert from "./assets/alert.svg";
import down_drop from "./assets/down_drop.svg";

function NavigationBar2() {
  return (
    <div className="navigation_bar_2">
      <img src={search} className="icon_in_bar" alt="search" />
      <img src={alert} className="icon_in_bar" alt="alert" />
      <div className="avatar_in_bar"></div>
      <img src={down_drop} className="icon_in_bar" alt="down_drop" />
    </div>
  );
}

export default NavigationBar2;
