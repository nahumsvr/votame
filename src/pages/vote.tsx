import "./vote.css";

function UserIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 36H28.001V28H32.001V40H0V28H4V36ZM28 28H4V24H28V28ZM22 4H10.001V16H22V20H10V16H6.00098V4H10V0H22V4ZM26.001 16H22.001V4H26.001V16Z" fill="white"/>
    </svg>
  )
}

function VoteButton({text, option, points}: {text: string, option: number, points: number}) {
  return (
    <span className="container-ranking-button">
      <div className="ranking-button-container">
        <span className="ranking-button-pt">+{points}</span>
        <button className="ranking-button">
          {text}
        </button>
      </div>
      <span className="ranking-button-option">[{option}]</span>
    </span>
  )
}

function RankingItem({title, user, imageUrl}: {title: string, user: string, imageUrl: string}) {
  return (
    <article className="ranking-item-container">
        <a href="#" className="ranking-item">
          <img
            src={imageUrl}  
            alt=""
            className="ranking-item-image"
          />
          <section className="ranking-item-info">
            <h2>{title}</h2>
            <div className="ranking-item-user">
              <UserIcon />
              <p>@{user}</p>
            </div>
          </section>
        </a>
      </article>
  )
}

export default function Vote() {
  return (
    <>
      <RankingItem title="Titulo" user="userName" imageUrl="https://akamai.sscdn.co/letras/360x360/albuns/1/2/5/7/2183651712605467.jpg" />
      <div className="ranking-item-vote-buttons">
        <VoteButton text="sida" option={1} points={0} />
        <VoteButton text="mehh" option={2} points={1} />
        <VoteButton text="muy low key" option={3} points={3} />
      </div>
    </>
  );
}