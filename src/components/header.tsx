import { Link, useLocation } from "react-router";
import "./header.css";

export default function Header({week, title}: {week: number, title: string}) {
  const location = useLocation();
  console.log("Current route:", location.pathname);

  return (
    <header>
      <div className="header-buttons-container">
        {location.pathname != "/" ? <Link to="/">Home</Link> : null}
        {location.pathname != "/vote" ? <Link to="/vote">Votar</Link> : null}
        {location.pathname != "/new-plan" ? <Link to="/new-plan">Proponer</Link> : null}
      </div>
      <h1>{title}</h1>
      <p>Semana {week}</p>
    </header>
  )
}