function Header() {
  return (
    <header>
      <p className="header__title">Rock Paper Scissors</p>
      <div className="header-score">
        <p className="score__title">Score</p>
        <p className="score__text" id="score__text">
          12
        </p>
      </div>
    </header>
  );
}

export default Header;
