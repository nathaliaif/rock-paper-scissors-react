import { X } from "lucide-react";
import { useEffect, useState } from "react";

// Define props type
type ModalRulesContentProps = {
  onClose: () => void;
};

export default function ModalRulesContent({ onClose }: ModalRulesContentProps) {
  const [modalState, setModalState] = useState("");

  useEffect(() => {
    setModalState("show");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeAnimation();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Clean up when modal unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {}, []);

  // Close on click
  function closeAnimation() {
    setModalState("hidden");
    setTimeout(() => {
      onClose();
    }, 1000);
  }

  return (
    <div className={`modal-overlay ${modalState}`} onClick={closeAnimation}>
      <div
        className={`modal-container ${modalState}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeAnimation} className="close-button">
          <X className="x-icon" />
        </button>
        <h3 className="modal__title">Rules</h3>
        <div className="main__game">
          <div className="main__first-row">
            <div className="button-hand button-rules">
              <div className="button-bg">
                <img
                  src="/icon-paper.svg"
                  alt="Hand gesture for paper"
                  className="hand-rules"
                />
              </div>
            </div>
            <p className="arrow-text arrow-left">beats</p>
            <div className="button-hand button-rules">
              <div className="button-bg">
                <img
                  src="/icon-scissors.svg"
                  alt="Hand gesture for scissors"
                  className="hand-rules"
                />
              </div>
            </div>
          </div>
          <div className="main__arrow-texts">
            <p className="arrow-text arrow-down-right">beats</p>
            <p className="arrow-text arrow-up-right">beats</p>
          </div>
          <div className="main__second-row">
            <div className="button-hand button-rules">
              <div className="button-bg">
                <img
                  src="/icon-rock.svg"
                  alt="Hand gesture for rock"
                  className="hand-rules"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
