import { useEffect, useState } from "react"
import { diceData } from "../constants";

export default function useDice() {

    const [dices, setDices] = useState([])
    const [chosenItemIndex, setChosenItemIndex] = useState(2)
    const [isRolling, setIsRolling] = useState(false)
    const [rnd, setRnd] = useState(false)

    useEffect(() => {
        setDices(diceData.sort(() => 0.5 - Math.random()))
    }, [rnd])


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

        const finallTime = 1200
        setRnd(prev => !prev)
        setIsRolling(true)
        for (let index = 0; index <= diceData.length; index++) {
            setTimeout(() => {
                setChosenItemIndex(RandomNumber())
            }, (finallTime / diceData.length) * index);
        }
        setTimeout(() => {
            setIsRolling(false)
        }, finallTime + 400); //400 is for 0.4s dices container transitiom timing
    }

    return {
        dices,
        isRolling,
        handleRoll, 
        chosenItemIndex
    }
}