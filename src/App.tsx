import "./index.css";
import { Routes, Route } from "react-router";
import Header from "./components/header";
import Home from "./pages/home";
import NewPlan from "./pages/newPlan";
import Vote from "./pages/vote";



export function App() {
  return (
    <div className="app">
      <Header week={5} title="Votame Ranking" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-plan" element={<NewPlan />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
