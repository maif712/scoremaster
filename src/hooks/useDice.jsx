import { useState } from "react"
import { diceData } from "../constants";

export default function useDice() {

    const [selectedDice, setSelectedDice] = useState(diceData[0])
    const [isRolling, setIsRolling] = useState(false)


    let temp = 0
    const RandomNumber = () => {
        const rndNumber = Math.floor(Math.random() * diceData.length)
        if(temp == rndNumber)
        {
            return RandomNumber()
        }
        else {
            temp = rndNumber;
            return rndNumber
        }
    }

    const handleRoll = () => {
        setIsRolling(true)
        for (let index = 0; index < 6; index++) {
            setTimeout(() => {
                setSelectedDice(diceData[RandomNumber()])
            }, 200 * index);
        }
        setTimeout(() => {
            setIsRolling(false)
        }, 1000);
    }

    return {
        selectedDice,
        isRolling,
        handleRoll
    }
}