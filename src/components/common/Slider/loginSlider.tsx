import React from "react";
import "./slider.scss";
import Logo from "../../assets/svg/prospa-logo2.svg";
import integrations from "../../assets/img/integrations.png";
import { ProgressBar } from "react-mdl";
interface Props {}
const Slider: React.FC<Props> = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="slider_left">
        <div className="level1">
          <img src={Logo} alt="prospa logo" />
        </div>
        <div className="level2">
          <div className="loaders">
            <div>
              <ProgressBar progress={40} />
            </div>
            <div>
              <ProgressBar progress={0} />
            </div>
            <div>
              <ProgressBar progress={0} />
            </div>
            <div>
              <ProgressBar progress={0} />
            </div>
            <div>
              <ProgressBar progress={0} />
            </div>
          </div>
          <div className="oters">
            <h2>Integrate and Collaborate.</h2>
            <p>
              connect your favorite business <br></br>management tools in few
              clicks.
            </p>
            <img src={integrations} alt="integrations" />
          </div>
        </div>
        <div className="foot level3"> &copy; {year} Prospa Inc.</div>
      </div>
    </>
  );
};
export default Slider;
