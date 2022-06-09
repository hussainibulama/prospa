import React from "react";
import Sidenav from "../../../common/Nav/sidenav";
import Topnav from "../../../common/Nav/topnav";
import "./transfer.scss";
import TextField from "@mui/material/TextField";
interface Props {}
const Transfer: React.FC<Props> = () => {
  return (
    <>
      <div className="dashbaord">
        <div className="super_admin">
          <Topnav />
          <div className="pages_data">
            <h3>Transfer to account</h3>
            <p>
              We use your BVN to verify your identity. When you enter your BVN,
              the only data we are able to retrieve is your name, date of birth
              and the mobile phone number attached to your BVN. We do not have
              access to any of your bank accounts, transaction history or other
              sensitive financial data..
            </p>
            <form>
              <div className="Inputs">
                <TextField
                  id="filled-basic"
                  label="Account Number"
                  variant="filled"
                  fullWidth
                />
                <div>&nbsp;</div>

                <TextField
                  fullWidth
                  id="filled-basic"
                  label="Amount"
                  variant="filled"
                />
              </div>
              <div>&nbsp;</div>

              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Transfer
                </button>
              </div>
            </form>
          </div>
        </div>
        <Sidenav />
      </div>
    </>
  );
};
export default Transfer;
