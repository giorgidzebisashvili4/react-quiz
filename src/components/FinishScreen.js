import { useQuiz } from "../contexts/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highScore, dispatch } = useQuiz();
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage >= 80) {
    emoji = "🥇";
  } else if (percentage >= 60) {
    emoji = "🥈";
  } else if (percentage >= 40) {
    emoji = "🥉";
  } else {
    emoji = "🤷‍♂️";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints}({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(High Score: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
