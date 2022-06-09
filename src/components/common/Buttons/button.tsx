import React from "react";
interface Props {
  type: string;
  holder: string;
  click: () => void;
  value: any;
  Class: string;
}
const Button: React.FC<Props> = ({ click, value, Class }) => {
  return (
    <>
      <button className={Class} onClick={click}>
        {value}
      </button>
    </>
  );
};
export default Button;
