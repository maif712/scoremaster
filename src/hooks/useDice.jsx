import { useEffect, useState } from "react"
import { diceData } from "../constants";

export default function useDice() {

    const [dices, setDices] = useState([])
    const [rollsHistory, setRollsHistory] = useState([])
    const [sixAmount, setSixAmount] = useState(0)
    const [chosenItemIndex, setChosenItemIndex] = useState(2)
    const [isRolling, setIsRolling] = useState(false)
    const [rnd, setRnd] = useState(false)

    const transitionItming = 400;

    useEffect(() => {
        setDices(diceData.sort(() => 0.5 - Math.random()))
    }, [rnd])

    
    useEffect(() => {
        const includeSixArray = rollsHistory.filter(roll => roll.value == 6)
        setSixAmount(includeSixArray.length)
    }, [rollsHistory])
   


    let temp = 0
    const RandomNumber = () => {
        const rndNumber = Math.floor(Math.random() * diceData.length)
        if (temp == rndNumber) {
            return RandomNumber()
        }
        else {
            temp = rndNumber;
            return rndNumber
        }
    }

    const handleRoll = () => {

        let getRndNumber;

        const finallTime = 1200
        setRnd(prev => !prev)
        setIsRolling(true)
        for (let index = 0; index <= diceData.length; index++) {
            setTimeout(() => {
                getRndNumber = RandomNumber()

                setChosenItemIndex(getRndNumber)
                setTimeout(() => {
                    if(index == diceData.length){ 
                        setRollsHistory(prev => [dices[getRndNumber], ...prev])
                    }
                }, transitionItming);
            }, (finallTime / diceData.length) * index);
        }
        setTimeout(() => {
            setIsRolling(false)
        }, finallTime + transitionItming); //400 is for 0.4s dices container transitiom timing
    }

    return {
        dices,
        isRolling,
        handleRoll,
        chosenItemIndex,
        rollsHistory,
        sixAmount
    }
}