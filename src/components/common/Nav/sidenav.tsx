import React from "react";
import "./nav.scss";
import Transfer from "../../assets/svg/transfer.svg";
import Logout from "../../assets/svg/logout.svg";
import Shop from "../../assets/svg/shop.svg";
import Arrow from "../../assets/svg/ar_down.svg";
import { useNavigate } from "react-router-dom";

interface Props {}
const Sidenav: React.FC<Props> = () => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="side_nav">
        <div className="topclass">
          <div className="circles">
            <img src={Shop} alt="iconShop" />
          </div>
          <div className="remains">
            <div>
              <h3>Hussaini</h3>
              <p>Business Owner</p>
            </div>
            <div>
              <img src={Arrow} alt="iconArrow" />
            </div>
          </div>
        </div>
        <div className="others">
          <div className="navs">
            <div className="items active">
              <img src={Transfer} alt="icon1" />
              <span>Transfer</span>
            </div>
            <div className="items" onClick={() => Navigate("/")}>
              <img src={Logout} alt="icon2" />
              <span>Logout</span>
            </div>
          </div>
          <div className="logo"></div>
        </div>
      </div>
    </>
  );
};
export default Sidenav;
