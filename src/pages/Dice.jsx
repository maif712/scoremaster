import useDice from "../hooks/useDice"




export default function Dice() {

  const {
    selectedDice,
    isRolling,
    handleRoll
  } = useDice()

  const DiceComponent = selectedDice?.el

  return (
    <section className="dice-section">
      <div className="layout-wrapper">
        <h2 className="dice-title">roll-a-dice</h2>
        <div className="flex flex-col items-center gap-1 mt-5 mb-full">
          <div>
            <DiceComponent />
          </div>
          <button onClick={handleRoll} className={`roll-dice-btn ${isRolling ? "disable" : ""}`}>roll the dice</button>
        </div>
      </div>
    </section>
  )
}
