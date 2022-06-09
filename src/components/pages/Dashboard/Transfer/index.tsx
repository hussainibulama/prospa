import React from "react";
import Sidenav from "../../../common/Nav/sidenav";
import Topnav from "../../../common/Nav/topnav";
import "./transfer.scss";

interface Props {}
const Transfer: React.FC<Props> = () => {
  return (
    <>
      <div className="dashbaord">
        <div className="super_admin">
          <Topnav />
        </div>
        <Sidenav />
      </div>
    </>
  );
};
export default Transfer;
