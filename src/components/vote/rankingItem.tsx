function UserIcon() {
  return (
    <svg width="16" height="20" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 36H28.001V28H32.001V40H0V28H4V36ZM28 28H4V24H28V28ZM22 4H10.001V16H22V20H10V16H6.00098V4H10V0H22V4ZM26.001 16H22.001V4H26.001V16Z" fill="white"/>
    </svg>
  )
}

export default function RankingItem({title, user, imageUrl, style}: {title: string, user: string, imageUrl: string, style?: React.CSSProperties}) {
  return (
    <article className="ranking-item-container" style={style}>
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