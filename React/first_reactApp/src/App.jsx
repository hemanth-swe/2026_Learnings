import { useState } from "react"

const Card = ({title}) => {
  const [hasLiked,setHasLiked]=useState(false)
  return ( <div>
      <h3>{title}</h3>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Card title="movie_1"/>
      <Card title="movie_2"/>
      <Card title="movie_3"/>
    </>
  )
}
