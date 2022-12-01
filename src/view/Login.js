import { Button, Input, NavLink } from "../components";
import { useState } from "react";

export function Login() {
  const [nick, setNick] = useState("");
  const handleChange = (event) => {
    setNick(event.target.value);
  };
  const handleClick = () => {
    window.sessionStorage.setItem("playerNick", nick);
  };
  return (
    <form>
      <Input onChange={handleChange} />
      <Button
        onClick={handleClick}
        btnType="submit"
        btnText={<NavLink to="/game" linkText="Play" />}
      />
    </form>
  );
}
