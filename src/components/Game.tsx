function Game() {
  let chosenHand: string = "";
  const handleClick = (hand) => {
    chosenHand = hand;
  };

  return (
    <>
      <main>
        <div className="main__first-row">
          <button
            className="button-hand button-paper"
            onClick={() => handleClick("paper")}
            id="paper"
          >
            <div className="button-bg">
              <img src="/icon-paper.svg" alt="Hand gesture for paper" />
            </div>
          </button>
          <button
            className="button-hand button-scissors"
            onClick={() => handleClick("scissors")}
            id="scissors"
          >
            <div className="button-bg">
              <img src="/icon-scissors.svg" alt="Hand gesture for scissors" />
            </div>
          </button>
        </div>
        <div className="main__second-row">
          <button
            className="button-hand button-rock"
            onClick={() => handleClick("rock")}
            id="rock"
          >
            <div className="button-bg">
              <img src="/icon-rock.svg" alt="Hand gesture for rock" />
            </div>
          </button>
        </div>
        <div className="triangle">&#9650;</div>
      </main>
      <button className="rules">Rules</button>
    </>
  );
}

export default Game;
