import { Button, NavLink } from "../components";

export function Answer() {
  return (
    <section>
      <h1>Answer</h1>

      <Button btnText={<NavLink to="/score" linkText="Score" />} />
    </section>
  );
}
