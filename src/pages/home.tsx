import RankingCard from "@/components/RankingCard";

export default function Home() {
  return (
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
  );
}