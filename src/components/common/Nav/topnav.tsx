import React from "react";
import "./nav.scss";
import Search from "../../assets/img/search.png";
import Alarm from "../../assets/svg/alarm.svg";
interface Props {}
const Topnav: React.FC<Props> = () => {
  return (
    <div className="topnav">
      <div className="topers">
        <div className="inputers">
          <img src={Search} alt="search" />
          <input
            type="text"
            placeholder="Search for payment, customer, product..."
          />
        </div>
        <div>
          <img src={Alarm} alt="Alarm" />
        </div>
      </div>
    </div>
  );
};
export default Topnav;
