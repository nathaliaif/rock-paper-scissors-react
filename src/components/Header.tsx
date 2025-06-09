import { useScore } from "./ScoreContext";

function Header() {
  const { score } = useScore();

  return (
    <header>
      <p className="header__title">Rock Paper Scissors</p>
      <div className="header-score">
        <p className="score__title">Score</p>
        <p className="score__text" id="score__text">
          {score}
        </p>
      </div>
    </header>
  );
}

export default Header;
