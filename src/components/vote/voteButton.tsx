export default function VoteButton({text, option, points, onClick}: {text: string, option: number, points: number, onClick: () => void}) {
  return (
    <span className="container-ranking-button">
      <div className="ranking-button-container">
        <span className="ranking-button-pt">+{points}</span>
        <button className="ranking-button" onClick={onClick}>
          {text}
        </button>
      </div>
      <span className="ranking-button-option">[{option}]</span>
    </span>
  )
}