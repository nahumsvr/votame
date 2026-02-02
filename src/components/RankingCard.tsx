import "./RankingCard.css";

export default function RankingCard({ children, userName, points, position, imageUrl }: { children: React.ReactNode, userName: string, points: number, position: number, imageUrl: string }) {
    return (
        <article className="ranking-card-container">
            <span className="ranking-card-position">#{position}</span>
            <div className="ranking-card">
                <aside className="ranking-card-image">
                    <img src={imageUrl} alt={`Screenshot del plan del usuario ${userName}`} />
                </aside>
                <div className="ranking-card-content">
                    <h3 className="ranking-card-content-title">{children}</h3>
                    <p className="ranking-card-content-user">@{userName}</p>
                    <p className="ranking-card-content-points">{points}</p>
                </div>
            </div>
        </article>
    );
}