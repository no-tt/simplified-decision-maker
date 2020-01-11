import { h } from "preact";
import InputText from "../InputText";
import style from "./Question.css";

const Question = () => (
  <div className={style.question}>
    <span className={style.question__title}>Should I </span>
    <InputText />
    <span className={style.question__title}> ?</span>
  </div>
);

export default Question;
