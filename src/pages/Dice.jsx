import useDice from "../hooks/useDice"




export default function Dice() {

  const {
    dices,
    isRolling,
    handleRoll,
    chosenItemIndex,
    rollsHistory,
    sixAmount
  } = useDice()

  // const DiceComponent = selectedDice?.el

  return (
    <section className="dice-section">
      <div className="layout-wrapper">
        <h2 className="dice-title">roll-a-dice</h2>
        <div className="flex flex-col items-center gap-1 mt-5 mb-full">
          <div className="dices-parent overflow-hidden">
            <div style={{ "--x": `-${(chosenItemIndex) * 116}%` }} className="dices-container">
              {/* <DiceComponent /> */}
              {dices.map(dice => {
                return (
                  <div key={dice.id}>
                    {dice.el()}
                  </div>
                )
              })}
            </div>
          </div>
          <button onClick={handleRoll} className={`roll-dice-btn ${isRolling ? "disable" : ""}`}>roll the dice</button>
          <div className="rolls-history">
            <div className="sticky">
              <h3 className="rolls-history__title">rolls history</h3>
              <p className="rolls-history__para">your six: ({sixAmount})</p>
            </div>
            <div className="flex flex-col gap-05 p-block-1">
              {rollsHistory.map((roll, index) => {
                return (
                  <div key={index} className={`roll ${roll.value == 6 ? "six" : ""}`}>
                    <span>{roll.value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
