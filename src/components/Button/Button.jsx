import { h } from "preact";
import style from "./Button.css";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className={style.button}>
    {children}
  </button>
);

export default Button;
