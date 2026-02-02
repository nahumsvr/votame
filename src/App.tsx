import "./index.css";
import RankingCard from "./components/RankingCard";

export function App() {
  return (
    <div className="app">
      <header>
        <div className="header-buttons-container">
          <button>Votar</button>
          <button>Proponer</button>
        </div>
        <h1>Votame Ranking</h1>
        <p>Semana 5</p>
      </header>
      <main>
        <section className="ranking-container">
          <RankingCard
            userName="nahumsvr"
            points={100}
            position={1}
            imageUrl="https://akamai.sscdn.co/letras/360x360/albuns/1/2/5/7/2183651712605467.jpg"
          >
            Escuchar bocanda desnudos y de cucharita
          </RankingCard>
        </section>
      </main>
    </div>
  );
}

export default App;
