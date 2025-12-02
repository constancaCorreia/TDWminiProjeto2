export default function QuizResults({ winner, winnerImage, onRestart }) {
  return (
    <div className="mt-4 text-center">
        {/* Mensagem com a casa vencedora */}
      <h2 className="text-light fw-bold">You belong to {winner}!</h2>
      <img
        src={winnerImage}
        alt={`${winner} crest`}
        className="mt-3"
        width="120"
      />

    {/* Botão para reiniciar o quiz */}
      <div className="mt-4">
        <button className="btn btn-primary" onClick={onRestart}>
          Try Again
        </button>
      </div>
    </div>
  );
}