import { useRef, useState } from "react"



export default function useRegisterForm() {
  
    const [playerNameInput, setPlayerNameInput] = useState("")
    const [inputErrorState, setInputErrorState] = useState("")

    const inputRef = useRef()
    const handleNameInput = (e) => {
        setPlayerNameInput(e.target.value)
    }

    const handleClear = () => {
        setPlayerNameInput("")
        inputRef.current.focus()
    }



    return {
        playerNameInput,
        handleNameInput,
        handleClear,
        inputRef,
        inputErrorState,
        setInputErrorState
    }
}
