function Header({ Score }: { Score: number }) {
  return (
    <header>
      <p className="header__title">Rock Paper Scissors</p>
      <div className="header-score">
        <p className="score__title">Score</p>
        <p className="score__text" id="score__text">
          {Score}
        </p>
      </div>
    </header>
  );
}

export default Header;
