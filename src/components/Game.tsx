import { useNavigate } from "react-router";

function Game() {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const hand = e.currentTarget.id;
    navigate("/result", { state: hand });
  };

  return (
    <>
      <main>
        <div className="main__first-row">
          <button
            className="button-hand button-paper"
            onClick={handleClick}
            id="paper"
          >
            <div className="button-bg">
              <img src="/icon-paper.svg" alt="Hand gesture for paper" />
            </div>
          </button>
          <button
            className="button-hand button-scissors"
            onClick={handleClick}
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
            onClick={handleClick}
            id="rock"
          >
            <div className="button-bg">
              <img src="/icon-rock.svg" alt="Hand gesture for rock" />
            </div>
          </button>
        </div>
        <div className="triangle">&#9650;</div>
      </main>
    </>
  );
}

export default Game;
