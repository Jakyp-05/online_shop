import React from "react";

import "./button.scss";

type IProps = {
  onclick?: () => void;
  bg?: string;
  role: string;
};

const Button: React.FC<IProps> = ({ onclick, bg, role }) => {
  return (
    <button className={`btn ${bg}`} onClick={onclick}>
      {role}
    </button>
  );
};

export default Button;
