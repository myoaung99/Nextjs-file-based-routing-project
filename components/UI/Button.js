import Link from "next/link";
import classes from "./Button.module.css";

const Button = (props) => {
  if (props.href) {
    return (
      <Link href={props.href}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
