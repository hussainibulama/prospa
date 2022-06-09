import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Slider from "../../common/Slider/loginSlider";
import TextField from "@mui/material/TextField";
import apple from "../../assets/img/apple-store.svg";
import google from "../../assets/img/google-white.png";
import { styled } from "@mui/material/styles";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});
interface Props {}
const Login: React.FC<Props> = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="onboarding">
        <div className="onb_contents">
          <div className="t_left">
            Dont have an account? <span> Sign Up</span>
          </div>
          <div className="others">
            <h1>Welcome back to Prospa</h1>
            <p>
              An account, with powerful, personalised tools all in one place
            </p>

            <CssTextField
              id="filled-basic"
              label="Email Address"
              variant="filled"
            />

            <div>&nbsp;</div>
            <CssTextField id="filled-basic" label="Password" variant="filled" />
            <div>
              <div>&nbsp;</div>
              <button
                className="first"
                onClick={(e) => {
                  e.preventDefault();
                  Navigate("/dashboard");
                }}
              >
                Sign in
              </button>
            </div>

            <div>
              <button className="second">
                <img src={google} alt="google" width="20" />
                &nbsp;&nbsp; Sign in with Google
              </button>
            </div>
            <div>
              <button className="third">
                <img src={apple} alt="apple" width="30" /> &nbsp;&nbsp; Sign in
                Apple
              </button>
            </div>
            <div>
              <button className="fourth">Sign in from Mobile</button>
            </div>
            <div>
              <p className="forts">Forgot Password?</p>
            </div>
          </div>
        </div>
        <Slider />
      </div>
    </>
  );
};
export default Login;
