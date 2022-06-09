import React from "react";
interface Props {
  type: string;
  holder: string;
  change: () => void;
  value: any;
  Class: string;
}
const Input: React.FC<Props> = ({ type, holder, change, value, Class }) => {
  return (
    <>
      <input
        className={Class}
        type={type}
        placeholder={holder}
        onChange={change}
        value={value}
      />
    </>
  );
};
export default Input;
