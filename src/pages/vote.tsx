import { useState } from "react";
import "./vote.css";
import VoteButton from "@/components/vote/voteButton";
import RankingItem from "@/components/vote/rankingItem";
import useVoteStack from "@/hooks/useVoteStack";

export default function Vote() {
  const { posts, loading, error, submitVote, removeTopPost } = useVoteStack();
  
  const [isExiting, setIsExiting] = useState(false);

  const handleVoteClick = (points: number) => {
    if (posts.length === 0 || isExiting) return;
    
    setIsExiting(true);
    
    submitVote(points);
    
    setTimeout(() => {
      removeTopPost();
      setIsExiting(false);
    }, 500);
  };

  if (loading) return <div className="loading">Cargando posts...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <div className="card-stack">
        {posts.map((post, index) => {
          const isTop = index === 0;
          const style: React.CSSProperties = {
            zIndex: 100 - index,
            transform: (isTop && isExiting)
            ? `rotate(${Math.random() * 100 - 50}deg) translateY(-150%)`
            : `scale(${isTop ? 1 : 1 - index * 0.1}) rotate(${isTop ? 0 : post.rotation}deg)`,
            opacity: (isTop && isExiting) ? 0 : 1,
            pointerEvents: (isTop && isExiting) ? 'none' : 'auto',
            transition: 'transform 0.5s ease, opacity 0.5s ease'
          };
          
          return (
            <RankingItem
            key={post.id}
            title={post.title}
            user={post.userName || "unknown"}
            imageUrl={post.imageUrl}
            style={style}
            />
          );
        })}
        
        {posts.length === 0 && (
          <div style={{color: 'var(--text-color)', alignSelf: 'center'}}>
            ¡No hay más posts!
          </div>
        )}
      </div>

      <div className="ranking-item-vote-buttons">
        <VoteButton text="sida" option={1} points={0} onClick={() => handleVoteClick(0)} />
        <VoteButton text="mehh" option={2} points={1} onClick={() => handleVoteClick(1)} />
        <VoteButton text="muy low key" option={3} points={3} onClick={() => handleVoteClick(3)} />
      </div>
    </>
  );
}