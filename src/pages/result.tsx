import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const hands = ["rock", "paper", "scissors"];

// user winning
const userWinningHand = [
  ["rock", "scissors"],
  ["scissors", "paper"],
  ["paper", "rock"],
];

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const userHand = state;

  const [houseHand, setHouseHand] = useState("empty");
  const [gameResult, setGameResult] = useState("");

  function checkWinner(user: string, house: string): void {
    const currentGame = [user, house];
    console.log(user);
    console.log(house);

    if (user === house) {
      setGameResult("It's a tie");
      return;
    }

    //Check winner by comparing two arrays
    const isUserWinner = userWinningHand.some(
      (value) => JSON.stringify(value) === JSON.stringify(currentGame)
    );

    if (isUserWinner) {
      setGameResult("You win");
    } else {
      setGameResult("You lose");
    }
  }

  useEffect(() => {
    const randomizedNumber = Math.floor(Math.random() * 3) + 1;
    const houseChoice = hands[randomizedNumber];

    const timeoutId = setTimeout(() => {
      setHouseHand(houseChoice);
      checkWinner(userHand, houseChoice);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="result-container">
      <div className="hands-container">
        <div className="result-individual">
          <div className={`button-hand button-${userHand}`} id={userHand}>
            <div className="button-bg">
              <img
                src={`/icon-${userHand}.svg`}
                alt={`Hand gesture for ${userHand}`}
              />
            </div>
          </div>
          <p className="result-choice-text">You picked</p>
        </div>
        <div className="result-individual">
          <div className={`button-hand button-${houseHand}`} id={houseHand}>
            <div className="spinner-box">
              <div className="pulse-container">
                <div className="pulse-bubble pulse-bubble-1"></div>
                <div className="pulse-bubble pulse-bubble-2"></div>
                <div className="pulse-bubble pulse-bubble-3"></div>
              </div>
            </div>
            <div className="button-bg">
              <img
                src={`/icon-${houseHand}.svg`}
                alt={`Hand gesture for ${houseHand}`}
              />
            </div>
          </div>
          <p className="result-choice-text">The house picked</p>
        </div>
      </div>
      <div className="final-result-container" state={houseHand}>
        <p className="result-text">{gameResult}</p>
        <button className="play-again-button" onClick={() => navigate("/")}>
          Play again
        </button>
      </div>
    </div>
  );
}
