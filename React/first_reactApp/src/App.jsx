import { useState, memo } from "react";

const Card = memo(function Card({ title }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 m-4 border-2 border-black rounded-lg shadow-sm w-64">
      <h3 className="text-lg font-semibold">{title}</h3>

      <button
        onClick={() => setIsLiked(prev => !prev)}
        aria-label={isLiked ? "Unlike" : "Like"}
        className="text-2xl transition-transform hover:scale-110"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
});

export default function App() {
  const movies = ["movie_1", "movie_2", "movie_3"];

  return (
    <div className="flex gap-4 flex-wrap p-6">
      {movies.map(movie => (
        <Card key={movie} title={movie} />
      ))}
    </div>
  );
}
